import { teachersData } from "@/constants/teacher";
import { TeacherTable } from "./TeacherTable";

export default function TeachersTablePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        O‘qituvchilar jadvali
      </h1>

      <TeacherTable data={teachersData} />
    </div>
  )
}
