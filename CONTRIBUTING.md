# Contributing and Development

This file documents how to run, maintain, and deploy the ACCL website.

## AI-Assisted Development

This website was created and refined with assistance from Google AI Studio and Codex. Human review remains required for content accuracy, scientific claims, deployment settings, and final publishing decisions.

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS
- React Router
- Motion
- Lucide React

## Local Development

Prerequisite: Node.js

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

By default the app is served at:

```text
http://localhost:3000/
```

Build for production:

```bash
npm run build
```

Type-check:

```bash
npm run lint
```

## Deployment

This repository is deployed with GitHub Pages through GitHub Actions. Pushes to `main` trigger:

```text
.github/workflows/deploy.yml
```

The workflow builds the Vite app, uploads the `dist/` artifact, and deploys it to GitHub Pages. A `404.html` fallback is generated for client-side routing.

Primary domain:

```text
https://ruijun-dang.github.io/
```

The legacy domain `www.ruijundang.pro` should be used as a redirect to the primary site. Do not configure it as the GitHub Pages custom domain if `ruijun-dang.github.io` should remain canonical.

## Content Updates

Most site content is maintained in:

```text
src/data.ts
```

Main pages are in:

```text
src/pages/
```

Static assets are in:

```text
public/
```

Important sharing and SEO assets:

```text
public/home_banner.png
public/wechat-share.png
index.html
public/sitemap.xml
public/robots.txt
```
