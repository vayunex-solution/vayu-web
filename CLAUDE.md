# VayuNex Website - Developer & AI Agent Reference

See the comprehensive **[AGENTS_AND_DEV_GUIDE.md](file:///d:/VAYUNEX/vayu-backup/vayunex-website/AGENTS_AND_DEV_GUIDE.md)** for detailed procedures on blog publishing (SEO/AEO/GEO), leadership profiles, mobile responsive image rules, and cPanel deployment.

## Build & Test Commands

### Primary Production App (`next-app/`)
- Run Development Server: `npm run dev --prefix next-app`
- Production Build & Sync: `npm run build` (runs Next.js SSG export and syncs to `build/`)
- Start Production Server: `npm run start --prefix next-app`

## Key Architecture & Operational Rules

1. **Source of Truth**: Always edit inside `next-app/src/`. The root `build/` directory is automatically generated during `npm run build`.
2. **Centralized Data**: All team profiles are stored in `next-app/src/data/people.js`.
3. **Responsive Image Rule**: Never use landscape aspect ratios (e.g. `4/3`) for portrait photos on mobile. Always use `aspect-ratio: 4 / 5` with `object-position: center 15%`.
4. **Knowledge Layer Sync**: When updating team roles or features, sync `next-app/public/llms.txt`, `llms-full.txt`, and `ai-facts.json`.
5. **Deployment**: Run `npm run build`, push to `main`, and execute the 1-click deployment command in cPanel terminal.

