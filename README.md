# Yuzu Hair & Beauty — landing page

Next.js (App Router) + Tailwind CSS v4 landing page for **Yuzu Hair & Beauty**, London. Design tokens match the earlier wireframe (charcoal, cream, yuzu gold, sage).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure before launch

Edit **`src/lib/site.ts`**: real address, phone, email, booking URL, Instagram, neighbourhood label, opening hours.

- **`src/app/layout.tsx`**: update `metadataBase` and Open Graph URLs when the domain is final.
- **`src/components/JsonLd.tsx`** / layout: ensure structured data `url` and `image` match production.
- **Newsletter** (`src/components/Newsletter.tsx`): point the form at your ESP (Mailchimp, Resend, etc.).

## Figma

See **`docs/FIGMA_SPECS.md`** for breakpoints, colour variables, type pairing (Fraunces + DM Sans), and component list.

## Scripts

| Command        | Description          |
|----------------|----------------------|
| `npm run dev`  | Development server   |
| `npm run build`| Production build     |
| `npm run start`| Serve production     |
| `npm run lint` | ESLint               |
