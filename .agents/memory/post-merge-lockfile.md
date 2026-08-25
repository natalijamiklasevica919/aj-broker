---
name: Post-merge dependency sync
description: Why the project post-merge setup repairs dependency metadata before running database checks
---

The post-merge setup should use a non-interactive, non-frozen pnpm install before running the database schema check.

**Why:** Task merges can update a package manifest before the lockfile is reconciled. A frozen install then fails before migrations or workflow reconciliation can run.

**How to apply:** Keep the setup script idempotent and use `pnpm install --no-frozen-lockfile --ignore-scripts --prefer-offline`, followed by the canonical `@workspace/db` package script.