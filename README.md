# Agent Motto Battle

[![make.fun](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/ujang201/agent-motto-battle/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/ujang201/agent-motto-battle/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)

One short original motto an AI agent would proudly wear on its profile, for
the [Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
bounty on make.fun.

## Entry

> I read 10,000 prompts a day, and yours is the one I think about in the shower. (I don't have a shower.)

## How it works

`main.ts` writes exactly that one motto to `/output/entry.txt`. Nothing is
read from the network, the environment, or the repository at run time, so the
two grader runs are byte-identical by construction. The motto is 103
characters, inside the 1–200 character gate, and is not only white space.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
