import { FaUserTie, FaEye, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import type { Course } from "@/types/main";

interface Props {
  course: Course;
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
  onBack: () => void;
}

export function CourseDetails({
  course,
  likes,
  dislikes,
  onLike,
  onDislike,
  onBack,
}: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <button
        onClick={onBack}
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
        <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={onLike}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <FaThumbsUp />
          <span>{likes}</span>
        </button>

        <button
          onClick={onDislike}
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
          rows={4}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring dark:bg-gray-800 dark:text-white"
        />

        <button className="px-5 py-2 bg-black text-white rounded-lg">
          Send
        </button>

        <div className="border rounded-lg p-4 text-sm text-gray-600 dark:text-gray-300">
          Comment system is not active yet
        </div>
      </div>
    </div>
  );
}
