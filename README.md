# Tee Off Chiang Mai

Golf tours website for Chiang Mai and Northern Thailand. Built from the Chiang Mai Driver site structure (Next.js 16, Tailwind 4, shadcn/ui).

```bash
pnpm install
pnpm dev
```

## Where things live

- `src/app/golf-data.ts` — courses, prices (1–4 golfers), ratings, gallery shot list, WhatsApp links. Source: `Northbound_Golf_Master.xlsx`.
- `src/app/content.ts` — How it works, Why choose us, FAQ, holiday sightseeing copy.
- Pages: `/` (home), `/golf-tours`, `/golf-holidays`, `/why-choose-us`, `/faq`.

## To do before launch

- Confirm the **proposed** prices for Chiang Mai Highlands and Summit Green Valley (`priceStatus: 'proposed'` in `golf-data.ts`).
- Add approved course photos: set `image` and each gallery `src` in `golf-data.ts` (files in `public/images/golf/`). Until then a branded placeholder is shown.
- Add the hero drone clip as `public/images/golf/hero-drone.mp4` (+ optional `.webm`). Mobile uses the still photo.
- Replace the text wordmark (`src/app/BrandLogo.tsx`) with a designed logo if you have one.
