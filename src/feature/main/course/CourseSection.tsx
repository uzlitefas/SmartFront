import { useState } from "react";
import {
  FaUserTie,
  FaEye,
  FaThumbsUp,
  FaThumbsDown,
  FaCheckCircle,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";
import { categories, courses, type Course, type Category } from "@/constants";

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("english");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const filteredCourses = courses.filter(
    (course) => course.category === activeCategory,
  );

  // Agar course tanlangan bo‘lsa, Detail ko‘rsatamiz
  if (selectedCourse) {
    const course = selectedCourse;

    return (
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <button
          onClick={() => setSelectedCourse(null)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm dark:text-white"
        >
          ← Back to courses
        </button>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {course.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <FaUserTie />
              <span>
                {course.teacher.name} — {course.teacher.subject}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye />
              <span>{course.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
          <p className="text-gray-700 dark:text-gray-300">
            {course.description}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setLikes((v) => v + 1)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaThumbsUp />
            <span>{likes}</span>
          </button>

          <button
            onClick={() => setDislikes((v) => v + 1)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaThumbsDown />
            <span>{dislikes}</span>
          </button>
        </div>

        <div className="border-t pt-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Comments
          </h2>

          <textarea
            placeholder="Write a comment..."
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring dark:bg-gray-800 dark:text-white"
            rows={4}
          />

          <button className="px-5 py-2 bg-black text-white rounded-lg">
            Send
          </button>

          <div className="space-y-3 pt-4">
            <div className="border rounded-lg p-4 text-sm text-gray-600 dark:text-gray-300">
              Comment system is not active yet
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Agar course tanlanmagan bo‘lsa, kurslar ro‘yxati
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Our Courses
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
          Choose a category and explore available courses
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 md:px-5 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-white dark:bg-gray-700 shadow text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center border rounded-2xl p-6 md:p-8 bg-white dark:bg-gray-900 shadow-sm transition-colors cursor-pointer"
            onClick={() => setSelectedCourse(course)}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {course.title}
              </h3>

              <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <FaUserTie />
                  <span>
                    {course.teacher.name} — {course.teacher.subject}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FaEye />
                  <span>{course.views.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium text-sm md:text-base">
                Kursni ko‘rish
                <FaArrowRight />
              </div>
            </div>

            <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl h-48 md:h-64">
              <div className="w-20 md:w-28 h-20 md:h-28 bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <FaCode className="text-white dark:text-black text-3xl md:text-4xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
