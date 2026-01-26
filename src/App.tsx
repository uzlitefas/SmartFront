import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./feature/main/home/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import CoursesSection from "./feature/main/course/CourseSection";
import { useEffect, useState } from "react";
import Loader from "./components/shared/Loader";
import Gallery from "./feature/main/gallery/Gallery";
import Contact from "./feature/main/contact/Contact";
import LoginPage from "./feature/auth/login";
import TeacherProfileEditPage from "./feature/teacher/teacherProfile";
import TeacherStudents from "./feature/teacher/teacherStudents";
import { NewsPage } from "./feature/main/news/NewsPage";
import CreateTasks from "./feature/teacher/Tasks/CreateTasks";
import CreateVideos from "./feature/teacher/addVideos/createVideos";
import TeacherHome from "./feature/teacher/teacher";
import TeacherNavbar from "./feature/teacher/Navbar/Navbar";
import CreateSchoolForm from "./feature/admin/school/createSchoolForm";
import DirectorCreatePage from "./feature/director/createCreate/directorCreatePage";

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
          <Route path="" element={"admin"} />
          <Route path="schools/create" element={<CreateSchoolForm />} />
        </Route>
        <Route
          path="/director"
          element={
            <>
              "director"
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
          <Route path="createVideos" element={<CreateVideos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
