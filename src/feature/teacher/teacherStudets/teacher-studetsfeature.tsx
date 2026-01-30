import { studentsData, type RankType } from "@/constants";
import { getRank } from "@/utils/getRank";

const rankBar: Record<RankType, string> = {
  A: "bg-green-500",
  B: "bg-blue-500",
  C: "bg-yellow-500",
  D: "bg-red-500",
};

export default function TeacherStudentsFeature() {
  const distribution: Record<RankType, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  };

  studentsData.forEach((s) => {
    distribution[getRank(s.ortachaBall)]++;
  });

  const max = Math.max(...Object.values(distribution), 1);

  return (
    <div className="bg-[color:var(--card)] rounded-2xl p-4 sm:p-6">
      <h3 className="font-semibold text-sm sm:text-base text-[color:var(--foreground)] mb-3 sm:mb-4">
        Student Rank Distribution
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {(Object.keys(distribution) as RankType[]).map((rank) => (
          <div
            key={rank}
            className="bg-[color:var(--background)]
            border border-[color:var(--border)]
            rounded-xl p-3 sm:p-4
            transition hover:shadow-sm"
          >
            <p className="text-xs sm:text-sm text-[color:var(--muted-foreground)]">
              {rank} Rank
            </p>

            <p className="text-xl sm:text-2xl font-bold text-[color:var(--foreground)] mt-1">
              {distribution[rank]}
            </p>

            <div className="mt-2 sm:mt-3 h-1.5 bg-[color:var(--muted)] rounded-full overflow-hidden">
              <div
                className={`h-full ${rankBar[rank]} rounded-full transition-all`}
                style={{
                  width: `${(distribution[rank] / max) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
