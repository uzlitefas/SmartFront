import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CourseDetail } from "./CourseDetail";

interface Props {
  courses: any[];
  activeCategory: string;
}

export function CourseList({ courses, activeCategory }: Props) {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const byCategory =
      activeCategory === "all" || course.category === activeCategory;

    const bySearch = course.title.toLowerCase().includes(search.toLowerCase());

    return byCategory && bySearch;
  });

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t("coursesPage.search")}
        className="mb-8 w-full max-w-md px-4 py-2 rounded-[var(--radius)] border border-[var(--border)] bg-transparent"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseDetail key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="mt-10 text-center text-[var(--muted-foreground)]">
          {t("coursesPage.empty")}
        </p>
      )}
    </>
  );
}
