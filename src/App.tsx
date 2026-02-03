import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./feature/main/home/Home";
import CoursesSection from "./feature/main/course/CoursePage";
import { useEffect, useState } from "react";
import Loader from "./components/shared/Loader";
import Gallery from "./feature/main/gallery/Gallery";
import Contact from "./feature/main/contact/Contact";
import LoginPage from "./feature/auth/login";
import TeacherProfileEditPage from "./feature/teacher/teacherProfile";
import TeacherStudents from "./feature/teacher/teacherStudets/teacherStudents";
import { NewsPage } from "./feature/main/news/NewsPage";
import TeacherHome from "./feature/teacher/home/teacher";
import DirectorCreatePage from "./feature/director/create/directorCreatePage";
import SchoolPage from "./feature/admin/school/schoolPage";
import AppSidebar from "./components/shared/sidebar/app-sidebar";
import Navbar from "./components/shared/main/Navbar";
import Footer from "./components/shared/main/Footer";
import TeachersTablePage from "./feature/director/teacherTable/teachers";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="courses" element={<CoursesSection />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route
          path="/admin"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="" element={<SchoolPage />} />
        </Route>
        <Route
          path="/director"
          element={
            <>
              <AppSidebar />
              <Outlet />
            </>
          }
        >
          <Route path="teachers" element={<TeachersTablePage />} />
          <Route path="create/:invite-token" element={<DirectorCreatePage />} />
          <Route path="" element={"home"} />
        </Route>

        <Route
          path="/teacher"
          element={
            <>
              <div className="flex w-full">
                <AppSidebar />
              </div>
            </>
          }
        >
          <Route path="" element={<TeacherHome />} />
          <Route path="profile" element={<TeacherProfileEditPage />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="tasks" element={"tasks"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
