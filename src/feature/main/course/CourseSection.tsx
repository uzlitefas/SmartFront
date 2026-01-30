import { useState } from "react";
import { useTranslation } from "react-i18next";
import { categories, COURSES } from "@/constants";
import { CourseList } from "./CourseList";
import CourseHero from "./CourseHero/CourseHero";
import Header from "@/components/shared/main/Header";

export default function CoursesSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <Header type="courses" />
      <section className="max-w-7xl mx-auto">
        <CourseHero />
        <h1 className="text-4xl font-bold mb-2">{t("coursesPage.title")}</h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          {t("coursesPage.subtitle")}
        </p>
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded
              ${
                activeCategory === cat.key
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--muted)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <CourseList courses={COURSES} activeCategory={activeCategory} />
      </section>
    </>
  );
}
