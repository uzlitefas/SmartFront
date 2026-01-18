export type Category = "english" | "russian" | "math";

export type Teacher = {
  id: number;
  name: string;
  subject: string;
};

export type Course = {
  id: number;
  title: string;
  description: string;
  features: string[];
  link: string;
  category: Category;
  teacher: Teacher;
  views: number;
};

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
