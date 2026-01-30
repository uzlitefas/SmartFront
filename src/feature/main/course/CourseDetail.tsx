import { useTranslation } from "react-i18next";

interface Props {
  course: any;
}

export function CourseDetail({ course }: Props) {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden hover:shadow-lg transition">
      <img
        src={course.image}
        alt={course.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{course.title}</h3>
          <span className="text-[var(--primary)] font-bold">{course.rank}</span>
        </div>

        <p className="text-sm text-[var(--muted-foreground)] line-clamp-2">
          {course.description}
        </p>

        <div className="flex justify-between text-xs text-[var(--muted-foreground)] pt-2">
          <span>👥 {course.students}</span>
          <span className="px-2 py-1 bg-[var(--muted)] rounded">
            {t(course.level.course.level)}
          </span>
        </div>
      </div>
    </div>
  );
}
