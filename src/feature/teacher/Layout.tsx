import TeacherNavbar from "./Navbar/Navbar";

export default function TeacherLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#061c24]">
      {/* Navbar */}
      <TeacherNavbar />

      {/* Content area */}
      <div className="flex-1 flex items-start justify-center p-6 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
