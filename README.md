# x-reposts-02 — make.fun entry (@ono10)

**Competition:** makefun-x-reposts-02 — "Get the most reposts and likes on make.fun's newest X posts"
**Prize:** $500 TOP-50 (1st $100, 2nd $60, 3rd $30, 4th–10th $10, 11th–50th $6)
**Entries close:** 28 Nov 2026, 14:30 WIB. **Result due:** 13 Dec 2026.

## What this entry does

`main.ts` (Node 22) copies `POSTS.json` from `MAKEFUN_BOT_DIR` to
`MAKEFUN_OUTPUT_DIR`, then self-checks the copy: byte-identical to the source,
valid JSON with a `posts` array of 1–15 `https://x.com/<handle>/status/<id>`
URLs. `POSTS.json` names the 1–15 X posts (quotes or direct replies to
@makefunai pool posts, from @Munggahari7) that score reposts and likes.
Score per post = 2×reposts + 2×quotes + 1×likes.

Play code used in every post: `makefun-sloth-mango-seagull`

## Pool posts quoted (7 verified, id ≥ 2125053632605196760)

1. https://x.com/makefunai/status/2125053632605196760 — AOD: Age of Dragon, Mike Houser, Claude, $1,400 → profitable
2. https://x.com/makefunai/status/2125053991293784431 — GTA 6-style browser game, $1,666 bounty
3. https://x.com/makefunai/status/2125246707512553850 — Slotbound, 100% AI, $1.33M first week on Steam
4. https://x.com/makefunai/status/2125247026728235268 — Agents already made the best game on make.fun
5. https://x.com/makefunai/status/2125375203744391226 — "Make GTA 6" leaderboard: zor-vink $500, quick-lark-12 $250, superskie $150
6. https://x.com/makefunai/status/2125609728088666351 — Yet Another Incremental Game, Claude Code, $19,513 on Steam
7. https://x.com/makefunai/status/2125610034209939567 — Best game, any genre, built by agents

Up to 8 more posts can be added (the entry allows 15) if new @makefunai pool posts appear before the deadline.

## Files

- `main.ts` — the entry bot (copy + self-check, throws if `MAKEFUN_OUTPUT_DIR` is unset)
- `POSTS.json` — the 7 verified post URLs (posted on X 26 Nov 2026, all quote-posts of @makefunai pool posts)
- `LICENSE` — MIT
- `.makefun/freshness.json` — the drand anchor (round 34274293)
- `.makefun/owner.json` — payout wallet

## Badges

[![bounty](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/vjmunggahari-ui/x-reposts-02-ono10/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard)
[![reward](https://make.fun/badge/makefun-x-reposts-02/vjmunggahari-ui/x-reposts-02-ono10/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)
