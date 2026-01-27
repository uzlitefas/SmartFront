import type { Course } from "@/types/main";

export const banner: string =
  "https://t4.ftcdn.net/jpg/15/12/04/11/360_F_1512041110_c0NFJDcHLmUJiwfDowzcKUgsPALmbjdD.jpg";

export const video: string =
  "https://media.istockphoto.com/id/1708107733/video/teacher-providing-quality-education-to-attentive-school-children-in-classroom.mp4?s=mp4-640x640-is&k=20&c=36XIb6DXvv413u2bn3F7zVBR7z8lfITQ80WXi19TyR0=";

export const categories = [
  "all",
  "achievements",
  "events",
  "announcements",
  "general",
];

export type NewsCard = {
  id: number;
  title: string;
  content: string;
  category_key: "events" | "achievements" | "announcements" | "general";
  is_featured: boolean;
  published_date: string;
  image_url?: string;
  author?: string;
};

export const NewsCardsData: NewsCard[] = [
  {
    id: 1,
    title: "Yangi sport zali ochildi",
    content: "Maktabimizda zamonaviy sport zali foydalanishga topshirildi.",
    category_key: "events",
    is_featured: true,
    published_date: "2026-01-15",
    image_url: "/images/news/sport-hall.jpg",
    author: "Admin",
  },
  {
    id: 2,
    title: "Olimpiada g‘alabasi",
    content: "O‘quvchilarimiz viloyat bosqichida 1-o‘rinni egalladi.",
    category_key: "achievements",
    is_featured: false,
    published_date: "2026-01-10",
    image_url: "/images/news/olympiad-win.jpg",
    author: "Admin",
  },
  {
    id: 3,
    title: "Yangi IT sinfxona ishga tushdi",
    content: "Kompyuterlar bilan jihozlangan zamonaviy IT xonasi ochildi.",
    category_key: "events",
    is_featured: false,
    published_date: "2026-01-08",
    image_url: "/images/news/it-classroom.jpg",
    author: "Admin",
  },
  {
    id: 4,
    title: "Fan haftaligi boshlandi",
    content: "Maktabda matematika va fizika fan haftaligi o‘tkazilmoqda.",
    category_key: "events",
    is_featured: false,
    published_date: "2026-01-06",
    image_url: "/images/news/science-week.jpg",
    author: "Admin",
  },
  {
    id: 5,
    title: "Yangi kurslar e’lon qilindi",
    content: "2026-yil uchun yangi IT va dizayn kurslari ochildi.",
    category_key: "announcements",
    is_featured: false,
    published_date: "2026-01-05",
    image_url: "/images/news/it-courses.jpg",
    author: "Admin",
  },
  {
    id: 6,
    title: "O‘quvchilar shahmat musobaqasida g‘olib bo‘ldi",
    content: "Maktab jamoasi tuman bosqichida 1-o‘rinni oldi.",
    category_key: "achievements",
    is_featured: false,
    published_date: "2026-01-03",
    image_url: "/images/news/chess-win.jpg",
    author: "Admin",
  },
  {
    id: 7,
    title: "Ota-onalar yig‘ilishi bo‘lib o‘tdi",
    content: "Yangi o‘quv rejalar muhokama qilindi.",
    category_key: "events",
    is_featured: false,
    published_date: "2026-01-02",
    image_url: "/images/news/parents-meeting.jpg",
    author: "Admin",
  },
  {
    id: 8,
    title: "Kutubxona yangilandi",
    content: "Maktab kutubxonasi yangi kitoblar bilan boyitildi.",
    category_key: "general",
    is_featured: false,
    published_date: "2025-12-30",
    image_url: "/images/news/library.jpg",
    author: "Admin",
  },
  {
    id: 9,
    title: "Yangi yil bayrami tashkil etildi",
    content: "O‘quvchilar uchun bayramona tadbir o‘tkazildi.",
    category_key: "events",
    is_featured: false,
    published_date: "2025-12-28",
    image_url: "/images/news/new-year.jpg",
    author: "Admin",
  },
  {
    id: 10,
    title: "Ingliz tili tanlovi yakunlandi",
    content: "Eng faol o‘quvchilar diplom bilan taqdirlandi.",
    category_key: "achievements",
    is_featured: false,
    published_date: "2025-12-25",
    image_url: "/images/news/english-contest.jpg",
    author: "Admin",
  },
];
export type News = {
  id: number;
  title: string;
  content: string;
  category_key: string;
  is_featured: boolean;
  published_date: string;
  image_url?: string;
  author?: string;
};

