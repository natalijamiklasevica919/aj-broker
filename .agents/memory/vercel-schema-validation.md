---
name: Vercel schema validation
description: Distinguishing upstream JSON Schema dialect errors from invalid Vercel service settings.
---

Do not change application routing or deployment settings solely because a generic validator cannot compile Vercel's published JSON schema.

**Why:** The schema retrieved during Vercel setup declared draft-04 while containing newer-draft keywords and numeric exclusive bounds in unrelated function settings. Both draft-04 and default AJV compilation failed before evaluating the project's configuration.

**How to apply:** Check whether the failure concerns the schema itself or the project data. Consult current Vercel Services documentation and prefer the supported Vercel CLI for end-to-end validation. Recheck the upstream schema before assuming this mismatch still exists.
