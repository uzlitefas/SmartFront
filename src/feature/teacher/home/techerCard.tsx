import type { Teacher } from "@/types";
import {
  User,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  BookOpen,
} from "lucide-react";

interface Props {
  teacher: Teacher;
}

export default function TeacherProfileCard({ teacher }: Props) {
  const info = [
    {
      label: "Ism familiya",
      value: teacher.full_name,
      icon: <User className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Yoshi",
      value: teacher.age + " yosh",
      icon: <Calendar className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Telefon raqami",
      value: teacher.phone,
      icon: <Phone className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Email",
      value: teacher.email,
      icon: <Mail className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Jinsi",
      value: teacher.gender,
      icon: <User className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Manzili",
      value: teacher.address,
      icon: <MapPin className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Ish staji",
      value: teacher.experience + " yil",
      icon: <Calendar className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Malaka darajasi",
      value: teacher.level,
      icon: (
        <GraduationCap className="w-4 h-4 text-[var(--muted-foreground)]" />
      ),
    },
    {
      label: "Tugatgan OTM",
      value: teacher.university,
      icon: <BookOpen className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Diplom raqami",
      value: teacher.diploma_number,
      icon: <BookOpen className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Fan",
      value: teacher.subject,
      icon: <BookOpen className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
    {
      label: "Maktabi",
      value: teacher.school,
      icon: <MapPin className="w-4 h-4 text-[var(--muted-foreground)]" />,
    },
  ];

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[var(--muted)] flex items-center justify-center">
          <User className="w-7 h-7 text-[var(--muted-foreground)]" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            {teacher.full_name}
          </h2>
          <p className="text-sm text-[var(--muted-foreground)]">
            {teacher.position}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {info.map((item) => (
          <div key={item.label} className="flex items-center gap-2 space-y-0.5">
            {item.icon}
            <div>
              <p className="text-xs text-[var(--muted-foreground)]">
                {item.label}
              </p>
              <p className="text-sm font-medium text-[var(--foreground)]">
                {item.value || "—"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {teacher.note && (
        <div className="pt-4 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted-foreground)] mb-1">Izoh</p>
          <p className="text-sm text-[var(--foreground)]">{teacher.note}</p>
        </div>
      )}
    </div>
  );
}
