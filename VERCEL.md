# AJ Broker on Vercel

The root `vercel.json` deploys three services in one Vercel project:

| Service | Public routing | Purpose |
| --- | --- | --- |
| `broker-site` | `/` and all non-API paths | AJ Broker website |
| `api-server` | `/api/*` | Application forms and health check |
| `mockup-sandbox` | None (internal only) | Component previews |

Routing preserves the original path: the Express app already mounts its router
at `/api`. Both browser forms use `/api/applications` on the same domain.
There are no server-to-server calls between these services, so no service
bindings are needed. A static Vite frontend cannot consume runtime bindings.
Do not add an internal API URL to client-side environment variables.

## Project setup

1. Import the GitHub repository into Vercel. Set the project's Root Directory
   to the repository root, not to an individual artifact directory.
2. Use Node.js 24 and pnpm. Keep the workspace packages, `pnpm-lock.yaml`,
   and `pnpm-workspace.yaml` available to all service builds.
3. In Vercel's protected Environment Variables settings, add `RESEND_API_KEY`
   for the environments that should send email. Use a Resend key with email
   sending permission. Do not commit it or put it in a `VITE_*` variable.
4. Optionally set `RESEND_FROM_EMAIL` to a verified sender. The default is
   `AJ Broker website <info@ajbroker.eu>`. That domain must be verified in the
   Resend account owning the key.
5. Deploy from Vercel and verify the checks below before changing DNS.

The recipient stays `info@ajbroker.eu`, and the visitor's email is passed as
`reply_to`. Missing keys, rejected emails, and network errors return an error
instead of a false success. On Replit, without a direct key, the existing
managed Resend connection is retained.

The current API routes do not use the database, so `DATABASE_URL` is not
required for these routes. Future routes that import the database package
will need a separately configured database connection.

## Checks

- `GET /api/healthz` returns `{"status":"ok"}`.
- `/`, favicon, social preview image, robots.txt, and sitemap.xml load.
- Submit the quick consultation and detailed application forms on the
  deployed domain, confirm actual inbox delivery, then use Reply to confirm
  it targets the visitor.
- `mockup-sandbox` has no public rewrite. Requests on the public domain do
  not enter that service.

The existing per-IP submission limit is in-memory and therefore per function
instance on Vercel; it is not a shared, deployment-wide quota.

## Local verification

From the repository root, with a current Vercel CLI supporting Services:

```sh
vercel dev -L
```

This runs all services locally without Vercel Cloud authentication. To test
real email delivery locally, configure `RESEND_API_KEY` securely in the local
environment. No binding URL needs to be configured.

Transport tests use mocked provider responses and send no email:

```sh
cd artifacts/api-server
node --test tests/application-email.test.mjs
```
