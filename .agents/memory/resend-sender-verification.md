---
name: Resend sender verification
description: Constraints for sending the broker site's application emails through the attached Resend connection.
---

Resend rejects external delivery from unverified sending domains. The website sender should remain configurable through `RESEND_FROM_EMAIL` and use a verified address at the chosen domain.

**Why:** A successful local form test does not establish that production recipients can receive messages. Resend returns a validation error for unverified domains, and a success UI in that state would mislead visitors.

**How to apply:** Set `RESEND_FROM_EMAIL` to the verified sender before release, then submit both website forms and confirm delivery at the destination inbox.