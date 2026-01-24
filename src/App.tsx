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
import Teacher from "./feature/teacher/teacher";
import { NewsPage } from "./feature/main/news/NewsPage";
import TeacherProfileEditPage from "./feature/teacher/teacherProfile";
import TeacherStudents from "./feature/teacher/teacherStudents";

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
          path="/teacher"
          element={
            <>
              <div className="flex w-full">
                "navbar"
                <div className="m-3 p-8 rounded-md bg-accent w-full">
                  <Outlet />
                </div>
              </div>
            </>
          }
        >
          <Route path="" element={<Teacher />} />
          <Route path="profile" element={<TeacherProfileEditPage />} />
          <Route path="students" element={<TeacherStudents />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
