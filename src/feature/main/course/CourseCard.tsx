import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/constants";
import { CourseDetail } from "./CourseDetail";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden hover:shadow-xl transition">
          <div className="relative">
            <img src={course.banner} className="h-40 w-full object-cover" />
            <span className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
              Rank {course.rank}
            </span>
          </div>

          <div className="p-4 space-y-3">
            <h3 className="font-bold text-lg group-hover:text-[var(--primary)]">
              {course.name}
            </h3>

            <p className="text-sm text-[var(--muted-foreground)] line-clamp-2">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <Badge variant="secondary">👥 {course.students}</Badge>
              <Badge variant="secondary">📘 {course.lessons} dars</Badge>
              <Badge variant="secondary">🎯 {course.direction}</Badge>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="p-0 overflow-hidden">
        <CourseDetail course={course} />
      </DialogContent>
    </Dialog>
  );
}
