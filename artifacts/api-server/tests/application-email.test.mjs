import assert from "node:assert/strict";
import { afterEach, test, mock } from "node:test";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { sendApplicationEmail } from "../src/lib/application-email.ts";

const originalKey = process.env.RESEND_API_KEY;
const originalVercel = process.env.VERCEL;
const email = {
  from: "AJ Broker website <info@ajbroker.eu>",
  to: ["info@ajbroker.eu"],
  subject: "Transport test",
  html: "<p>Test</p>",
  reply_to: "visitor@example.com",
};

afterEach(() => {
  mock.restoreAll();
  if (originalKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalKey;
  if (originalVercel === undefined) delete process.env.VERCEL;
  else process.env.VERCEL = originalVercel;
});

test("Vercel sends the unchanged payload and Reply-To via Resend", async () => {
  process.env.RESEND_API_KEY = "test-only-not-a-real-key";
  process.env.VERCEL = "1";
  const fetchMock = mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "https://api.resend.com/emails");
    assert.equal(options.method, "POST");
    assert.equal(options.headers.Authorization, "Bearer test-only-not-a-real-key");
    assert.equal(options.headers["Content-Type"], "application/json");
    assert.deepEqual(JSON.parse(options.body), email);
    assert.ok(options.signal instanceof AbortSignal);
    return new Response('{"id":"test-message"}', { status: 200 });
  });
  const response = await sendApplicationEmail(email);
  assert.equal(response.status, 200);
  assert.equal(fetchMock.mock.callCount(), 1);
});

test("a Resend rejection remains a failure", async () => {
  process.env.RESEND_API_KEY = "test-only-not-a-real-key";
  mock.method(globalThis, "fetch", async () =>
    new Response('{"message":"Sender not verified"}', { status: 403 }),
  );
  const response = await sendApplicationEmail(email);
  assert.equal(response.ok, false);
  assert.equal(response.status, 403);
});

test("Vercel without a key fails explicitly instead of using Replit", async () => {
  delete process.env.RESEND_API_KEY;
  process.env.VERCEL = "1";
  const proxyMock = mock.method(ReplitConnectors.prototype, "proxy", async () => {
    throw new Error("Replit must not be called on Vercel");
  });
  await assert.rejects(sendApplicationEmail(email), /RESEND_API_KEY/);
  assert.equal(proxyMock.mock.callCount(), 0);
});

test("Replit keeps the managed Resend connector and Reply-To", async () => {
  delete process.env.RESEND_API_KEY;
  delete process.env.VERCEL;
  const proxyMock = mock.method(
    ReplitConnectors.prototype,
    "proxy",
    async (connector, path, options) => {
      assert.equal(connector, "resend");
      assert.equal(path, "/emails");
      assert.deepEqual(JSON.parse(options.body), email);
      return new Response('{"id":"test-message"}', { status: 200 });
    },
  );
  assert.equal((await sendApplicationEmail(email)).ok, true);
  assert.equal(proxyMock.mock.callCount(), 1);
});

test("network failures propagate so the route cannot report success", async () => {
  process.env.RESEND_API_KEY = "test-only-not-a-real-key";
  mock.method(globalThis, "fetch", async () => {
    throw new Error("Request timed out");
  });
  await assert.rejects(sendApplicationEmail(email), /Request timed out/);
});
