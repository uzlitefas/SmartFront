import { Home, Users, Book, BookOpen } from "lucide-react";

export const DirectorNav = [
  { icon: Home, label: "Home", route: "/" },
  { icon: Users, label: "Teachers", route: "/teachers" },
  { icon: Book, label: "MySchool", route: "/my-school" },
];
export const TeacherNav = [
  { icon: Home, label: "Home", route: "/" },
  { icon: Users, label: "Students", route: "/students" },
  { icon: BookOpen, label: "Courses", route: "/courses" },
];

export const banner: string =
  "https://t4.ftcdn.net/jpg/15/12/04/11/360_F_1512041110_c0NFJDcHLmUJiwfDowzcKUgsPALmbjdD.jpg";

export const video: string =
  "https://media.istockphoto.com/id/1708107733/video/teacher-providing-quality-education-to-attentive-school-children-in-classroom.mp4?s=mp4-640x640-is&k=20&c=36XIb6DXvv413u2bn3F7zVBR7z8lfITQ80WXi19TyR0=";

// news
export interface News {
  id: number;
  title: string;
  content: string;
  category_key: "events" | "achievements" | "announcements" | "general";
  is_featured: boolean;
  published_date: string;
  image_url: string;
  author?: string;
}

export const newsData: News[] = [
  {
    id: 1,
    title: "new_sport_hall_title",
    content: "new_sport_hall_content",
    category_key: "events",
    is_featured: true,
    published_date: "2026-01-15",
    image_url: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    author: "Admin",
  },
  {
    id: 2,
    title: "olympiad_win_title",
    content: "olympiad_win_content",
    category_key: "achievements",
    is_featured: false,
    published_date: "2026-01-10",
    image_url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    author: "Admin",
  },
  {
    id: 3,
    title: "new_it_courses_title",
    content: "new_it_courses_content",
    category_key: "announcements",
    is_featured: false,
    published_date: "2026-01-05",
    image_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    author: "Admin",
  },
];

//course
export type CourseRank = "A" | "B" | "C" | "D";

export type CourseCategory = "IT" | "tillar" | "Assosiy Fan" | "mashhur";

export interface Course {
  id: number;
  name: string;
  description: string;
  rank: CourseRank;
  banner: string;
  images: string[];
  teacherName: string;
  teacherAvatar: string;
  direction: string;
  students: number;
  lessons: number;
  category: CourseCategory;
}

export const COURSES: Course[] = [
  {
    id: 1,
    name: "Matematika",
    description:
      "Algebra, geometrik tushunchalar va tenglamalar asoslarini o‘rganing.",
    rank: "A",
    banner: "https://source.unsplash.com/800x400/?mathematics,math",
    images: ["https://source.unsplash.com/600x400/?math,algebra"],
    teacherName: "Azizbek Karimov",
    teacherAvatar: "https://randomuser.me/api/portraits/men/10.jpg",
    direction: "Maktab fanlari",
    students: 1500,
    lessons: 30,
    category: "mashhur",
  },
  {
    id: 2,
    name: "Fizika",
    description: "Klassik mexanika, energiya tushunchalari va amaliy misollar.",
    rank: "A",
    banner: "https://source.unsplash.com/800x400/?physics,science",
    images: ["https://source.unsplash.com/600x400/?physics,experiment"],
    teacherName: "Dilshod Islomov",
    teacherAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
    direction: "Maktab fanlari",
    students: 1200,
    lessons: 28,
    category: "mashhur",
  },
  {
    id: 3,
    name: "Biologiya",
    description: "Hayot shakllari, organizmlar va ekologiya asoslari.",
    rank: "B",
    banner: "https://source.unsplash.com/800x400/?biology,nature",
    images: ["https://source.unsplash.com/600x400/?biology,living"],
    teacherName: "Nilufar Eshmatova",
    teacherAvatar: "https://randomuser.me/api/portraits/women/21.jpg",
    direction: "Maktab fanlari",
    students: 1100,
    lessons: 25,
    category: "mashhur",
  },
  {
    id: 4,
    name: "Kimyo",
    description: "Atomlar, reaktiv moddalar va kimyoviy jarayonlar.",
    rank: "B",
    banner: "https://source.unsplash.com/800x400/?chemistry,laboratory",
    images: ["https://source.unsplash.com/600x400/?chemistry,bottle"],
    teacherName: "Sardor Tursunov",
    teacherAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    direction: "Maktab fanlari",
    students: 950,
    lessons: 24,
    category: "IT",
  },
  {
    id: 5,
    name: "Tarix",
    description: "Dunyo va O‘zbekiston tarixi asoslarini chuqur o‘rganing.",
    rank: "C",
    banner: "https://source.unsplash.com/800x400/?history,books",
    images: ["https://source.unsplash.com/600x400/?ancient,history"],
    teacherName: "Gulchehra Matkarimova",
    teacherAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
    direction: "Maktab fanlari",
    students: 900,
    lessons: 26,
    category: "Assosiy Fan",
  },
  {
    id: 6,
    name: "Ingliz tili",
    description: "Ingliz tili lug‘at, grammatika va amaliy mashqlar.",
    rank: "A",
    banner: "https://source.unsplash.com/800x400/?english,language",
    images: ["https://source.unsplash.com/600x400/?learn,english"],
    teacherName: "John Smith",
    teacherAvatar: "https://randomuser.me/api/portraits/men/33.jpg",
    direction: "Maktab fanlari",
    students: 1300,
    lessons: 32,
    category: "tillar",
  },
  {
    id: 7,
    name: "Ona tili va adabiyot",
    description: "O‘zbek tili, adabiyot va nutq sanʼati darslari.",
    rank: "B",
    banner: "https://source.unsplash.com/800x400/?literature,books",
    images: ["https://source.unsplash.com/600x400/?reading,books"],
    teacherName: "Mohira Xudoyberdiyeva",
    teacherAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
    direction: "Maktab fanlari",
    students: 1000,
    lessons: 28,
    category: "Assosiy Fan",
  },
  {
    id: 8,
    name: "Geografiya",
    description: "Yer yuzasi, geografik mintaqalar va tabiat bilan tanishing.",
    rank: "C",
    banner: "https://source.unsplash.com/800x400/?geography,map",
    images: ["https://source.unsplash.com/600x400/?globe,geography"],
    teacherName: "Jahonbek Qo‘ziyev",
    teacherAvatar: "https://randomuser.me/api/portraits/men/43.jpg",
    direction: "Maktab fanlari",
    students: 850,
    lessons: 23,
    category: "Assosiy Fan",
  },
  {
    id: 9,
    name: "Informatika",
    description: "Kompyuter asoslari, algoritmlar va dasturlash kirish.",
    rank: "B",
    banner: "https://source.unsplash.com/800x400/?computer,programming",
    images: ["https://source.unsplash.com/600x400/?coding,computer"],
    teacherName: "Rustam Akhmedov",
    teacherAvatar: "https://randomuser.me/api/portraits/men/44.jpg",
    direction: "Maktab fanlari",
    students: 1250,
    lessons: 30,
    category: "IT",
  },
];

