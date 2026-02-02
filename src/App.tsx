import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./feature/main/home/Home";
import CoursesSection from "./feature/main/course/CoursePage";
import { useEffect, useState } from "react";
import Loader from "./components/shared/Loader";
import Gallery from "./feature/main/gallery/Gallery";
import Contact from "./feature/main/contact/Contact";
import LoginPage from "./feature/auth/login";
import TeacherProfileEditPage from "./feature/teacher/teacherProfile";
import TeacherStudents from "./feature/teacher/teacherStudents";
import { NewsPage } from "./feature/main/news/NewsPage";
import CreateTasks from "./feature/teacher/Tasks/CreateTasks";
import TeacherHome from "./feature/teacher/teacher";
import TeacherNavbar from "./feature/teacher/Navbar/Navbar";
import DirectorCreatePage from "./feature/director/create/directorCreatePage";
import SchoolPage from "./feature/admin/school/schoolPage";
import AppSidebar from "./components/shared/sidebar/app-sidebar";
import Navbar from "./components/shared/main/Navbar";
import CreateTeacher from "./feature/director/create/CreateTeacher";

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
              <CreateTeacher />
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
          <Route path="create/:invite-token" element={<DirectorCreatePage />} />
          <Route path="" element={"director"} />
        </Route>

        <Route
          path="/teacher"
          element={
            <>
              <div className="flex w-full">
                <TeacherNavbar />
                <div className="m-3 p-8 rounded-md bg-accent w-full">
                  <Outlet />
                </div>
              </div>
            </>
          }
        >
          <Route path="" element={<TeacherHome />} />
          <Route path="profile" element={<TeacherProfileEditPage />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="createTasks" element={<CreateTasks />} />
          <Route path="createVideos" element={"create video"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
