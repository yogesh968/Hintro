<div align="center">

<img src="public/favicon.svg" alt="Hintro Logo" width="72" height="72" />

# Hintro Dashboard

**A production-ready AI-powered call intelligence dashboard**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[Live Demo](#) · [Report Bug](https://github.com/yogesh968/Hintro/issues) · [Request Feature](https://github.com/yogesh968/Hintro/issues)

<br/>

![Hintro Dashboard Preview](src/assets/hero.png)

</div>

---

## What is Hintro?

Hintro is a sleek, pixel-perfect dashboard for an AI-powered call intelligence platform. Built as a frontend assignment, it demonstrates real-world React architecture — dynamic user switching, data-driven views, skeleton loaders, feedback flows, and a fully responsive layout — all without a single UI library.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Language | JavaScript (JSX) — no TypeScript |
| Styling | Plain CSS + CSS Custom Properties |
| HTTP Client | Axios |
| Routing | React Router DOM v7 |
| State | Context API |
| Animations | Framer Motion v12 |
| Deployment | Vercel |

> **Constraint respected:** No Tailwind, no MUI, no styled-components — pure CSS variables for every design token.

---

## Features

### Core
- **Dynamic User Switching** — Toggle between `u1` (empty state) and `u2` (populated) via navbar dropdown; `x-user-id` header injected automatically into every API request via Axios interceptor.
- **Data-Driven Views** — `u1` renders a beautiful onboarding "How it works" flow; `u2` renders live stats and session history from the mock API.
- **Responsive Layout** — Adapts across desktop, tablet, and mobile with a collapsible sidebar and fluid grid.

### UI & UX
- **Pixel-Perfect Design** — Matches the Figma spec with a consistent 8px spacing system.
- **Skeleton Loaders** — Every data section shows animated placeholders while fetching.
- **Feedback Modal** — Interactive modal with a success animation; submission state persisted to `localStorage`.
- **Framer Motion Micro-interactions** — Card hover lifts, modal entry/exit, loader spinner — subtle and purposeful.
- **Global Theme System** — All colors, shadows, radii, and spacing live in `variables.css`. Zero hardcoded values in components.

### Architecture
- **Custom Hooks** — `useProfile`, `useStats`, `useSessions`, `useDashboard` cleanly separate API logic from UI.
- **Centralized Axios Instance** — Single source of truth for base URL, headers, and error normalization.
- **LocalStorage Persistence** — Selected user and feedback status survive page reloads.
- **Error Boundaries** — Graceful `ErrorState` component for failed API calls.

---

## Project Structure

```
Hintro/
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── api/
    │   ├── axios.js          # Axios instance with request/response interceptors
    │   ├── dashboard.js      # /dashboard endpoint
    │   ├── profile.js        # /profile endpoint
    │   └── sessions.js       # /sessions & /stats endpoints
    ├── components/
    │   ├── Dashboard/
    │   │   ├── StatsCard.jsx       # 4-up stats grid with icons and skeleton
    │   │   └── SessionHistory.jsx  # Grouped session list with avatars
    │   ├── Feedback/
    │   │   ├── FeedbackModal.jsx   # Animated modal with success state
    │   │   └── FeedbackSidebar.jsx # Sidebar trigger + usage meter
    │   ├── Layout/
    │   │   ├── Layout.jsx    # Shell: sidebar + navbar + main
    │   │   ├── Navbar.jsx    # Sticky header with user switcher
    │   │   └── Sidebar.jsx   # Fixed nav with active link highlighting
    │   └── Shared/
    │       ├── Card.jsx       # Animated surface wrapper
    │       ├── EmptyState.jsx # Illustrated empty state
    │       ├── ErrorState.jsx # Error feedback UI
    │       └── Loader.jsx     # Full-screen and inline spinners
    ├── context/
    │   └── UserContext.jsx   # Active user state + switchUser action
    ├── hooks/
    │   ├── useDashboard.js
    │   ├── useProfile.js
    │   ├── useSessions.js
    │   └── useStats.js
    ├── pages/
    │   └── Dashboard.jsx     # Top-level route, orchestrates all sections
    ├── styles/
    │   ├── variables.css     # All design tokens (colors, spacing, shadows)
    │   └── global.css        # CSS reset + base typography
    ├── utils/
    │   ├── formatDate.js     # Date formatting + session grouping
    │   ├── formatDuration.js # Seconds → "36m 51sec" formatter
    │   └── storage.js        # localStorage abstractions
    ├── App.jsx               # Router + Context providers
    └── main.jsx              # ReactDOM entry point
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yogesh968/Hintro.git
cd Hintro

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## API Reference

All requests hit `https://mock-backend-hintro.vercel.app` with the `x-user-id` header set dynamically.

| Endpoint | Method | Description |
|---|---|---|
| `/profile` | GET | Fetch user profile (name, email) |
| `/stats` | GET | Fetch aggregated call statistics |
| `/sessions` | GET | Fetch paginated session history |
| `/dashboard` | GET | Fetch combined dashboard data |

---

## Design Decisions

**Why Context API over Redux?**
The app has a single piece of shared state — the active user. Context API is the right tool; Redux would be over-engineering.

**Why `window.location.reload()` on user switch?**
For a demo with mock APIs, a full reload is the cleanest way to flush all hook states simultaneously. In production, this would be replaced with granular state invalidation (e.g., React Query's `queryClient.clear()`).

**Why plain CSS over Tailwind?**
The assignment explicitly required no utility-class frameworks. CSS variables provide the same design-token benefits with zero build-time overhead.

---

## Deployment

This project is optimized for [Vercel](https://vercel.com).

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Vercel auto-detects Vite. Build settings:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

---

## Assumptions

1. **Empty state detection** — `u1` is identified by `stats.totalSessions === 0` and an empty `sessions` array.
2. **Avatars** — The API returns no avatar URLs; participant avatars use `pravatar.cc` placeholders seeded by index.
3. **User switching** — A page reload on switch is intentional for demo clarity, not a limitation.

---

## License

MIT © [Yogesh](https://github.com/yogesh968)

---

<div align="center">
  <sub>Built with ❤️ for the Hintro Frontend Assignment</sub>
</div>
