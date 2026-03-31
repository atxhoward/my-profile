# Austin Howard | Software Engineer Profile App

A portfolio site built by Austin Howard using Next.js App Router, Tailwind CSS, Drizzle ORM, and Neon Postgres. The project is structured as a content-driven profile application with a small relational schema, seedable resume data, and a clean component-based UI.

## Tech Stack

- Next.js 16 with the App Router for routing, layouts, and server-rendered pages
- React 19 for component composition
- TypeScript for type-safe application and data-layer code
- Tailwind CSS v4 for utility-first styling and theme tokens
- Drizzle ORM for typed schema definitions, queries, and migrations
- Neon Postgres for serverless PostgreSQL hosting
- Drizzle Kit for migration generation and database workflows
- Heroicons for lightweight SVG iconography
- Zod for runtime validation support where needed

## Why Drizzle + Neon

This project uses Drizzle and Neon because they fit the shape of the app well: a relatively small but structured dataset, server-rendered pages, and a need for simple deployment without maintaining a traditional database server.

### Benefits of Drizzle

- Type-safe schema definitions live in the codebase, so the database shape stays close to the application code.
- Queries are strongly typed, which reduces mistakes when the UI depends on structured resume data.
- Migrations are explicit and versioned, making schema changes predictable.
- The ORM stays relatively close to SQL concepts, so it is easier to reason about than heavier abstraction layers.

### Benefits of Neon

- Neon provides a managed serverless Postgres database, which is a strong fit for a portfolio-style app deployed on modern hosting.
- The serverless connection model works well with the app's request-driven usage pattern.
- It keeps operational overhead low while still using real PostgreSQL.
- It scales beyond hardcoded content if the site evolves into a more dynamic application later.

### Why the combination works here

Drizzle gives the project a typed, maintainable contract between UI and data. Neon gives it a production-grade Postgres backend without introducing unnecessary infrastructure complexity. Together they provide a pragmatic middle ground: more robust than static JSON-only content, but much lighter than a full custom backend service.

## Architecture Notes

- Route files live under `src/app`
- Shared UI components live under `src/app/components`
- Database schema, query helpers, and connection logic live under `src/lib`
- Seed data is centralized in `src/lib/resume-data.ts`
- SQL migrations are generated into `db/migrations`
- The database layer is optional at runtime: if `DATABASE_URL` is not set, the app falls back to local resume data

That fallback behavior is implemented in the data layer so the site can still run locally without a database connection.

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── skills/page.tsx
│   ├── components/
│   └── globals.css
└── lib/
    ├── db.ts
    ├── queries.ts
    ├── resume-data.ts
    └── schema.ts

 db/
├── migrations/
└── seed.ts
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Environment Setup

Create an `.env.local` file and set:

```bash
DATABASE_URL=your_postgres_connection_string
```

If `DATABASE_URL` is omitted, the app still renders using fallback data from `src/lib/resume-data.ts`.

## Database Commands

Generate migrations from schema changes:

```bash
npm run db:generate
```

Apply migrations:

```bash
npm run db:migrate
```

Seed the database:

```bash
npm run db:seed
```

## Vercel Deploy Workflow (Migrate + Seed)

This repo includes a deploy script at `scripts/vercel-build.mjs`.

- It runs `db:migrate`
- It runs `db:seed`
- Then it runs the normal Next.js build

Package scripts:

```bash
npm run build:vercel
```

How to wire in Vercel:

1. Set `DATABASE_URL` in Vercel environment variables.
2. Set Build Command to:

```bash
npm run build:vercel
```

3. Every deploy will reseed production content from `src/lib/resume-data.ts`.

## Current Pages

- `/` - home / hero section
- `/experience` - work history and education timeline
- `/skills` - grouped skills and project highlights
- `/about` - biography and architecture overview

## Design Approach

The interface uses a warm, minimal visual system with a background image, soft cards, and a small set of semantic color accents. Styling is driven primarily through CSS variables in `src/app/globals.css`, which keeps the theme easy to tune without scattering hardcoded values throughout the component tree.
