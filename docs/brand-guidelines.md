# Brand Guidelines — Lone Star Kitchen Co. (demo template)

Source of truth for voice, tone, and visual identity on this page. Anyone writing copy for a client clone should read this first — it's the difference between a page that sounds like a homeowner's neighbor and one that sounds like a chatbot.

## Voice constants (true in every client clone)

**We are:**
- Plain-spoken. A Dallas homeowner should be able to read a sentence out loud and not sound like a brochure.
- Concrete. Numbers, timeframes, and named neighborhoods beat adjectives every time. "Done in three weeks" beats "fast turnaround."
- Confident without volume. The work speaks; we don't need exclamation points or superlatives to back it up.
- Warm, not slick. Friendly like a contractor who shows up on time, not a salesperson who overpromises.

**We are not:**
- Corporate. No "solutions," "leverage," "best-in-class."
- Hyped. No "elevate," "seamless," "unleash," "game-changer," "transform your space," "dream come true," "unlock."
- Vague. Never say "quality craftsmanship" when you can say "we show up when we say we will and send a written price before we leave."
- Exclamation-heavy. One idea, one sentence, no forced energy.

## Tone dial

| Context | Formality | Energy |
|---|---|---|
| Hero headline | Low-medium — punchy, short | Medium — confident, not shouting |
| Body copy / subheads | Low — conversational | Low — calm, factual |
| CTA labels | Low — verb-first, specific | Medium — clear next step |
| Trust bar / stats | Low — just the fact | Low — no adjectives needed |
| Reviews | N/A (real customer voice, don't touch) | N/A |

## Banned words and phrases

elevate · seamless · unleash · game-changer · transform your space · dream come true · unlock · best-in-class · cutting-edge · world-class · take it to the next level · solutions · leverage · robust · holistic · "we're passionate about"

If a sentence could be pasted into any remodeling company's site in any city and still make sense, rewrite it until it's specific to *this* homeowner's problem.

## Messaging pillars (in priority order)

1. **Speed of answer** — same-day real price, not "we'll be in touch."
2. **Proof, not promises** — the before/after photo does the convincing, copy just gets out of the way.
3. **No pressure** — one photo, no in-home sales pitch required to get a number.
4. **Local & licensed** — Dallas-specific, licensed & insured, real job count.

## Visual identity (already implemented in `src/styles/global.css`)

- **Canvas** `#FBFBFA`, **Ink** `#1A1A1A`, **Body** `#2F3437`, **Muted** `#787774`, **Line** `#EAEAEA`
- **WhatsApp green** `#25D366` — the one loud color, CTA only
- **Serif** (Newsreader) for headlines, **Sans** (Geist) for everything else
- No gradients, no neon, shadows near-invisible only on hover, WhatsApp CTA is the single accent

## Applying this to a new client

Swap `src/config/site.ts` as usual. Re-read the hero headline and reviews out loud — if a sentence sounds like it was generated rather than said, rewrite it plain.
