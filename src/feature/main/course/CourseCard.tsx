import {
  FaUserTie,
  FaEye,
  FaCheckCircle,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";
import type { Course } from "@/types/main";

interface Props {
  course: Course;
  onSelect: (course: Course) => void;
}

export function CourseCard({ course, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(course)}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center border rounded-2xl p-6 md:p-8 bg-white dark:bg-gray-900 shadow-sm transition-colors cursor-pointer"
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
  );
}
