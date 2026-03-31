import { Metadata } from "next";
import { Card } from "@/app/components/card";
import { PageShell } from "@/app/components/page-shell";
import { SectionHeading } from "@/app/components/section-heading";
import { SkillGroupCard } from "@/app/components/skill-group-card";
import { getHighlights, getSkillGroupsWithSkills } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Skills | Austin Howard",
};


export default async function SkillsPage() {
  const [groups, highlights] = await Promise.all([
    getSkillGroupsWithSkills(),
    getHighlights(),
  ]);

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-4xl space-y-6 sm:space-y-7 md:space-y-8">
        <Card>
          <SectionHeading
            title="Skills"
            subtitle="A breakdown of languages, frameworks, and platforms I work with."
          />
        </Card>

        <div className="space-y-4 sm:space-y-5">
          {groups.map((group) => (
            <SkillGroupCard key={group.id} icon={group.icon} title={group.name} skills={group.skills} />
          ))}
        </div>

        <Card className="space-y-4 sm:space-y-6">
          <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl md:text-4xl">
            Highlights
          </h2>
          <ul className="space-y-3 pl-6 text-base text-muted sm:space-y-4 sm:text-lg">
            {highlights.map((item) => (
                <li key={item.id} className="list-disc pl-2 marker:text-[var(--color-blue)]">
                <span className="font-semibold text-text">{item.title}: </span>
                <span className="leading-relaxed">{item.description}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </PageShell>
  );
}
