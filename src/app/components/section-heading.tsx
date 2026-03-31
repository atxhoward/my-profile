export function SectionHeading({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`space-y-2 sm:space-y-3 ${centered ? "text-center" : ""}`}>
      <h1 className="font-display text-3xl font-semibold leading-tight text-text">
        {title}
      </h1>
      {subtitle ? (
        <p className={`text-base leading-relaxed text-muted sm:text-lg md:text-xl ${centered ? "mx-auto max-w-2xl" : "max-w-3xl"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
