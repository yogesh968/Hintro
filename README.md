USE these credentials :
      email : test@gmail.com
      password : 123456


<div align="center">

<br/>

<img src="public/favicon.svg" alt="Hintro Logo" width="80" height="80" />

<br/>
<br/>

# ✦ Hintro Dashboard

### AI-Powered Call Intelligence — Frontend

<p>
  A production-grade React dashboard that transforms raw call data into<br/>
  actionable insights. Pixel-perfect, fully responsive, zero UI libraries.
</p>

<br/>

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

<br/>

[**🚀 Live Demo**](#) &nbsp;·&nbsp; [**🐛 Report Bug**](https://github.com/yogesh968/Hintro/issues) &nbsp;·&nbsp; [**💡 Request Feature**](https://github.com/yogesh968/Hintro/issues) &nbsp;·&nbsp; [**📖 Docs**](#api-reference)

<br/>

![Hintro Dashboard Preview](src/assets/hero.png)

<br/>

</div>

---


##  Overview

**Hintro** is a sleek, pixel-perfect dashboard for an AI-powered call intelligence platform. It was built as a frontend engineering assignment to demonstrate real-world React architecture at scale — without reaching for a single third-party UI component.

The app supports two distinct user experiences driven entirely by live API data:

| User | Experience |
|---|---|
| `u1` | Beautiful onboarding flow — "How it works" 3-step guide + empty state |
| `u2` | Fully populated dashboard — live stats grid + grouped session history |

Switching between users is instant via the navbar dropdown. The `x-user-id` header is injected automatically into every outgoing request through an Axios interceptor, so no component ever needs to think about authentication.

> **Constraint respected:** No Tailwind, no MUI, no styled-components, no component libraries — pure CSS custom properties for every single design token.

---

##  Live Demo

> Deployed on Vercel — [**View Live →**](#)

**Try it yourself:**
1. Open the live URL
2. In the top-right navbar, switch from **User 1** to **User 2**
3. Watch the dashboard transform from an empty onboarding state to a fully populated analytics view

---

## 🛠 Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | **React 19** + **Vite 8** | Latest stable React with fast HMR via Vite |
| Language | **JavaScript (JSX)** | No TypeScript — per assignment constraint |
| Styling | **Plain CSS** + CSS Custom Properties | Zero build overhead, full design-token control |
| HTTP Client | **Axios 1.x** | Interceptors for header injection and error normalisation |
| Routing | **React Router DOM v7** | Declarative client-side routing |
| State | **Context API** | Right-sized for a single shared state value |
| Animations | **Framer Motion v12** | Production-quality micro-interactions |
| Deployment | **Vercel** | Zero-config Vite detection, instant CDN |

---

##  Features

###  Dynamic User Switching
Toggle between `u1` and `u2` from the navbar dropdown. The `x-user-id` header is injected into every API request via an Axios request interceptor — no prop drilling, no manual header management. The selected user persists across page reloads via `localStorage`.

###  Data-Driven Dashboard
- **Stats Grid** — 4 KPI cards: Total Sessions, Average Duration, AI Used, Last Session — each with a colour-coded icon badge
- **Session History** — Calls grouped by date with participant avatar stacks, session titles, and formatted timestamps
- **Empty State** — When `u1` has no data, a 3-step "How it works" onboarding flow renders instead

###  Skeleton Loaders
Every async section renders animated placeholder cards while data is in-flight. No layout shift, no blank screens.

###  Feedback System
- Sidebar trigger opens an animated modal (Framer Motion `AnimatePresence`)
- Form with textarea, loading spinner on submit, and a success checkmark animation
- Submission state persisted to `localStorage` — green dot indicator appears after first submission

###  Global Theme System
All design tokens live in `variables.css`:
- Colors (background, surface, text, borders, semantic states)
- Stat card accent palette (pink, teal, purple, violet)
- Shadows (sm / md / lg)
- Border radii (sm / md / lg / xl)
- Layout dimensions (sidebar width, navbar height)

###  Responsive Layout
- Fixed 220px sidebar collapses gracefully on smaller viewports
- Stats grid uses `auto-fit minmax(200px, 1fr)` for fluid reflow
- Sticky navbar stays accessible at all scroll depths

### ⚡ Micro-interactions
- Card hover: subtle lift with `whileHover` scale
- Modal: scale + fade entry/exit via `AnimatePresence`
- Loader: continuous rotation animation
- Staggered card entry with configurable `delay` prop

---

## 📁 Project Structure

```
Hintro/
│
├── public/
│   ├── favicon.svg              # Brand favicon
│   └── icons.svg                # Reusable SVG icon sprite
│
├── src/
│   │
│   ├── api/                     # ── HTTP Layer ──────────────────────────
│   │   ├── axios.js             # Axios instance: baseURL + interceptors
│   │   ├── dashboard.js         # GET /dashboard
│   │   ├── profile.js           # GET /profile
│   │   └── sessions.js          # GET /sessions  GET /stats
│   │
│   ├── context/                 # ── Global State ─────────────────────────
│   │   └── UserContext.jsx      # activeUser state + switchUser action
│   │
│   ├── hooks/                   # ── Data Hooks ───────────────────────────
│   │   ├── useDashboard.js      # Fetches /dashboard
│   │   ├── useProfile.js        # Fetches /profile
│   │   ├── useSessions.js       # Fetches /sessions with pagination
│   │   └── useStats.js          # Fetches /stats
│   │
│   ├── components/
│   │   │
│   │   ├── Layout/              # ── Shell Components ─────────────────────
│   │   │   ├── Layout.jsx       # Flex shell: Sidebar + Navbar + main
│   │   │   ├── Navbar.jsx       # Sticky header with user switcher
│   │   │   └── Sidebar.jsx      # Fixed nav with active link highlighting
│   │   │
│   │   ├── Dashboard/           # ── Feature Components ───────────────────
│   │   │   ├── StatsCard.jsx    # 4-up KPI grid with skeleton
│   │   │   └── SessionHistory.jsx # Date-grouped session list
│   │   │
│   │   ├── Feedback/            # ── Feedback Flow ────────────────────────
│   │   │   ├── FeedbackModal.jsx    # Animated modal + success state
│   │   │   └── FeedbackSidebar.jsx  # Trigger + usage meter + upgrade CTA
│   │   │
│   │   └── Shared/              # ── Primitives ───────────────────────────
│   │       ├── Card.jsx         # Animated surface with hover lift
│   │       ├── EmptyState.jsx   # Illustrated empty state with CTA
│   │       ├── ErrorState.jsx   # Error feedback UI
│   │       └── Loader.jsx       # Full-screen + inline spinners
│   │
│   ├── pages/
│   │   └── Dashboard.jsx        # Top-level route — orchestrates all sections
│   │
│   ├── styles/
│   │   ├── variables.css        # All design tokens
│   │   └── global.css           # CSS reset + base typography
│   │
│   ├── utils/
│   │   ├── formatDate.js        # Relative dates + groupSessionsByDate
│   │   ├── formatDuration.js    # Seconds → "36m 51sec"
│   │   └── storage.js           # localStorage read/write abstractions
│   │
│   ├── App.jsx                  # Router + Context providers
│   └── main.jsx                 # ReactDOM.createRoot entry point
│
├── .env.example                 # Environment variable template
├── vercel.json                  # SPA rewrite rule for Vercel
├── vite.config.js               # Vite build configuration
└── eslint.config.js             # ESLint rules
```

---

## 🏗 Architecture & Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                        App.jsx                          │
│   UserProvider → BrowserRouter → Layout → <Routes>     │
└───────────────────────────┬─────────────────────────────┘
                            │
              ┌─────────────▼──────────────┐
              │       Dashboard.jsx         │
              │  (top-level page/route)     │
              └──┬──────────┬──────────┬───┘
                 │          │          │
         ┌───────▼──┐ ┌─────▼────┐ ┌──▼──────────┐
         │useProfile│ │ useStats │ │ useSessions  │
         └───────┬──┘ └─────┬────┘ └──┬──────────┘
                 │          │          │
         ┌───────▼──────────▼──────────▼───────────┐
         │              api/axios.js                │
         │   ┌──────────────────────────────────┐   │
         │   │  Request Interceptor              │   │
         │   │  → injects x-user-id from        │   │
         │   │    localStorage on every call    │   │
         │   └──────────────────────────────────┘   │
         └───────────────────┬─────────────────────┘
                             │
              ┌──────────────▼──────────────┐
              │  mock-backend-hintro.vercel  │
              │  /profile  /stats  /sessions │
              └─────────────────────────────┘
```

**State flow for user switching:**

```
Navbar dropdown onChange
  → switchUser(userId)          [UserContext]
    → setStoredUser(userId)     [localStorage]
    → window.location.reload()  [flushes all hook states]
      → getStoredUser()         [axios interceptor reads new id]
        → all API calls use new x-user-id header
```

---

##  Design System

All tokens are defined in `src/styles/variables.css` and consumed via CSS custom properties. Zero hardcoded values exist in any component file.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f5f6fa` | Page background |
| `--surface` | `#ffffff` | Card / sidebar / navbar |
| `--surface-2` | `#f8f9fc` | Nested surfaces, inputs |
| `--text` | `#1a1d23` | Primary text |
| `--text-secondary` | `#4a5568` | Labels, descriptions |
| `--muted` | `#8a94a6` | Placeholders, icons |
| `--border` | `#e8ecf4` | Dividers, card borders |
| `--primary` | `#5b6ef5` | CTAs, active states |
| `--primary-light` | `#eef0ff` | Active nav background |
| `--success` | `#22c55e` | Success states |
| `--danger` | `#ef4444` | Error states |
| `--warning` | `#f59e0b` | Warning states |

### Stat Card Accents

| Token | Color | Used For |
|---|---|---|
| `--stat-pink` | `#ff6b8a` | Total Sessions icon |
| `--stat-teal` | `#26c6b0` | Average Duration icon |
| `--stat-purple` | `#a78bfa` | Last Session icon |
| `--stat-violet` | `#818cf8` | Misc accent |

### Spacing & Shape

| Token | Value |
|---|---|
| `--radius-sm` | `6px` |
| `--radius` | `12px` |
| `--radius-lg` | `16px` |
| `--radius-xl` | `24px` |
| `--sidebar-width` | `220px` |
| `--navbar-height` | `64px` |

### Shadows

| Token | Usage |
|---|---|
| `--shadow-sm` | Subtle card elevation |
| `--shadow` | Default card shadow |
| `--shadow-lg` | Modal overlay shadow |

---

##  Component Reference

### Layout Components

#### `Layout.jsx`
The top-level shell. Renders a flex row with a fixed `Sidebar` on the left and a scrollable content column (sticky `Navbar` + `<main>`) on the right.

```
Layout
├── Sidebar          (fixed, 220px, z-index: 100)
└── Content Column
    ├── Navbar       (sticky, 64px, z-index: 90)
    └── <main>       (flex: 1, max-width: 1000px centered)
```

#### `Navbar.jsx`
Sticky header with:
- Page title ("Dashboard")
- "Watch Tutorial" button with play icon
- User avatar (first initial) + `<select>` dropdown for `u1`/`u2` switching
- Reads `profile.firstName` from `useProfile` for the avatar letter

#### `Sidebar.jsx`
Fixed left navigation with:
- Hintro brand mark
- 5 nav items — Dashboard (active), Call Insights, Knowledge Base, Prompts, Boxy Controls
- Active route highlighted via React Router's `NavLink` `isActive`
- `FeedbackSidebar` mounted at the bottom

---

### Dashboard Components

#### `StatsCard.jsx`
Renders a 4-column responsive KPI grid.

| Stat | Source Field | Format |
|---|---|---|
| Total Sessions | `stats.totalSessions` | Integer |
| Average Duration | `stats.averageDuration` | `"36m 51sec"` |
| AI Used | `stats.totalAIInteractions` | `"N times"` |
| Last Session | `stats.lastSession[0].startTime` | Relative date |

Shows 4 animated skeleton placeholder cards while `loading === true`.

#### `SessionHistory.jsx`
Groups sessions by date using `groupSessionsByDate()` and renders:
- Date label header per group
- Per session: initial-letter avatar, title, stacked participant avatars (pravatar.cc), formatted time, options button
- Skeleton loader with 3 placeholder rows while fetching

---

### Feedback Components

#### `FeedbackModal.jsx`
Animated modal using Framer Motion `AnimatePresence`:
- Backdrop click closes the modal
- Textarea with required validation
- Submit button shows rotating spinner while `isSubmitting`
- On success: transitions to a checkmark success state, then auto-closes after 2s

#### `FeedbackSidebar.jsx`
Sidebar bottom section containing:
- "Download Desktop App" link
- "Feedback" button (opens modal) with green dot after first submission
- Usage meter: "0 of 1000 hours used" with progress bar
- "Upgrade" CTA button
- Footer: "© 2025 Hintro. Made in India 🇮🇳"

---

### Shared Primitives

#### `Card.jsx`
Framer Motion animated surface wrapper.

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Card content |
| `hover` | `boolean` | `false` | Enables `whileHover` lift effect |
| `delay` | `number` | `0` | Entry animation delay in seconds |
| `style` | `object` | `{}` | Additional inline styles |

#### `EmptyState.jsx`
Centered illustrated empty state.

| Prop | Type | Description |
|---|---|---|
| `icon` | `ReactNode` | SVG icon rendered in a coloured circle |
| `title` | `string` | Bold heading |
| `description` | `string` | Subtext (max-width 400px) |
| `actionText` | `string` | CTA button label |
| `onAction` | `function` | CTA click handler |

#### `Loader.jsx`
| Prop | Type | Description |
|---|---|---|
| `fullScreen` | `boolean` | Centers spinner in the full viewport |

#### `ErrorState.jsx`
Displays a formatted error message with a retry affordance when API calls fail.

---

## 🪝 Custom Hooks

All hooks follow the same `{ data, loading, error }` contract for consistency.

### `useProfile()`
```js
const { profile, loading, error } = useProfile();
// profile: { firstName, lastName, email, ... }
```

### `useStats()`
```js
const { stats, loading, error } = useStats();
// stats: { totalSessions, averageDuration, totalAIInteractions, lastSession }
```

### `useSessions(limit?)`
```js
const { sessions, pagination, loading, error } = useSessions(10);
// sessions: CallSession[]
// pagination: { total, page, limit }
```

### `useDashboard()`
```js
const { data, loading, error } = useDashboard();
// data: combined dashboard payload from /dashboard
```

---

## 📡 API Reference

**Base URL:** `https://mock-backend-hintro.vercel.app`

Every request includes the header:
```
x-user-id: u1 | u2
```

| Endpoint | Method | Response | Description |
|---|---|---|---|
| `/profile` | `GET` | `{ firstName, lastName, email }` | Active user's profile data |
| `/stats` | `GET` | `{ totalSessions, averageDuration, totalAIInteractions, lastSession }` | Aggregated call statistics |
| `/sessions` | `GET` | `{ callSessions[], pagination }` | Paginated session history |
| `/dashboard` | `GET` | Combined profile + stats payload | Single-request dashboard data |

### Request Interceptor
```js
// src/api/axios.js
apiClient.interceptors.request.use((config) => {
  const userId = getStoredUser(); // reads from localStorage
  if (userId) config.headers['x-user-id'] = userId;
  return config;
});
```

### Response Interceptor
```js
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);
```

---

##  Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yogesh968/Hintro.git
cd Hintro

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Hot Module Replacement |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in values:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|---|---|---|
| `VITE_API_BASE_URL` | `https://mock-backend-hintro.vercel.app` | Mock backend base URL |

> All `VITE_` prefixed variables are exposed to the client bundle by Vite.

---

## ☁️ Deployment

This project is optimised for **[Vercel](https://vercel.com)** with zero configuration.

### Option 1 — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option 2 — Vercel Dashboard

1. Push your fork to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — no settings needed

**Build settings (auto-detected):**

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

The included `vercel.json` handles SPA client-side routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

##  Design Decisions

### Context API over Redux
The app has exactly one piece of shared global state — the active user ID. Context API is the correct tool for this scope. Redux would introduce a reducer, actions, selectors, and a store for a single string value — that's over-engineering.

### `window.location.reload()` on user switch
For a demo against mock APIs, a full page reload is the cleanest way to simultaneously flush all hook states (`useProfile`, `useStats`, `useSessions`). In a production app this would be replaced with React Query's `queryClient.clear()` or SWR's `mutate()` for granular cache invalidation without a reload.

### Plain CSS over Tailwind
The assignment explicitly required no utility-class frameworks. CSS custom properties deliver the same design-token benefits (single source of truth, easy theming) with zero build-time overhead and no class-name bloat in JSX.

### Axios over `fetch`
Axios interceptors make it trivial to inject the `x-user-id` header globally and normalise error shapes in one place. With `fetch`, this would require a custom wrapper function in every hook.

### `pravatar.cc` for avatars
The mock API returns no avatar URLs. `pravatar.cc` provides deterministic placeholder avatars seeded by index — consistent across renders without storing any real user data.

---

## Assumptions

1. **Empty state detection** — `u1` is identified by `stats.totalSessions === 0` combined with an empty `sessions` array. This is the agreed signal for the onboarding flow.
2. **Participant avatars** — Since the API returns no avatar URLs, `pravatar.cc` placeholders are seeded by participant index for visual consistency.
3. **User switching reload** — The `window.location.reload()` on user switch is an intentional demo choice, not a technical limitation.
4. **Pagination** — The sessions hook accepts a `limit` parameter (default: 10). Pagination UI is not implemented as it was outside the assignment scope.
5. **Error handling** — Network errors surface via the `ErrorState` component. No retry logic is implemented beyond what the user can trigger by refreshing.

---

## 📄 License

```
MIT License

Copyright (c) 2025 Yogesh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">

<br/>

**[⬆ Back to Top](#-hintro-dashboard)**

<br/>

Made with ❤️ by [Yogesh](https://github.com/yogesh968) &nbsp;·&nbsp; Built for the Hintro Frontend Assignment

<br/>

[![GitHub stars](https://img.shields.io/github/stars/yogesh968/Hintro?style=social)](https://github.com/yogesh968/Hintro)
[![GitHub forks](https://img.shields.io/github/forks/yogesh968/Hintro?style=social)](https://github.com/yogesh968/Hintro/fork)

<br/>

</div>
