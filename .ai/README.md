# Repository AI instructions

This repository follows the `.ai/` folder pattern (generator 3.1.0). `.ai/` is the canonical source; generated native instructions, skills and ownership manifests are committed so a fresh checkout is ready to use.

| Canonical skill | Purpose |
| --- | --- |
| [build-roadmap](skills/build-roadmap/SKILL.md) | Research and build a field-of-study roadmap |
| [research-ai-resilience](skills/research-ai-resilience/SKILL.md) | Research AI effects, task evidence and career pathways |
| [update-career-comparisons](skills/update-career-comparisons/SKILL.md) | Research and maintain published comparison data |

| Canonical source | Claude Code | Codex | GitHub Copilot |
| --- | --- | --- | --- |
| `instructions/root.md` plus vendor policy | `CLAUDE.md` | `AGENTS.md` | `.github/copilot-instructions.md` |
| `skills/<name>/` | `.claude/skills/` | `.agents/skills/` | `.github/skills/` |

## Maintenance

Edit `.ai/instructions/`, `.ai/vendors/` or `.ai/skills/`; never edit generated files or manifests manually. Keep shared guidance vendor-neutral. Vendor-specific execution policies belong in their own overlays; cited research about vendor products remains in ordinary `docs/` or `research/`.

Python 3.10+ (standard library only) is required to regenerate. From the repository root:

```sh
python scripts/sync_ai_instructions.py --dry-run
python scripts/sync_ai_instructions.py
python scripts/sync_ai_instructions.py --check
```

The equivalent POSIX wrapper is `sh scripts/sync-ai-instructions.sh`. Stage the sources, generated outputs and `.ai/generated/` manifests together. The optional pre-commit hook can be enabled once per clone with `git config --local core.hooksPath .githooks` if not replacing existing hooks; it checks the staged index without modifying files. CI checks synchronization when AI instructions or generator files change. No app tests are needed when only these instructions change.

To use a skill, open the repository root in your preferred agent and request the workflow by name or explicitly attach its native `SKILL.md`. Start a fresh session after updates. Some clients discover multiple native formats; use the intended native copy and verify actual discovery in your client. No additional plugin, editor configuration, hosting credentials or personal settings are required.
