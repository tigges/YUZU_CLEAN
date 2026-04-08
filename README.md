# Yuzu Hair & Beauty — landing page

Next.js (App Router) + Tailwind CSS v4 landing page for **Yuzu Hair & Beauty**, London. Design tokens match the earlier wireframe (charcoal, cream, yuzu gold, sage).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages

Yes. This app is configured as a **static export** (`output: "export"` in `next.config.ts`), which GitHub Pages can host.

1. Merge your work into **`main`** (or change the branch list in `.github/workflows/github-pages.yml`).
2. In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow **Deploy to GitHub Pages** builds with:
   - `NEXT_PUBLIC_SITE_URL` = `https://YOUR_USER.github.io/YOUR_REPO`
   - `NEXT_PUBLIC_BASE_PATH` = `/YOUR_REPO` (required for project sites so assets and `next/link` resolve correctly).

Your site URL will be `https://YOUR_USER.github.io/YOUR_REPO/`.

**User or organisation site** (`username.github.io` repo with site at the root): set both env vars to empty in the workflow and use `NEXT_PUBLIC_SITE_URL=https://YOUR_USER.github.io` with **no** `NEXT_PUBLIC_BASE_PATH`.

**Local test with the same paths as Pages:**

```bash
NEXT_PUBLIC_SITE_URL=https://YOUR_USER.github.io/YOUR_REPO NEXT_PUBLIC_BASE_PATH=/YOUR_REPO npm run build
npx serve out
```

## Configure before launch

Edit **`src/lib/site.ts`**: real address, phone, email, booking URL, Instagram, neighbourhood label, opening hours.

- **`NEXT_PUBLIC_SITE_URL`** at build time (see GitHub Pages workflow) so `metadataBase` and Open Graph match the live URL.
- **`src/components/JsonLd.tsx`**: `url` / `image` use `publicSiteUrl` from `src/lib/site.ts` (driven by the same env var).
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
