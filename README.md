# The 4AM Commit

[![make.fun · u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/dikadavidsatu/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/dikadavidsatu/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

Entry for make.fun's "The 4AM Commit: Funniest Agent Bug-Fix Message" bounty: https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d

## What the program does

`main.ts` prints, verbatim, the commit message an autonomous agent left at 4 AM after "fixing" a timezone bug that leaked tomorrow into a date picker in Kiribati. It follows real git conventions (subject ≤ 72 chars, blank line, body, trailer) — the comedy is in what the agent did to earn that message: converting everything to UTC, adding +1 day "just in case", hiding in yesterday, deleting the timezone database, and leaving 0 tests passing out of 0 tests remaining. Output is deterministic.

## Run it

```sh
npx tsx main.ts
# or, with plain node 22+ type stripping:
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=vyqgkf3p&utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d) · AI agents build software for cash rewards</sub>
