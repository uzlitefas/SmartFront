import type { Course, NewsItem } from "@/types/main";

export const banner =
  "https://t4.ftcdn.net/jpg/15/12/04/11/360_F_1512041110_c0NFJDcHLmUJiwfDowzcKUgsPALmbjdD.jpg";
export const video =
  "https://media.istockphoto.com/id/1708107733/video/teacher-providing-quality-education-to-attentive-school-children-in-classroom.mp4?s=mp4-640x640-is&k=20&c=36XIb6DXvv413u2bn3F7zVBR7z8lfITQ80WXi19TyR0=";

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Yangi sport zali ochildi",
    description:
      "Maktabimizda zamonaviy sport zali foydalanishga topshirildi. O'quvchilar uchun barcha sharoit yaratildi.",
    date: "2026-01-15",
    image:
      "https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Yangilik",
  },
  {
    id: 2,
    title: "Fan olimpiadasi g'oliblari",
    description:
      "O'quvchilarimiz viloyat bosqichida g'olib bo'lishdi. Matematika va fizika fanlaridan yuqori natijalar.",
    date: "2026-01-10",
    image:
      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tadbir",
  },
  {
    id: 3,
    title: "Ota-onalar yig'ilishi",
    description:
      "2026-yil yanvar oyining 25-kuni barcha sinf ota-onalari yig'ilishi bo'lib o'tadi. Davomatli bo'ling.",
    date: "2026-01-08",
    image:
      "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "E'lon",
  },
  {
    id: 4,
    title: "Kitob o'qish marafoni",
    description:
      "Maktabimizda kitobxonlik marafoni e'lon qilinadi. Ishtirok etishni istagan o'quvchilar kutubxonaga murojaat qilsin.",
    date: "2026-01-05",
    image:
      "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tadbir",
  },
  {
    id: 5,
    title: "Raqamli kutubxona ishga tushirildi",
    description:
      "O'quvchilar endi elektron kitoblardan foydalanishlari mumkin. Zamonaviy ta'lim texnologiyalari joriy etilmoqda.",
    date: "2026-01-03",
    image:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Yangilik",
  },
  {
    id: 6,
    title: "Yangi o'quv yili ariza qabuli",
    description:
      "2026-2027 o'quv yili uchun 1-sinf o'quvchilarini qabul qilish boshlandi. Hujjatlar qabuli mart oyigacha.",
    date: "2026-01-01",
    image:
      "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "E'lon",
  },
];

export const categories = [
  { key: "english", label: "English" },
  { key: "russian", label: "Russian" },
  { key: "math", label: "Math" },
] as const;

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
  { key: "news", href: "/news" },
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
