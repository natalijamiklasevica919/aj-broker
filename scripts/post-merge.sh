#!/usr/bin/env bash
set -euo pipefail

# Task merges can update package.json files before the lockfile is reconciled.
# Keep setup non-interactive and let pnpm repair that metadata mismatch.
pnpm install --no-frozen-lockfile --ignore-scripts --prefer-offline
pnpm --filter @workspace/db run push
