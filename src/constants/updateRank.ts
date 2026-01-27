// courses.data.ts

export type Course = "english" | "math" | "mother";
export type Stat = "students" | "score" | "rank";

export const coursesContent = {
  hero: {
    title: "Kelajak kasblarini o‘rganing",
    description: "Zamonaviy bilimlar, tajribali ustozlar va real natijalar.",
  },

  statsLabel: {
    students: "Talabalar",
    score: "O‘rtacha ball",
    rank: "Daraja",
  },

  overviewTitle: {
    teaching: "Darslar qanday o‘tkaziladi?",
    experience: "O‘qituvchilar tajribasi",
    format: "Dars formati",
  },

  courses: {
    english: {
      title: "Ingliz tili kursi",
      shortDescription: "A rankdagi ingliz tili o‘quvchilari",
      students: 240,
      averageScore: 92,
      details: {
        students: "IELTS va CEFR imtihonlariga tayyorlanadi",
        score: "Natijalar doimiy yuqori darajada",
        rank: "Eng faol va kuchli guruh",
      },
      overview: {
        teaching: "Darslar interaktiv olib boriladi",
        experience: "5+ yillik tajribali ustozlar",
        format: "Online va Offline",
      },
    },

    math: {
      title: "Matematika kursi",
      shortDescription: "A rankdagi matematika o‘quvchilari",
      students: 180,
      averageScore: 95,
      details: {
        students: "Olimpiada va testlarga tayyorlov",
        score: "Eng yuqori o‘rtacha ball",
        rank: "Analitik fikrlash kuchli",
      },
      overview: {
        teaching: "Masalalar orqali tushuntirish",
        experience: "Olimpiada murabbiylari",
        format: "Kichik guruhlar",
      },
    },

    mother: {
      title: "Ona tili",
      shortDescription: "A rankdagi ona tili o‘quvchilari",
      students: 300,
      averageScore: 90,
      details: {
        students: "Savodxonlik rivojlanadi",
        score: "Barqaror natijalar",
        rank: "Keng dastur",
      },
      overview: {
        teaching: "Matn tahlili va yozma ishlar",
        experience: "Tajribali filologlar",
        format: "Doimiy nazorat",
      },
    },
  },
} as const;
