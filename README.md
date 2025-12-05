# Auction App

A modern **Next.js 16** application built with:

- **Node.js 24**
- **React Query** for server state and data fetching
- **Axios** with a shared HTTP client
- **Zustand** for UI and client-side global state
- **Next.js Route Handlers** as a **mock backend API**
- Clean, modular architecture ready for production expansion

This project serves as a demo for an auction platform and is fully structured to scale.

---

#  Requirements

Make sure you are using **Node.js 24**.

Using `nvm`:

```bash
nvm install 24
nvm use 24
```

---

# Getting Started

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

Edit the home page at:

```
src/app/page.tsx
```

It updates automatically while running `dev`.

---

# Project Structure

All source code lives inside the `src/` directory:

```
src/
  app/           # Next.js App Router pages + API route handlers
  components/    # UI components (currently empty placeholders)
  hooks/         # React Query, realtime hooks, and screen-state logic
  lib/           # http client (axios), domain API clients, helpers
  providers/     # Global providers (React Query)
  store/         # Zustand stores for UI/global state
  styles/        # Global CSS
  tests/         # Placeholder for unit + e2e tests
  types/         # Domain types + React Query keys
```

---

## `src/app/`

- **`src/app/layout.tsx`** – wraps the application with global providers
- **`src/app/page.tsx`** – homepage using `useAuctions`
- **`src/app/api/auctions/route.ts`** – mock backend `GET /api/auctions`

---

## `src/lib/`

- **`src/lib/http.ts`** – shared axios client
- **`src/lib/api/auction.ts`** – typed auction API functions

---

## `src/hooks/`

- **`src/hooks/query/useAuctionsQuery.ts`** – React Query hook for auctions

---

## `src/types/`

- `auctions.ts` – Auction types, filters, and `auctionKeys`
- `index.ts` – barrel re-export for clean imports

---

## `src/store/`

- `use-app-store.ts` – example Zustand store

---

# Mock API

The project includes a built-in mock API using a Next.js Route Handler:

```
GET /api/auctions
```

Defined in:

```
src/app/api/auctions/route.ts
```

This allows frontend development without a real backend.

---

# Scripts

```bash
npm run dev     # development mode
npm run build   # production build
npm run start   # run production server
npm run lint    # linting
```

---

# Learn More

- https://nextjs.org/docs
- https://tanstack.com/query/latest
- https://zustand-demo.pmnd.rs/

---

# Notes for Developers

- The project already contains placeholders for realtime features (Socket.IO/SSE).
- When switching from mock API to real backend, update `src/lib/http.ts` and `src/lib/api/auction.ts`.
- You can extend the architecture by adding new domains: `bids`, `users`, `categories`, etc.
