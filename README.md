# Mazoon App

React + Vite + Tailwind website for Mazoon Al-Suhub, configured for deployment to GitHub Pages with GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy on GitHub Pages

1. Push to `main` branch.
2. In GitHub repository settings, set **Pages** source to **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` builds and deploys automatically.
