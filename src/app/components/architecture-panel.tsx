import { Card } from "@/app/components/card";

const tree = `src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home / Hero
│   ├── experience/page.tsx     # Work experience timeline
│   ├── skills/page.tsx         # Skill cards + highlights
│   ├── about/page.tsx          # Bio + architecture walkthrough
│   ├── components/             # Shared UI components
│   └── globals.css             # Global styles + Tailwind directives
└── lib/
    ├── db.ts                   # Drizzle client (Neon HTTP)
    ├── schema.ts               # Drizzle table definitions
    └── queries.ts              # Typed query functions

db/
├── migrations/                 # Auto-generated SQL migrations
└── seed.ts                     # Idempotent seed script

drizzle.config.ts               # Drizzle Kit configuration
tailwind.config.ts              # Tailwind theme configuration`;

export function ArchitecturePanel({ intro }: { intro: string }) {
  return (
    <section className="space-y-6 sm:space-y-8">
      <h3 className="font-display text-3xl font-semibold leading-tight text-text sm:text-4xl">
        How this site is crafted
      </h3>
      <p className="text-base leading-relaxed text-muted sm:text-lg md:text-xl">{intro}</p>
      <Card className="p-4 sm:p-5 md:p-7">
        <h4 className="font-display text-xl font-semibold text-text sm:text-2xl">Project structure</h4>
        <Card className="mt-3 border-zinc-200 bg-zinc-100">
          <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-[var(--color-blue)] sm:mt-4 sm:text-sm md:text-base">
            {tree}
          </pre>
        </Card>
      </Card>
      <Card className="space-y-3 sm:space-y-4">
        <h4 className="font-display text-xl font-semibold text-text sm:text-2xl">App Router (Next.js 16)</h4>
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          The page routes are defined by folder structure and wrapped by a shared layout that contains the
          navbar and footer.
        </p>
      </Card>
      <Card className="space-y-3 sm:space-y-4">
        <h4 className="font-display text-xl font-semibold text-text sm:text-2xl">Components</h4>
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          Each component has a single responsibility, from timeline entries to skill cards and architecture
          blocks.
        </p>
      </Card>
      <Card className="space-y-3 sm:space-y-4">
        <h4 className="font-display text-xl font-semibold text-text sm:text-2xl">Tailwind CSS</h4>
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          The color palette is inspired by hues from the bio photo. Prefixes are used to set breakpoints that respond to window dimensions.
        </p>
      </Card>
      <Card className="space-y-3 sm:space-y-4">
        <h4 className="font-display text-xl font-semibold text-text sm:text-2xl">Drizzle ORM</h4>
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          Defines API contracts and generates SQL migrations that execute with each deployment. This keeps the database schema in sync, ensuring type safety.
        </p>
      </Card>
      <Card className="space-y-3 sm:space-y-4">
        <h4 className="font-display text-xl font-semibold text-text sm:text-2xl">PostgresQL Data Layer</h4>
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          Vercel hosts a relational Postgres database containing resume data, which Server Components query at request time. Responses map to interfaces that comport with props.
        </p>
      </Card>
    </section>
  );
}