export const newsData: News[] = [
  {
    id: 1,
    title: "Yangi sport zali ochildi",
    content: "Maktabimizda zamonaviy sport zali foydalanishga topshirildi.",
    category_key: "events",
    is_featured: true,
    published_date: "2026-01-15",
    image_url: "/images/news/sport-hall.jpg",
    author: "Admin",
  },
  {
    id: 2,
    title: "Olimpiada g‘alabasi",
    content: "O‘quvchilarimiz viloyat bosqichida 1-o‘rinni egalladi.",
    category_key: "achievements",
    is_featured: false,
    published_date: "2026-01-10",
    image_url: "/images/news/olympiad-win.jpg",
    author: "Admin",
  },
  {
    id: 3,
    title: "Yangi kurslar e’lon qilindi",
    content: "2026-yil uchun yangi IT kurslar ochildi.",
    category_key: "announcements",
    is_featured: false,
    published_date: "2026-01-05",
    image_url: "/images/news/it-courses.jpg",
    author: "Admin",
  },
  {
    id: 4,
    title: "IT sinfxonasi yangilandi",
    content:
      "Kompyuterlar va texnikalar bilan jihozlangan yangi IT xonasi ishga tushdi.",
    category_key: "events",
    is_featured: false,
    published_date: "2026-01-03",
    image_url: "/images/news/it-classroom.jpg",
    author: "Admin",
  },
  {
    id: 5,
    title: "Fan olimpiadasiga tayyorgarlik boshlandi",
    content: "Iqtidorli o‘quvchilar bilan maxsus mashg‘ulotlar o‘tkazilmoqda.",
    category_key: "general",
    is_featured: false,
    published_date: "2026-01-01",
    image_url: "/images/news/preparation.jpg",
    author: "Admin",
  },
  {
    id: 6,
    title: "Shahmat musobaqasida g‘alaba",
    content: "Maktab jamoasi tuman bosqichida faxrli 1-o‘rinni qo‘lga kiritdi.",
    category_key: "achievements",
    is_featured: false,
    published_date: "2025-12-30",
    image_url: "/images/news/chess-win.jpg",
    author: "Admin",
  },
  {
    id: 7,
    title: "Ota-onalar yig‘ilishi bo‘lib o‘tdi",
    content: "Ta’lim sifati va yangi rejalar muhokama qilindi.",
    category_key: "events",
    is_featured: false,
    published_date: "2025-12-28",
    image_url: "/images/news/parents-meeting.jpg",
    author: "Admin",
  },
  {
    id: 8,
    title: "Kutubxona fondi kengaytirildi",
    content: "Yangi darsliklar va badiiy kitoblar olib kelindi.",
    category_key: "general",
    is_featured: false,
    published_date: "2025-12-26",
    image_url: "/images/news/library.jpg",
    author: "Admin",
  },
  {
    id: 9,
    title: "Yangi yil bayram tadbiri o‘tkazildi",
    content: "O‘quvchilar uchun bayramona dastur tashkil etildi.",
    category_key: "events",
    is_featured: false,
    published_date: "2025-12-25",
    image_url: "/images/news/new-year.jpg",
    author: "Admin",
  },
  {
    id: 10,
    title: "Ingliz tili tanlovi yakunlandi",
    content: "Eng faol ishtirokchilar diplom va sovg‘alar bilan taqdirlandi.",
    category_key: "achievements",
    is_featured: false,
    published_date: "2025-12-23",
    image_url: "/images/news/english-contest.jpg",
    author: "Admin",
  },
];
export const courses: Course[] = [
  {
    id: 1,
    title: "English for Beginners",
    description: "Basic English speaking and grammar",
    features: ["Speaking", "Grammar", "Vocabulary"],
    slug: "english-for-beginners",
    category: "english",
    views: 15200,
    teacher: {
      id: 1,
      name: "Anna Smith",
      subject: "English",
    },
    video: {
      url: "https://www.youtube.com/embed/_CL6n0FJZpk",
      poster: "/images/english.jpg",
      duration: "18:40",
    },
  },

  {
    id: 2,
    title: "Mathematics 101",
    description: "Algebra and basic math logic",
    features: ["Algebra", "Logic", "Practice"],
    slug: "mathematics-101",
    category: "math",
    views: 9800,
    teacher: {
      id: 2,
      name: "Ali Karimov",
      subject: "Mathematics",
    },
    video: {
      url: "https://www.youtube.com/embed/8H6E2sq6L9M",
      poster: "/images/math.jpg",
      duration: "22:10",
    },
  },

  {
    id: 3,
    title: "Russian for Beginners",
    description: "Basic Russian speaking and grammar",
    features: ["Speaking", "Grammar", "Vocabulary"],
    slug: "russian-for-beginners",
    category: "russian",
    views: 15200,
    teacher: {
      id: 3,
      name: "Victoriya",
      subject: "Russian",
    },
    video: {
      url: "https://www.youtube.com/embed/YhhFK55Tkbg",
      poster: "/images/russian.jpg",
      duration: "18:40",
    },
  },
];

