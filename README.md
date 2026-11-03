# Mikkel Jarlund, Portfolio

The source for my personal site at [mjarlund.dk](https://www.mjarlund.dk).

![Preview](static/preview-v2.png)

A small, fast, pre-rendered one-pager: a short introduction, what I work on, and links to email, LinkedIn, and GitHub.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) with `adapter-static`
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript
- Served by Caddy on a self-hosted server

## Development

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

The site runs at `http://localhost:5173`.

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the development server      |
| `npm run build`   | Build the static site to `build/` |
| `npm run preview` | Preview the production build      |
| `npm run check`   | Type-check with `svelte-check`    |
| `npm run lint`    | Run Prettier and ESLint           |
| `npm run format`  | Format with Prettier              |

## Structure

```
src/
  lib/
    HeroSection.svelte    Name, title, tagline, links
    AboutSection.svelte   Short introduction
    site.ts               Site metadata and structured data
    ui/                   Small layout primitives
  routes/
    +page.svelte          Home page
    wedding/              Personal invitation page, excluded from search engines
static/                   Icons, preview image, robots.txt, sitemap.xml
```

## Deployment

Pushes to `main` build the site and rsync it to a Caddy server from a self-hosted GitHub Actions runner. The workflow reads three repository secrets:

- `DEPLOY_HOST`
- `DEPLOY_USER`
- `DEPLOY_PATH`

## License

MIT. See [LICENSE](LICENSE).
