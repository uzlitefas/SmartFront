// src/components/CourseCard.tsx
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaCode,
  FaUserTie,
  FaEye,
} from "react-icons/fa";
import type { Course } from "@/constants";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border rounded-2xl p-8 bg-white shadow-sm">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {course.title}
        </h2>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
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

        <p className="text-gray-600 mb-6">{course.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
          {course.features.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Link
          to={course.link}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
        >
          Kursni ko‘rish
          <FaArrowRight />
        </Link>
      </div>

      <div className="flex items-center justify-center bg-gray-50 rounded-xl h-64">
        <div className="w-28 h-28 bg-black rounded-2xl flex items-center justify-center shadow-lg">
          <FaCode className="text-white text-4xl" />
        </div>
      </div>
    </div>
  );
}
