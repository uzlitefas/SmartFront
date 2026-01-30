import { Badge } from "@/components/ui/badge";

interface Props {
  skills: string[];
}

export default function TeacherSkills({ skills }: Props) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
      <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">
        O‘qituvchi bilim va ko‘nikmalari
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
