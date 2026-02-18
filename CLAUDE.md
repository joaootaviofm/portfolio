# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

No test suite is configured.

## Architecture

Single-page React portfolio (Vite + Tailwind CSS v4). The entire page is one long scroll with smooth anchor navigation via `react-scroll`.

**Page structure** (`App.jsx`): `Navbar → Hero → About → Technologies → Projects → Footer`

Each section is a standalone component in `src/components/`. Sections use `id` attributes as scroll targets (e.g., `id="hero"`, `id="about"`, `id="technologies"`, `id="projects"`, `id="contact"`).

**Scroll navigation**: `react-scroll` `<Link>` components wire nav items to section IDs with per-section `offset` values to compensate for the fixed navbar height. When adding new sections, add both the `id` and a matching offset in `Navbar.jsx`.

**Animations**: All components use `motion` from `framer-motion` / `motion/react` (both are used interchangeably in this project). The standard pattern is `initial → whileInView` with `viewport={{ once: true }}` for scroll-triggered animations, and `initial → animate` for elements that should animate on page load.

**Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`). Custom fonts (`font-poppins`, `font-inter`) are defined in `src/index.css` using the `@theme` directive. The brand gradient is `from-[#9C83FF] to-[#FF9051]`.

**Content data**: Project cards in `Projects.jsx` are driven by a `projects` array defined in the component — add/edit projects there. Technologies in `Technologies.jsx` have a `techCategories` data array but the JSX is currently hardcoded separately (the array is unused in rendering).

**Background**: A decorative SVG pattern (`src/assets/background-pattern.svg`) is applied as a full-page absolute overlay in `App.jsx` with `opacity-40`.
