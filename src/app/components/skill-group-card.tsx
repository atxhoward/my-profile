import { Card } from "@/app/components/card";
import { CircleStackIcon, CodeBracketIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";

type Skill = {
  id: number;
  label: string;
};

type SkillGroupCardProps = {
  icon: string;
  title: string;
  skills: Skill[];
};

const iconMap = {
  code: CodeBracketIcon,
  framework: Square3Stack3DIcon,
  db: CircleStackIcon,
} as const;

export function SkillGroupCard({ icon, title, skills }: SkillGroupCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? CodeBracketIcon;

  return (
    <Card className="group transition-all duration-300 hover:border-[var(--color-blue)] hover:shadow-md">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-[var(--color-blue)]" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">{title}</h3>
      </div>
      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="inline-block rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 sm:px-4 sm:text-sm text-[var(--color-blue)]"
          >
            {skill.label}
          </span>
        ))}
      </div>
    </Card>
  );
}
