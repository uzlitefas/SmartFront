import {
  TEACHER,
  COURSES,
  STUDENT_COUNTS,
  RECENT_TASKS,
} from "@/constants/teacher";

import CourseCard from "./courseCard";
import RecentActivity from "./recentActivity";
import TeacherProfileCard from "./techerCard";
import TeacherSkills from "./teacherSkills";

export default function TeacherHome() {
  return (
    <div className="min-h-screen bg-[var(--background)] p-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="space-y-6">
          <TeacherProfileCard teacher={TEACHER} />

          <TeacherSkills
            skills={[
              "Matematika",
              "Informatika",
              "Algebra",
              "Geometriya",
              "Mantiq",
            ]}
          />
        </div>

        <aside className="xl:col-span-2 space-y-6">
          <section className="space-y-4">
            {COURSES.length === 0 ? (
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-10 text-center">
                <p className="text-[var(--muted-foreground)]">
                  Kurs mavjud emas
                </p>
              </div>
            ) : (
              COURSES.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  studentCount={STUDENT_COUNTS[course.id]}
                />
              ))
            )}
          </section>
          <RecentActivity tasks={RECENT_TASKS} />
        </aside>
      </div>
    </div>
  );
}
