import { useState } from "react";
import type { Course, CourseCategory, CourseRank } from "@/constants";
import { CourseCard } from "./CourseCard";

interface Props {
  courses: Course[];
}

const PER_PAGE = 6;

const CATEGORY_OPTIONS: (CourseCategory | "All")[] = [
  "All",
  "mashhur",
  "tillar",
  "Assosiy Fan",
  "IT",
];
const RANK_OPTIONS: (CourseRank | "All")[] = ["All", "A", "B", "C", "D"];

export function CourseList({ courses }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState<CourseCategory | "All">(
    "All",
  );
  const [rankFilter, setRankFilter] = useState<CourseRank | "All">("All");

  const filteredCourses = courses.filter((course) => {
    const categoryMatch =
      categoryFilter === "All" || course.category === categoryFilter;
    const rankMatch = rankFilter === "All" || course.rank === rankFilter;
    return categoryMatch && rankMatch;
  });

  const totalPages = Math.ceil(filteredCourses.length / PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="border border-[var(--border)] rounded px-3 py-2 bg-[var(--card)] text-[var(--foreground)]"
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value as CourseCategory | "All");
            setCurrentPage(1);
          }}
        >
          {CATEGORY_OPTIONS.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "All" ? "Hammasi" : cat}
            </option>
          ))}
        </select>

        <select
          className="border border-[var(--border)] rounded px-3 py-2 bg-[var(--card)] text-[var(--foreground)]"
          value={rankFilter}
          onChange={(e) => {
            setRankFilter(e.target.value as CourseRank | "All");
            setCurrentPage(1);
          }}
        >
          {RANK_OPTIONS.map((rank) => (
            <option key={rank} value={rank}>
              {rank === "All" ? "Hammasi" : rank}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--card)] text-[var(--foreground)]"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
}
