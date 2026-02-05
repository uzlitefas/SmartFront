export interface LoginDto {
  phone: string;
  password: string;
}

export interface AcceptInviteDto {
  token: string;
  phone: string;
  password: string;
}

export interface Teacher {
  id: string;
  full_name: string;
  position: string;

  age: number;
  phone: string;
  email: string;
  gender: string;
  address: string;
  avatar_url: string;

  experience: number;
  level: string;
  university: string;
  diploma_number: string;

  subject: string;
  school: string;

  note?: string;
}

export interface Course {
  id: string;
  teacher_id: string;
  name: string;
  subject: string;
  description: string;
  status: "active" | "paused" | "finished";
  start_date: string;
}

export type TaskType = "video" | "test" | "savol-javob";
export type Priority = "yuqori" | "o‘rta" | "past";

export interface Task {
  id: string;
  course_id: string;
  title: string;
  type: TaskType;
  description: string;
  due_date: string;
  progress?: number;
  priority?: Priority;
}
export type TeacherTable = {
  id: string
  fullName: string
  age: number
  phone: string
  email: string
  gender: "Erkak" | "Ayol"
  address: string
  workExperience: number
  qualification: "Oliy toifa" | "1-toifa" | "2-toifa" | "Toifasiz"
  university: string
  diplomaNumber: string
  subject: string
  school: string
  notes: string
}
