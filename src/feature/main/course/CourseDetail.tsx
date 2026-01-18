import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaUserTie, FaEye, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { courses } from "@/constants";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.link === `/courses/${slug}`);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  if (!course) {
    return <div className="text-center py-20">Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {course.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
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

      <div className="bg-gray-50 rounded-xl p-6">
        <p className="text-gray-700">{course.description}</p>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setLikes((v) => v + 1)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          <FaThumbsUp />
          <span>{likes}</span>
        </button>

        <button
          onClick={() => setDislikes((v) => v + 1)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          <FaThumbsDown />
          <span>{dislikes}</span>
        </button>
      </div>

      <div className="border-t pt-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Comments</h2>

        <textarea
          placeholder="Write a comment..."
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
          rows={4}
        />

        <button className="px-5 py-2 bg-black text-white rounded-lg">
          Send
        </button>

        <div className="space-y-3 pt-4">
          <div className="border rounded-lg p-4 text-sm text-gray-600">
            Comment system is not active yet
          </div>
        </div>
      </div>
    </div>
  );
}
