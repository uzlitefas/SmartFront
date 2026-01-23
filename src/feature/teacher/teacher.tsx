import { teacherData } from "@/constants";
import TeacherStudentsFeature from "./teacherStudets/teacher-studetsfeature";
import TeacherStudentsList from "./teacherStudets/teacher-studetsList";

export default function TeacherStudents() {
  return (
    <div className="min-h-screen bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">

        <div className="bg-gradient-to-r from-[color:var(--primary)] to-purple-600 rounded-xl shadow-lg">
          <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center justify-between">
            
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src={teacherData.avatar}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white object-cover"
              />
              <div className="text-white">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  {teacherData.ismi} {teacherData.familiyasi}
                </h1>
                <p className="text-xs sm:text-sm text-purple-100">
                  {teacherData.maktab}, {teacherData.shahar}
                </p>
              </div>
            </div>

            <div className="flex w-full lg:w-auto justify-between lg:justify-end gap-6 sm:gap-10 text-white">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {teacherData.studentsCount}
                </div>
                <div className="text-xs sm:text-sm text-purple-100">
                  Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {String(teacherData.projectsCount).padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-purple-100">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {teacherData.examsCount}
                </div>
                <div className="text-xs sm:text-sm text-purple-100">
                  Exams
                </div>
              </div>
            </div>

          </div>
        </div>

        <TeacherStudentsFeature />
        <TeacherStudentsList />
      </div>
    </div>
  );
}
