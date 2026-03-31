import Link from "next/link";
import { Card } from "@/app/components/card";
import { PageShell } from "@/app/components/page-shell";
import { SectionHeading } from "@/app/components/section-heading";
import { getProfile } from "@/lib/queries";

export default async function Home() {
  const profile = await getProfile();

  return (
    <PageShell>
      <section className="flex min-h-[70vh] items-center justify-center py-8 sm:py-10 md:py-14">
        <Card className="mx-auto w-full max-w-3xl space-y-6 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-blue)] sm:text-base">
            {profile?.shortName ?? "Software Engineer"}
          </p>
          <SectionHeading title={profile?.role ?? "Austin Howard"} centered />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">{profile?.heroIntro}</p>
          <div className="flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row sm:gap-4">
            <Link
              href="/experience"
              className="inline-flex min-w-40 items-center justify-center rounded-lg border border-[var(--color-blue)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-blue)] transition-colors duration-200 hover:border-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-white"
            >
              View Experience
            </Link>
            <Link
              href="/skills"
              className="inline-flex min-w-40 items-center justify-center rounded-lg border border-[var(--color-yellow)] bg-[var(--color-yellow)] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[var(--color-yellow)] hover:bg-white hover:text-[var(--color-yellow)]"
            >
              View Skills
            </Link>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
