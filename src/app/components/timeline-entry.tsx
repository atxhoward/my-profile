import { Card } from "@/app/components/card";

type TimelineEntryProps = {
  dateRange: string;
  title: string;
  bullets: string[];
  isLast: boolean;
};

export function TimelineEntry({ dateRange, title, bullets, isLast }: TimelineEntryProps) {
  return (
    <Card>
      <article className="relative pl-6 sm:pl-8">
        {!isLast ? <span className="absolute left-[7px] top-6 h-[calc(100%-8px)] w-px bg-timeline" /> : null}
        <p className="text-base font-semibold text-text sm:text-lg">{dateRange}</p>
        <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-text sm:text-3xl">
          {title}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-muted marker:text-[var(--color-blue)] sm:text-lg">
          {bullets.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Card>
  );
}
