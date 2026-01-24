import { Button } from "@/components/ui/button";
import type { Course } from "@/types";
import { BookOpen, Calendar, Users, Plus } from "lucide-react";

interface Props {
  course: Course;
  studentCount?: number;
}

export default function CourseCard({ course, studentCount = 0 }: Props) {
  const statusMap = {
    active: "Faol",
    paused: "Pauza",
    finished: "Yakunlangan",
  };

  const handleAddTask = () => {
    alert(`"${course.name}" kursiga vazifa qo'shish`);
  };

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-md bg-[var(--accent)] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[var(--accent-foreground)]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              {course.name}
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              {course.subject}
            </p>
          </div>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)]">
          {statusMap[course.status]}
        </span>
      </div>

      <p className="text-sm text-[var(--secondary-foreground)]">
        {course.description}
      </p>

      <div className="flex gap-6 text-sm text-[var(--muted-foreground)]">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          {studentCount} talaba
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {new Date(course.start_date).toLocaleDateString("uz-UZ")}
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <Button
          variant={"secondary"}
          className="flex items-center gap-2 text-sm px-3 py-1 rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] transition"
          onClick={() => handleAddTask()}
        >
          <Plus className="w-4 h-4" />
          Vazifa qo'shish
        </Button>
      </div>
    </div>
  );
}
