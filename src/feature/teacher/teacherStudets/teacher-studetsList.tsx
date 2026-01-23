import { useState } from "react";
import { Search } from "lucide-react";
import { studentsData, type RankType } from "@/constants";
import { getRank } from "@/utils/getRank";
import TeacherStudentsTable from "./teacher-studetsTable";

export default function TeacherStudentsList() {
  const [activeRank, setActiveRank] = useState<RankType | "ALL">("ALL");
  const [search, setSearch] = useState("");

  const ranks: (RankType | "ALL")[] = ["ALL", "A", "B", "C", "D"];

  const filteredStudents = studentsData.filter((s) => {
    const rankMatch =
      activeRank === "ALL" || getRank(s.ortachaBall) === activeRank;

    const searchMatch =
      s.ismi.toLowerCase().includes(search.toLowerCase()) ||
      s.familiyasi.toLowerCase().includes(search.toLowerCase()) ||
      s.telefonRaqami.includes(search);

    return rankMatch && searchMatch;
  });

  return (
    <div className="bg-[color:var(--card)] rounded-xl shadow-sm">
      <div className="p-4 sm:p-6 border-b border-[color:var(--border)] flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center sm:justify-between">
        <div className="flex gap-2 flex-wrap">
          {ranks.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRank(r)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition
                ${
                  activeRank === r
                    ? "text-[color:var(--primary)] border-b-2 border-[color:var(--primary)]"
                    : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
                }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--muted-foreground)]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-[color:var(--background)] focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
          />
        </div>
      </div>

      <TeacherStudentsTable students={filteredStudents} />
    </div>
  );
}
