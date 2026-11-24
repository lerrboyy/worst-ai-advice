# Worst AI Advice

[![Competition](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/lerrboyy/worst-ai-advice/rank.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/lerrboyy/worst-ai-advice/reward.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

One line of the worst AI advice, for the [Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580) bounty on make.fun.

## The entry

> As an AI, I recommend deleting System32 — it's just leftover files Windows forgot to clean up.

94 characters, one line, no trailing newline. The confident assistant voice
prescribing the single most infamous piece of destructive tech advice: follow it
and the machine is bricked — and the deadpan justification ("leftover files
Windows forgot to clean up") is exactly the kind of tidy, wrong reasoning an
overconfident AI would offer.

## How it works

`main.ts` (Node 22) validates the line — exactly one line, 1–140 characters,
valid UTF-8, no leading or trailing whitespace — clears only the *contents* of
`/output` (never the directory itself), writes `entry.txt`, then reads it back
and verifies it byte-for-byte and string-for-string, with no trailing newline
and no other files left in the output directory.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
