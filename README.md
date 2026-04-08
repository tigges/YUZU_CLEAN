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

## Cloudways (https://wordpress-1344959-6336336.cloudwaysapps.com/)

We cannot log into your Cloudways account from here. You can put this **static** site on that host by uploading the contents of **`out/`** after `npm run build`.

**Important:** That URL is a typical **WordPress** application. The web root is usually `public_html` with WordPress files. Syncing `out/` **into the same folder as WordPress** can **break or replace** the WordPress install unless you use a **subfolder** (e.g. `public_html/yuzu/`) or a **separate Cloudways application** for static/HTML.

### Option A — GitHub Actions (rsync)

Workflow: **`.github/workflows/cloudways-static.yml`** (manual: **Actions → Deploy static site to Cloudways → Run workflow**).

Add repository **Secrets**:

| Secret | Description |
|--------|-------------|
| `CLOUDWAYS_SSH_HOST` | SSH host from Cloudways (IP or hostname) |
| `CLOUDWAYS_SSH_USER` | SSH username |
| `CLOUDWAYS_SSH_KEY` | Private key PEM (full key) |
| `CLOUDWAYS_SSH_PORT` | SSH port (often not 22 on Cloudways — use the value from the panel) |
| `CLOUDWAYS_REMOTE_PATH` | Absolute path to the **deploy folder** (e.g. `.../public_html/yuzu` — trailing slash optional; rsync targets the directory contents) |

Optional: `CLOUDWAYS_RSYNC_EXTRA` = `--delete` only on a **dedicated** deploy path (never on full WordPress `public_html`).

The workflow builds with `NEXT_PUBLIC_SITE_URL=https://wordpress-1344959-6336336.cloudwaysapps.com` and **no** base path (site at domain root of that folder). If you deploy to a **subfolder**, set `NEXT_PUBLIC_BASE_PATH` in the workflow to match (e.g. `/yuzu`) and adjust `NEXT_PUBLIC_SITE_URL` to include that path if needed.

### Option B — Manual (SFTP)

1. Cloudways: enable **SSH/SFTP**, note host, user, port, and path.
2. Locally:

```bash
NEXT_PUBLIC_SITE_URL=https://wordpress-1344959-6336336.cloudwaysapps.com NEXT_PUBLIC_BASE_PATH="" npm run build
```

3. Upload everything inside **`out/`** to the chosen folder on the server (FileZilla or Cloudways file manager).

### Option C — Keep WordPress, show this as a subpath

Create `public_html/yuzu/` (or similar), upload `out/` there, build with `NEXT_PUBLIC_BASE_PATH=/yuzu` and `NEXT_PUBLIC_SITE_URL` including `/yuzu` if you want correct canonical URLs.

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
