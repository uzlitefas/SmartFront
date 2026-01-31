import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Course } from "@/constants";

export function CourseDetail({ course }: { course: Course }) {
  return (
    <>
      <img src={course.banner} className="h-56 w-full object-cover" />
      <div className="p-6 space-y-5">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {course.name}
          </DialogTitle>
        </DialogHeader>

        <p className="text-[var(--muted-foreground)]">{course.description}</p>

        <div className="flex items-center gap-4">
          <img src={course.teacherAvatar} className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold">{course.teacherName}</p>
            <p className="text-sm text-[var(--muted-foreground)]">
              {course.direction}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="bg-[var(--muted)] rounded p-3">
            👥 {course.students} o‘quvchi
          </div>
          <div className="bg-[var(--muted)] rounded p-3">
            📘 {course.lessons} dars
          </div>
          <div className="bg-[var(--muted)] rounded p-3">
            🏆 Rank {course.rank}
          </div>
          <div className="bg-[var(--muted)] rounded p-3">
            🏷 {course.category}
          </div>
        </div>

        <div className="bg-[var(--accent)]/40 border border-[var(--border)] rounded p-4 text-sm">
          🚀 Ushbu kurs orqali siz real loyihalar qilasiz, portfolio yig‘asiz va
          ishga tayyor bo‘lasiz.
        </div>
      </div>
    </>
  );
}
