#!/bin/sh
# AI instruction sync v3.1.0: POSIX entrypoint; Python stdlib does the generation.
# Usage: sh scripts/sync-ai-instructions.sh [--check|--dry-run] [--staged]
#        [--claude] [--codex] [--copilot] [--skills] [--version]
set -eu
SYNC_ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
for candidate in "$SYNC_ROOT/.venv/bin/python" "$SYNC_ROOT/.venv/Scripts/python.exe"; do
    if [ -x "$candidate" ]; then
        exec "$candidate" "$SYNC_ROOT/scripts/sync_ai_instructions.py" "$@"
    fi
done
for candidate in python3 python; do
    if command -v "$candidate" >/dev/null 2>&1 && "$candidate" -c 'import sys; assert sys.version_info >= (3, 10)' 2>/dev/null; then
        exec "$candidate" "$SYNC_ROOT/scripts/sync_ai_instructions.py" "$@"
    fi
done
echo "ai-sync: Python 3.10+ required." >&2
exit 1
