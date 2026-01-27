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
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
      >
        ← Back to courses
      </button>

      <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
        <iframe
          src={course.video.url}
          title={course.title}
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {course.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <FaUserTie className="text-gray-500" />
            <span>
              {course.teacher.name} · {course.teacher.subject}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaEye className="text-gray-500" />
            <span>{course.views.toLocaleString()} views</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        {course.description}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onLike}
          className="flex items-center gap-2 px-5 py-2 rounded-xl border hover:bg-green-50 dark:hover:bg-gray-800 transition"
        >
          <FaThumbsUp />
          <span>{likes}</span>
        </button>

        <button
          onClick={onDislike}
          className="flex items-center gap-2 px-5 py-2 rounded-xl border hover:bg-red-50 dark:hover:bg-gray-800 transition"
        >
          <FaThumbsDown />
          <span>{dislikes}</span>
        </button>
      </div>

      <div className="rounded-2xl border dark:border-gray-800 p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Comments
        </h2>

        <textarea
          placeholder="Write a comment..."
          rows={4}
          className="w-full rounded-xl border p-4 focus:outline-none focus:ring focus:ring-black/20 dark:bg-gray-900 dark:text-white"
        />

        <button className="px-6 py-2 rounded-xl bg-black text-white hover:opacity-90 transition">
          Send
        </button>

        <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-4 text-sm text-gray-500 dark:text-gray-400">
          Comment system is not active yet
        </div>
      </div>
    </div>
  );
}
