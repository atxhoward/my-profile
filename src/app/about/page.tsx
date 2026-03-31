import Image from "next/image";
import { Metadata } from "next";
import { ArchitecturePanel } from "@/app/components/architecture-panel";
import { Card } from "@/app/components/card";
import { PageShell } from "@/app/components/page-shell";
import { SectionHeading } from "@/app/components/section-heading";
import { getProfile, getSiteMeta } from "@/lib/queries";

export const metadata: Metadata = {
  title: "About | Austin Howard",
};

export default async function AboutPage() {
  const [profile, siteMeta] = await Promise.all([getProfile(), getSiteMeta()]);

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-4xl space-y-6 sm:space-y-7 md:space-y-8">
        <Card className="space-y-4 sm:space-y-5">
          <SectionHeading title="Behind the Code" />
          <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            {profile?.aboutBody ?? "Austin is a father, a musician, and a craft beer enthusiast. He spends his days at the many parks, playgrounds and casual dining spots with his young family in the ATX metro area."}
          </p>
        </Card>
        {siteMeta?.aboutImagePath && siteMeta.aboutImagePath !== "/profile-placeholder.svg" && (
          <Card className="p-4 sm:p-6">
            <div className="flex justify-center">
              <Image
                src={siteMeta.aboutImagePath}
                alt="Profile image"
                width={520}
                height={400}
                className="w-full max-w-md rounded-panel border border-border sm:max-w-lg"
                priority
              />
            </div>
          </Card>
        )}
        <Card>
          <ArchitecturePanel intro={profile?.architectureIntro ?? "Time for the good stuff! Here's a peek under the hood of how this site is built and deployed."} />
        </Card>
      </section>
    </PageShell>
  );
}
