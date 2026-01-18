import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./feature/main/home/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import CoursesSection from "./feature/main/course/CourseSection";
import { useEffect, useState } from "react";
import Loader from "./components/shared/Loader";

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
          <Route path="gallery" element={"gallery"} />
          <Route path="news" element={"news"} />
          <Route path="contact" element={"contact"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