export const navItems = [
  { key: "nav-home", href: "/" },
  { key: "nav-new", href: "/news" },
  { key: "nav-courses", href: "/courses" },
  { key: "nav-gallery", href: "/gallery" },
  { key: "nav-contact", href: "/contact" },
];

export const languages = [
  { code: "uz", label: "O'zbek" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

export const galleryData1 = [
  {
    id: 1,
    key: "class1",
    image:
      "https://storage.kun.uz/source/7/p_7t6kn_xUtvWJ4eFaIpvdMJ6TStLej1.jpg",
  },
  {
    id: 2,
    key: "library",
    image:
      "https://arm.navoiy-uni.uz/wp-content/uploads/2020/08/eSYwKe5vcf9-jdQDLCxP4fC4Vjhch8vA-e1598937476763.jpg",
  },
  {
    id: 3,
    key: "gym",
    image:
      "https://storage.kun.uz/source/8/OkUtquyxI7fscIyox-tiMDhS9ieqKKw7.jpg",
  },
  {
    id: 4,
    key: "exterior",
    image:
      "https://data.daryo.uz/media/2023/17.022023/Otabek/photo_2023-03-16_23-57-59%20(2).jpg",
  },
  {
    id: 5,
    key: "primary",
    image:
      "https://storage.kun.uz/source/9/mc9uUXdzsof1zSxGCSOkeodNbsZHhriF.jpg",
  },
  {
    id: 6,
    key: "hall",
    image:
      "https://avatars.mds.yandex.net/get-altay/5584339/2a0000017c8408bd9e1fa0727ec3f22c1ae9/XL",
  },
];

export const feature5 = [
  {
    title: "Sifatli ta’lim",
    text: "Zamonaviy dasturlar va metodikalar asosida.",
  },
  {
    title: "Tajribali ustozlar",
    text: "Yuqori malakali va fidoyi o‘qituvchilar.",
  },
  {
    title: "Qulay muhit",
    text: "Har bir o‘quvchi uchun xavfsiz va qulay sharoit.",
  },
];

export const stats = [
  { value: "1200+", label: "O‘quvchilar" },
  { value: "85+", label: "O‘qituvchilar" },
  { value: "50+", label: "Sinf xonalari" },
  { value: "100%", label: "Natija" },
];

export const leadership = [
  "Direktor",
  "O‘quv ishlari bo‘yicha direktor o‘rinbosari",
  "Ma’naviy-ma’rifiy ishlar bo‘yicha direktor o‘rinbosari",
];

export interface TeacherProfile {
  name: string;
  age: string;
  phone: string;
  email: string;
  gender: string;
  address: string;
  workExperience: string;
  qualification: string;
  university: string;
  diplomaNumber: string;
  subject: string;
  school: string;
  notes: string;
  avatar: string;
  coverImage: string;
}

export const teacherProfileData: TeacherProfile = {
  name: "Alisher Karimov",
  age: "35",
  phone: "+998 90 123 45 67",
  email: "alisher.karimov@maktab.uz",
  gender: "Erkak",
  address: "Toshkent shahar, Mirzo Ulug'bek tumani",
  workExperience: "12",
  qualification: "Oliy toifa",
  university: "Toshkent Davlat Pedagogika Universiteti",
  diplomaNumber: "PDU-2010-12345",
  subject: "Matematika",
  school: "45-son umumta'lim maktabi",
  notes: "Xalqaro olimpiadalarga tayyorlovchi ustoz. Tajribali pedagog.",
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  coverImage:
    "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
};

export interface Student {
  id: string;
  ismi: string;
  familiyasi: string;
  otasiningIsmi: string;
  tugilganSana: string;
  yoshi: number;
  jinsi: "Erkak" | "Ayol";
  telefonRaqami: string;
  ortachaBall: number;
  sinfi: string;
  fan: string;
  lastExamScore: number;
  maxScore: number;
  examType: "Class Exam" | "Online Exam" | "Missed Exam";
  onlineStatus: boolean;
  avatar: string;
}

export interface Teacher {
  ismi: string;
  familiyasi: string;
  maktab: string;
  shahar: string;
  studentsCount: number;
  projectsCount: number;
  examsCount: number;
  avatar: string;
}

export const teacherData: Teacher = {
  ismi: "Jaspreet Kaur",
  familiyasi: "Ahuja",
  maktab: "Orchid International School",
  shahar: "Nasik",
  studentsCount: 150,
  projectsCount: 5,
  examsCount: 84,
  avatar:
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
};

export const studentsData: Student[] = [
  {
    id: "1",
    ismi: "Kajal",
    familiyasi: "Sharma",
    otasiningIsmi: "Rajesh Sharma",
    tugilganSana: "2008-03-15",
    yoshi: 16,
    jinsi: "Ayol",
    telefonRaqami: "+998 91 234 56 78",
    ortachaBall: 89,
    sinfi: "Grade 7",
    fan: "Science",
    lastExamScore: 85,
    maxScore: 100,
    examType: "Online Exam",
    onlineStatus: true,
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    id: "2",
    ismi: "Neeta",
    familiyasi: "Rathod",
    otasiningIsmi: "Sunil Rathod",
    tugilganSana: "2009-07-22",
    yoshi: 15,
    jinsi: "Ayol",
    telefonRaqami: "+998 91 345 67 89",
    ortachaBall: 83,
    sinfi: "Grade 5",
    fan: "Maths",
    lastExamScore: 83,
    maxScore: 100,
    examType: "Missed Exam",
    onlineStatus: true,
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    id: "3",
    ismi: "Amey",
    familiyasi: "Gupta",
    otasiningIsmi: "Anil Gupta",
    tugilganSana: "2008-11-10",
    yoshi: 16,
    jinsi: "Erkak",
    telefonRaqami: "+998 91 456 78 90",
    ortachaBall: 56,
    sinfi: "Grade 9",
    fan: "English Literature",
    lastExamScore: 56,
    maxScore: 100,
    examType: "Class Exam",
    onlineStatus: true,
    avatar:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    id: "4",
    ismi: "Sharman",
    familiyasi: "Doshi",
    otasiningIsmi: "Ramesh Doshi",
    tugilganSana: "2009-05-18",
    yoshi: 15,
    jinsi: "Erkak",
    telefonRaqami: "+998 91 567 89 01",
    ortachaBall: 76,
    sinfi: "Grade 8",
    fan: "English Grammar",
    lastExamScore: 76,
    maxScore: 100,
    examType: "Class Exam",
    onlineStatus: true,
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    id: "5",
    ismi: "Amey",
    familiyasi: "Gupta",
    otasiningIsmi: "Anil Gupta",
    tugilganSana: "2008-09-25",
    yoshi: 16,
    jinsi: "Erkak",
    telefonRaqami: "+998 91 678 90 12",
    ortachaBall: 63,
    sinfi: "Grade 9",
    fan: "Environmental Studies",
    lastExamScore: 63,
    maxScore: 100,
    examType: "Online Exam",
    onlineStatus: true,
    avatar:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    id: "6",
    ismi: "Sharman",
    familiyasi: "Doshi",
    otasiningIsmi: "Ramesh Doshi",
    tugilganSana: "2009-01-30",
    yoshi: 15,
    jinsi: "Erkak",
    telefonRaqami: "+998 91 789 01 23",
    ortachaBall: 100,
    sinfi: "Grade 8",
    fan: "Hindi",
    lastExamScore: 54,
    maxScore: 100,
    examType: "Class Exam",
    onlineStatus: true,
    avatar:
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
];

export type ExamFilter = "All" | "Class Exam" | "Online Exam" | "Missed Exam";
export type RankType = "A" | "B" | "C" | "D";
export const COURSE_SUMMARY = {
  courseName: "Grade 9",
  subject: "English",
  totalScore: 365,
  rank: "B" as "A" | "B" | "C" | "D",
};
