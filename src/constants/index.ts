import type { Course,} from "@/types/main";

export const banner =
  "https://t4.ftcdn.net/jpg/15/12/04/11/360_F_1512041110_c0NFJDcHLmUJiwfDowzcKUgsPALmbjdD.jpg";
export const video =
  "https://media.istockphoto.com/id/1708107733/video/teacher-providing-quality-education-to-attentive-school-children-in-classroom.mp4?s=mp4-640x640-is&k=20&c=36XIb6DXvv413u2bn3F7zVBR7z8lfITQ80WXi19TyR0=";

export const categories = [
  "all",
  "achievements",
  "events",
  "announcements",
  "general",
]


export type NewsCard = {
  id: number
  title: string
  content: string
  category_key: "events" | "achievements" | "announcements" | "general"
  is_featured: boolean
  published_date: string
  image_url?: string
  author?: string
}


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
]
export type News = {
  id: number
  title: string
  content: string
  category_key: string
  is_featured: boolean
  published_date: string
  image_url?: string
  author?: string
}

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
    content: "Kompyuterlar va texnikalar bilan jihozlangan yangi IT xonasi ishga tushdi.",
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
]



export const courses: Course[] = [
  {
    id: 1,
    title: "Matematika Asoslari",
    description: "Algebra va geometriya kursi.",
    features: ["Algebra", "Geometriya", "Testlar"],
    link: "/courses/math",
    category: "math",
    teacher: { id: 1, name: "Bahrom ustoz", subject: "Matematika" },
    views: 1240,
  },
  {
    id: 2,
    title: "English Grammar",
    description: "Grammar va vocabulary.",
    features: ["Beginner", "IELTS base", "Practice"],
    link: "/courses/english",
    category: "english",
    teacher: { id: 2, name: "Humoyun ustoz", subject: "English" },
    views: 980,
  },
  {
    id: 3,
    title: "English Speaking",
    description: "Speaking mashg‘ulotlari.",
    features: ["Live speaking", "Pronunciation", "Confidence"],
    link: "/courses/english-speaking",
    category: "english",
    teacher: { id: 2, name: "Humoyun ustoz", subject: "English" },
    views: 1560,
  },
  {
    id: 4,
    title: "Russian Grammar",
    description: "Rus tili grammatikasi asoslari.",
    features: ["A1–B1", "Grammatika", "Mashqlar"],
    link: "/courses/russian-grammar",
    category: "russian",
    teacher: { id: 3, name: "Ozoda ustoz", subject: "Russian" },
    views: 870,
  },
  {
    id: 5,
    title: "Russian Speaking",
    description: "Rus tilida gapirish ko‘nikmalari.",
    features: ["Dialoglar", "So‘zlashuv", "Listening"],
    link: "/courses/russian-speaking",
    category: "russian",
    teacher: { id: 3, name: "Ozoda ustoz", subject: "Russian" },
    views: 1120,
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
  { key: "home", href: "/" },
  { key: "new", href: "/news" },
  { key: "courses", href: "/courses" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
];

export const languages = [
  { code: "uz", label: "O'zbek" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

export const galleryData = [
  {
    id: 1,
    title: "1-sinf xonasi",
    description: "Zamonaviy jihozlangan, yorug‘ va qulay sinf xonasi.",
    image:
      "https://storage.kun.uz/source/7/p_7t6kn_xUtvWJ4eFaIpvdMJ6TStLej1.jpg",
  },
  {
    id: 2,
    title: "Maktab kutubxonasi",
    description: "O‘quvchilar uchun boy adabiyotlar va tinch muhit.",
    image:
      "https://arm.navoiy-uni.uz/wp-content/uploads/2020/08/eSYwKe5vcf9-jdQDLCxP4fC4Vjhch8vA-e1598937476763.jpg",
  },
  {
    id: 3,
    title: "Sport zali",
    description: "Jismoniy tarbiya mashg‘ulotlari uchun katta sport zali.",
    image:
      "https://storage.kun.uz/source/8/OkUtquyxI7fscIyox-tiMDhS9ieqKKw7.jpg",
  },
  {
    id: 4,
    title: "Maktab tashqi ko‘rinishi",
    description: "Zamonaviy arxitekturaga ega maktab binosi.",
    image:
      "https://data.daryo.uz/media/2023/17.022023/Otabek/photo_2023-03-16_23-57-59%20(2).jpg",
  },
  {
    id: 5,
    title: "Boshlang‘ich sinf",
    description: "Kichik yoshdagi bolalar uchun qulay va xavfsiz xona.",
    image:
      "https://storage.kun.uz/source/9/mc9uUXdzsof1zSxGCSOkeodNbsZHhriF.jpg",
  },
  {
    id: 6,
    title: "Tadbirlar zali",
    description: "Bayram va tadbirlar o‘tkaziladigan katta zal.",
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
  name: string
  age: string
  phone: string
  email: string
  gender: string
  address: string
  workExperience: string
  qualification: string
  university: string
  diplomaNumber: string
  subject: string
  school: string
  notes: string
  avatar: string
  coverImage: string
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
  notes:
    "Xalqaro olimpiadalarga tayyorlovchi ustoz. Tajribali pedagog.",
  avatar:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  coverImage:
    "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
}
