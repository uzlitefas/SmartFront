import { COURSES } from "@/constants";
import CourseHero from "./CourseHero";
import { CourseList } from "./CourseList";
import Header from "@/components/shared/main/Header";

export default function CoursePage() {
  return (
    <>
      <Header type="courses" />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <CourseHero />
        <CourseList courses={COURSES} />
      </section>
    </>
  );
}
