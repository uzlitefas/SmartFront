export type Category = "english" | "russian" | "math";

export interface Teacher {
  id: number;
  name: string;
  subject: string;
}

export interface Video {
  url: string;
  poster?: string;
  duration?: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  features: string[];
  slug: string;
  category: Category;
  teacher: Teacher;
  views: number;
  video: Video;
}

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
