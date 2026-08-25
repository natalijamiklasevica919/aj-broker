---
name: Resend and mailbox routing
description: Domain routing constraints for the broker website’s Resend sender and Microsoft 365 recipient.
---

Resend’s sending-domain records can live on a `send` subdomain while the root domain’s MX record must point to the actual mailbox provider. A Resend send-only connection can deliver email but cannot create or inspect domains through the Resend API.

**Why:** A verified sender and successful Resend API response do not guarantee that the recipient mailbox exists or that inbound DNS routes to it. Root-domain MX records are mutually exclusive at the receiving layer; using Resend Receiving for the root domain sends mail to Resend instead of Microsoft 365.

**How to apply:** Keep Resend’s `send` records for outbound delivery, and verify the root MX points to the intended mailbox provider before using live form submissions as an inbox-delivery check.