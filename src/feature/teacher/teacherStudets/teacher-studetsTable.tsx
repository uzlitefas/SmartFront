import type { Student } from "@/constants";
import { getRank } from "@/utils/getRank";
import { Badge } from "@/components/ui/badge";

interface Props {
  students?: Student[];
}

const rankBadge = {
  A: "bg-green-500/15 text-green-600",
  B: "bg-blue-500/15 text-blue-600",
  C: "bg-yellow-500/15 text-yellow-600",
  D: "bg-red-500/15 text-red-600",
};

const getStatus = (student: Student): "active" | "mute" | "leave" => {
  if (student.examType === "Missed Exam") return "leave";
  if (!student.onlineStatus) return "mute";
  return "active";
};

const statusVariant = {
  active: "default",
  mute: "secondary",
  leave: "destructive",
} as const;

export default function TeacherStudentsTable({ students = [] }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-[color:var(--border)]">
            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Student</th>
            <th className="hidden md:table-cell px-3 sm:px-4 py-2 sm:py-3 text-left">
              Father
            </th>
            <th className="hidden lg:table-cell px-3 sm:px-4 py-2 sm:py-3 text-center">
              Birth / Age
            </th>
            <th className="hidden lg:table-cell px-3 sm:px-4 py-2 sm:py-3 text-center">
              Gender
            </th>
            <th className="hidden md:table-cell px-3 sm:px-4 py-2 sm:py-3 text-left">
              Phone
            </th>
            <th className="px-3 sm:px-4 py-2 sm:py-3 text-center">
              Avg Ball
            </th>
            <th className="px-3 sm:px-4 py-2 sm:py-3 text-center">
              Rank
            </th>
            <th className="px-3 sm:px-4 py-2 sm:py-3 text-right">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => {
            const rank = getRank(s.ortachaBall);
            const status = getStatus(s);

            return (
              <tr
                key={s.id}
                className="border-b border-[color:var(--border)] hover:bg-[color:var(--muted)] transition"
              >
                <td className="px-3 sm:px-4 py-2 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={s.avatar}
                      alt={s.ismi}
                      className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">
                        {s.ismi} {s.familiyasi}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[color:var(--muted-foreground)]">
                        {s.sinfi}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-3 sm:px-4 py-2 sm:py-3">
                  {s.otasiningIsmi || "-"}
                </td>

                <td className="hidden lg:table-cell px-3 sm:px-4 py-2 sm:py-3 text-center">
                  <div>{s.tugilganSana}</div>
                  <div className="text-xs text-[color:var(--muted-foreground)]">
                    {s.yoshi}
                  </div>
                </td>

                <td className="hidden lg:table-cell px-3 sm:px-4 py-2 sm:py-3 text-center">
                  {s.jinsi}
                </td>

                <td className="hidden md:table-cell px-3 sm:px-4 py-2 sm:py-3">
                  {s.telefonRaqami}
                </td>

                <td className="px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold">
                  {s.ortachaBall}
                </td>

                <td className="px-3 sm:px-4 py-2 sm:py-3 text-center">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${rankBadge[rank]}`}>
                    {rank}
                  </span>
                </td>

                <td className="px-3 sm:px-4 py-2 sm:py-3 text-right">
                  <Badge
                    variant={statusVariant[status]}
                    className={
                      status === "active"
                        ? "bg-green-600 hover:bg-green-600 text-white capitalize"
                        : "capitalize"
                    }
                  >
                    {status}
                  </Badge>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {students.length === 0 && (
        <p className="p-4 sm:p-6 text-center text-xs sm:text-sm text-[color:var(--muted-foreground)]">
          No students found
        </p>
      )}
    </div>
  );
}
