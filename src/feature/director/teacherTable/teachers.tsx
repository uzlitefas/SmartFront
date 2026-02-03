import { teachersData } from "@/constants/teacher";
import DirectorCreateTeacher from "./directorCreateTeacher";

export default function TeachersTablePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">O‘qituvchilar jadvali</h1>
      <DirectorCreateTeacher />
    </div>
  );
}