export const footerData = {
  about: {
    title: "Let's Chat",
    description:
      "I'm passionate about creating beautiful, functional components that make your projects shine. Let's work together to bring your vision to life.",
    buttonText: "Schedule a call",
  },
  portfolio: {
    title: "PORTFOLIO",
    links: [
      { label: "Projects", to: "/projects" },
      { label: "Pricing", to: "/pricing" },
      { label: "About", to: "/about" },
    ],
  },
  social: {
    title: "SOCIAL",
    links: [
      { label: "Twitter", url: "https://twitter.com" },
      { label: "Instagram", url: "https://instagram.com" },
      { label: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  contact: {
    title: "CONTACT",
    phone: "+1 (555) 123-4567",
    email: "hello@artiststudio.com",
    location: "NYC • EST",
  },
  footerBottom: {
    copyright: "© 2025 YourProject. All rights reserved.",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
  },
};

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

export const slides = [
  {
    title: "Maktab binosi",
    desc: "Zamonaviy va qulay maktab binosi",
    img: "https://aniq.uz/photos/603359e94b5b0.jpg",
  },
  {
    title: "O‘quv jarayoni",
    desc: "Dars mashg‘ulotlaridan lavhalar",
    img: "https://xalqtaliminfo.uz/storage/posts/1724666379photo_2024-08-26_14-661.jpg",
  },
  {
    title: "Kutubxona",
    desc: "Boy va zamonaviy kutubxona",
    img: "https://www.gazeta.uz/media/img/2021/02/efDUyO16140765617821_l.jpg",
  },
  {
    title: "Sport maydoni",
    desc: "Sport bilan shug‘ullanish uchun qulay sharoit",
    img: "https://storage.kun.uz/source/8/OkUtquyxI7fscIyox-tiMDhS9ieqKKw7.jpg",
  },
  {
    title: "Tadbirlar",
    desc: "Bayram va muhim tadbirlardan lavhalar",
    img: "https://storage.kun.uz/source/archive_15_05/RASMLAR/RASMLAR/RASMLAR/Rasmlar/Rasmlar/nav6.jpg",
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

// src/constants/index.ts

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
