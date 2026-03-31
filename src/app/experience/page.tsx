import { Metadata } from "next";
import { Card } from "@/app/components/card";
import { PageShell } from "@/app/components/page-shell";
import { SectionHeading } from "@/app/components/section-heading";
import { TimelineEntry } from "@/app/components/timeline-entry";
import { getExperienceEntries, getEducationEntries } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Experience | Austin Howard",
};

export default async function ExperiencePage() {
  const [entries, educationEntries] = await Promise.all([
    getExperienceEntries(),
    getEducationEntries(),
  ]);

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-4xl space-y-6 sm:space-y-7 md:space-y-8">
        <Card>
          <SectionHeading title="Work Experience" />
        </Card>
        <div className="space-y-4 sm:space-y-5">
          {entries.map((entry, index) => (
            <TimelineEntry
              key={entry.id}
              dateRange={entry.dateRange}
              title={entry.title}
              bullets={entry.bullets}
              isLast={index === entries.length - 1}
            />
          ))}
        </div>
        {educationEntries && educationEntries.length > 0 && (
          <>
            <Card>
              <SectionHeading title="Education" />
            </Card>
            <div className="space-y-4 sm:space-y-5">
              {educationEntries.map((entry, index) => (
                <TimelineEntry
                  key={entry.id}
                  dateRange={entry.dateRange}
                  title={entry.school}
                  bullets={entry.bullets}
                  isLast={index === educationEntries.length - 1}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </PageShell>
  );
}
