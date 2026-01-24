export type Category = "english" | "russian" | "math";

export interface Teacher {
  id: number;
  name: string;
  subject: string;
}

export interface Video {
  url: string;        // youtube / vimeo / mp4
  poster?: string;    // thumbnail (ixtiyoriy)
  duration?: string;  // 12:30 kabi (ixtiyoriy)
}

export interface Course {
  id: number;
  title: string;
  description: string;
  features: string[];
  slug: string;        // 🔥 routing uchun (/courses/:slug)
  category: Category;
  teacher: Teacher;
  views: number;
  video: Video;        // 🔥 BARCHA CARDLARDA VIDEO BOR
}

/* Qolganlari alohida qoladi – bu to‘g‘ri arxitektura */
export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: "Yangilik" | "E'lon" | "Tadbir";
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}
