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
