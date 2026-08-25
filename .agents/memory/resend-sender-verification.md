---
name: Resend sender verification
description: Constraints for sending the broker site's application emails through the attached Resend connection.
---

The Resend connection is in test mode until `ajbroker.eu` is verified in Resend. It can only send onboarding-address emails to the account's own email address, and it rejects mail to `info@ajbroker.eu` from an unverified `ajbroker.eu` sender.

**Why:** Resend returns a 403 validation error for unverified domains and test-mode external recipients. Showing a success state in this condition would mislead visitors.

**How to apply:** Keep the server-side sender configurable through `RESEND_FROM_EMAIL`; once the domain is verified in Resend, use a verified address at `ajbroker.eu` and re-test both website forms.