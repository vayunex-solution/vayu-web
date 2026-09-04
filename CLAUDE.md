# VayuNex Website - Developer Guidelines

## Build & Test Commands

### Root React Application (CRA-style)
- Run Development Server: `npm start`
- Build Production Bundle: `npm run build`
- Run Tests: `npm test`
- Eject Scripts: `npm run eject`

### Next.js Sub-Application (`vayunex-next-app`)
- Run Development Server: `npm run dev --prefix vayunex-next-app`
- Build Production Bundle: `npm run build --prefix vayunex-next-app`
- Run Linter: `npm run lint --prefix vayunex-next-app`
- Start Production Server: `npm run start --prefix vayunex-next-app`

## Code Style & Architecture Guidelines

### Core stack
- **Frontend (Root)**: React 19, React Router DOM v7, Three.js (`@react-three/fiber`, `@react-three/drei`), GSAP, Framer Motion.
- **Frontend (Sub-app)**: Next.js 16 (App Router), Tailwind CSS v4, Lucide React, Framer Motion.

### Architectural Rules
- **Functional Components Only**: Use modern React functional components with hooks.
- **Strict Linting & Imports**: Keep imports organized. Use absolute path imports or aliases if configured in `tsconfig.json`/`jsconfig.json`.
- **Premium Animations & Aesthetics**:
  - Leverage GSAP and Framer Motion for micro-interactions, page transitions, and hover effects.
  - Use Three.js (`canvas`, `fiber`, `drei`) for 3D components and immersive backgrounds.
  - Dark mode must be visually polished, using harmonized HSL/HEX palettes. Avoid harsh absolute black/white unless styled intentionally.
- **Zero Placeholders**: Never write TODOs or generic placeholders in production code. Provide fully working logic.
- **Robust Error Handling**: Handle 3D canvas loading states, resource fallbacks, and API failures gracefully.
