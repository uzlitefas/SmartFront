import { useState } from "react";
import { categories, courses } from "@/constants";
import type { Category, Course } from "@/types/main";
import { CourseCard } from "./CourseCard";
import { CourseDetails } from "./CourseDetail";
import CourseHero from "./CourseHero/CourseHero";

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("english");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const filteredCourses = courses.filter(
    (course) => course.category === activeCategory,
  );

  if (selectedCourse) {
    return (
      <CourseDetails
        course={selectedCourse}
        likes={likes}
        dislikes={dislikes}
        onLike={() => setLikes((v) => v + 1)}
        onDislike={() => setDislikes((v) => v + 1)}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <>
      <CourseHero />

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Courses
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Choose a category and explore available courses
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted rounded-xl p-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as Category)}
                className={`px-4 md:px-5 py-2 rounded-lg text-sm md:text-base font-medium transition ${
                  activeCategory === cat.key
                    ? "bg-card shadow text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={(c) => {
                setSelectedCourse(c);
                setLikes(0);
                setDislikes(0);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
