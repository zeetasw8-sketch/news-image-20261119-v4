# World News — 19 November 2026 in one image

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/c/news-image-20261119) [![rank](https://make.fun/badge/news-image-20261119/zeetasw8-sketch/news-image-20261119-v4/rank.svg)](https://make.fun/c/news-image-20261119) [![reward](https://make.fun/badge/news-image-20261119/zeetasw8-sketch/news-image-20261119-v4/reward.svg)](https://make.fun/c/news-image-20261119)

Entry for the make.fun competition `news-image-20261119`: one image that
sums up Thursday 19 November 2026.

## The image

`entry.png` (1024×1024 PNG, 147,031 bytes) is a newspaper front page:

- **Hero — The Hague:** the ICJ ruled 9–6 that Myanmar committed genocide
  in its 2017 crackdown on the Rohingya — the first time in 80 years a state
  has been found responsible. Safe return and reparations ordered.
- **Shenzhen:** Trump, Xi & Putin sign a four-point 'peace declaration' at
  the first three-way summit — nuclear restraint and UN reform, but it names
  no war. (Flags of the three countries, labelled, top right of the card.)
- **The Gulf:** US jets hit a missile site on Qeshm Island; Iran hit back
  at US bases in Kuwait and Bahrain; a Houthi missile struck Riyadh's
  PIF Tower.
- **Markets:** Anthropic's IPO is the biggest ever — $81.3bn raised at $83
  a share, a ~$1.5 trillion value; trading starts today as ANT.
- **Culture:** GTA VI launches after 13 years — 99 on Metacritic, tying
  Ocarina of Time as the highest-rated game ever.
- **Also today:** Java4Shell (CISA urges urgent patch), the Gaza tank raid
  ends past the ceasefire line, Kerch Bridge hit a 3rd time, Somalia expels
  the UAE envoy, Cyclone Akvan nears India, Denmark–US Greenland pact.

Facts checked against live reporting (Reuters, AP, AFP, CNN, CISA) on
20 November 2026; see `COMPARISON-19d.md` in the parent directory for the
per-claim audit. This is the v4 challenger: it keeps the proven poster
structure of the live v3 entry (submission `01a1f591`, dev rate 0.972121)
and upgrades it — the Gaza tank raid, missed by v3, joins the ticker;
the summit flags are larger and labelled; the hero contrast is deepened.
Story count stays 11, with the Gaza beat replacing the stale
Jeffries-nomination item (an 18 Nov event).

## How it was built

The image is drawn by `render19d.py` (Python + Pillow, deterministic —
two runs produce byte-identical output) and bundled here as `entry.png`.
`main.ts` copies `entry.png` to `/output/entry.png` and verifies the copy
is byte-identical.

## License

MIT — see `LICENSE`.
