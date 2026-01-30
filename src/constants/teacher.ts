import type { Teacher, Course, Task, TeacherTable } from "@/types";

export const TEACHER: Teacher = {
  id: "teacher-1",
  full_name: "Aliyev Akmal",
  position: "Senior Frontend Teacher",
  avatar_url: "",
  age: 32,
  phone: "+998901234567",
  email: "akmal.aliyev@example.com",
  gender: "Erkak",
  address: "Toshkent, O‘zbekiston",
  experience: 10,
  level: "Magistr",
  university: "Toshkent Axborot Texnologiyalari Universiteti",
  diploma_number: "123456789",
  subject: "Frontend Development",
  school: "Toshkent Maktabi #12",
  note: "O‘quvchilar bilan individual ishlashga katta e’tibor beradi.",
};

export const COURSES: Course[] = [
  {
    id: "course-1",
    teacher_id: "teacher-1",
    name: "Frontend Development",
    subject: "Web dasturlash",
    description:
      "HTML, CSS, JavaScript, React va real loyihalar orqali frontend asoslarini o‘rganish.",
    status: "active",
    start_date: "2025-01-15",
  },
];

export const STUDENT_COUNTS: Record<string, number> = {
  "course-1": 28,
};

export const RECENT_TASKS: Task[] = [
  {
    id: "task-1",
    course_id: "course-1",
    title: "HTML & Semantic",
    type: "video",
    description: "Semantic taglar bilan layout tuzish",
    due_date: "2026-01-24",
    progress: 50,
    priority: "yuqori",
  },
  {
    id: "task-2",
    course_id: "course-1",
    title: "CSS Flexbox",
    type: "test",
    description: "Flexbox yordamida responsive sahifa",
    due_date: "2026-02-05",
    progress: 20,
    priority: "o‘rta",
  },
  {
    id: "task-3",
    course_id: "course-1",
    title: "CSS Grid",
    type: "savol-javob",
    description: "Grid bilan murakkab layoutlar",
    due_date: "2026-02-10",
    progress: 0,
    priority: "past",
  },
];

export const teachersData: TeacherTable[] = [
  {
    id: 1,
    fullName: "Alisher Karimov",
    subject: "Matematika",
    phone: "+998 90 123 45 67",
    experience: "12 yil",
    status: "Active",
  },
  {
    id: 2,
    fullName: "Dilnoza Rasulova",
    subject: "Ingliz tili",
    phone: "+998 91 555 44 33",
    experience: "8 yil",
    status: "Active",
  },
]
