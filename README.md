# AI Budgeteer

AI Budgeteer is a Next.js application for monitoring and optimizing AI spend. It provides dashboards, prompt optimization, leaderboard views, and budget alerts to help teams control model usage and reduce token costs.

## Features

- AI spend dashboard with KPI cards and burn-rate charts
- Prompt optimizer with token and cost savings estimates
- Model usage visualization
- Team efficiency leaderboard
- Budget alerts and settings screens
- Responsive UI built with reusable shadcn-style components

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma
- SQLite
- Zustand
- TanStack React Query
- Radix UI
- Recharts
- Framer Motion
- Bun

## Installation

1. Install dependencies:

   ```bash
   bun install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

   If `.env.example` is not present, create `.env` manually and add the values required by `prisma/schema.prisma` and the application.

3. Generate the Prisma client:

   ```bash
   bun run db:generate
   ```

4. Apply the database schema:

   ```bash
   bun run db:push
   ```

## Usage

Start the development server:

```bash
bun run dev
```

Build the production app:

```bash
bun run build
```

Start the production server:

```bash
bun run start
```

Run lint checks:

```bash
bun run lint
```

## Screenshots

Add screenshots of the dashboard, prompt optimizer, leaderboard, and settings screens here.

## License

No license has been specified yet. Add a license before publishing if this project will be shared publicly or reused by others.
