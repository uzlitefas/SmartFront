// courses.data.ts

export type Lang = "uz" | "ru" | "en";
export type Course = "english" | "math" | "mother";
export type Stat = "students" | "score" | "rank";

export const coursesData = {
  hero: {
    title: {
      uz: "Kelajak kasblarini o‘rganing",
      ru: "Осваивайте профессии будущего",
      en: "Learn the professions of the future",
    },
    description: {
      uz: "Zamonaviy bilimlar va tajribali ustozlar.",
      ru: "Современные знания и опытные преподаватели.",
      en: "Modern knowledge and experienced mentors.",
    },
  },

  statsLabel: {
    students: {
      uz: "Talabalar",
      ru: "Студенты",
      en: "Students",
    },
    score: {
      uz: "O‘rtacha ball",
      ru: "Средний балл",
      en: "Average score",
    },
    rank: {
      uz: "Daraja",
      ru: "Уровень",
      en: "Rank",
    },
  },

  overviewTitle: {
    teaching: {
      uz: "Darslar qanday o‘tkaziladi?",
      ru: "Как проходят занятия?",
      en: "How are the lessons conducted?",
    },
    experience: {
      uz: "O‘qituvchilar tajribasi",
      ru: "Опыт преподавателей",
      en: "Teachers’ experience",
    },
    format: {
      uz: "Dars formati",
      ru: "Формат занятий",
      en: "Lesson format",
    },
  },

  courses: {
    english: {
      title: {
        uz: "Ingliz tili kursi",
        ru: "Курс английского языка",
        en: "English Course",
      },
      shortDescription: {
        uz: "A rankdagi ingliz tili o‘quvchilari",
        ru: "Ученики английского языка уровня A",
        en: "A-rank English students",
      },
      students: 240,
      averageScore: 92,
      details: {
        students: {
          uz: "IELTS va CEFR ga tayyorlanadi",
          ru: "Подготовка к IELTS и CEFR",
          en: "Preparation for IELTS and CEFR",
        },
        score: {
          uz: "Doimiy yuqori natijalar",
          ru: "Стабильно высокие результаты",
          en: "Consistently high results",
        },
        rank: {
          uz: "Eng kuchli guruh",
          ru: "Самая сильная группа",
          en: "Top-performing group",
        },
      },
      overview: {
        teaching: {
          uz: "Interaktiv darslar",
          ru: "Интерактивные занятия",
          en: "Interactive lessons",
        },
        experience: {
          uz: "5+ yillik tajribali ustozlar",
          ru: "Преподаватели с опытом 5+ лет",
          en: "Teachers with 5+ years experience",
        },
        format: {
          uz: "Online va Offline",
          ru: "Онлайн и офлайн",
          en: "Online and Offline",
        },
      },
    },

    math: {
      title: {
        uz: "Matematika kursi",
        ru: "Курс математики",
        en: "Mathematics Course",
      },
      shortDescription: {
        uz: "A rankdagi matematika o‘quvchilari",
        ru: "Ученики математики уровня A",
        en: "A-rank math students",
      },
      students: 180,
      averageScore: 95,
      details: {
        students: {
          uz: "Olimpiada va testlar",
          ru: "Олимпиады и тесты",
          en: "Olympiads and tests",
        },
        score: {
          uz: "Eng yuqori o‘rtacha ball",
          ru: "Самый высокий средний балл",
          en: "Highest average score",
        },
        rank: {
          uz: "Analitik fikrlash",
          ru: "Аналитическое мышление",
          en: "Strong analytical thinking",
        },
      },
      overview: {
        teaching: {
          uz: "Masalalar orqali tushuntirish",
          ru: "Обучение через задачи",
          en: "Teaching through problem solving",
        },
        experience: {
          uz: "Olimpiada murabbiylari",
          ru: "Тренеры олимпиад",
          en: "Olympiad coaches",
        },
        format: {
          uz: "Kichik guruhlar",
          ru: "Малые группы",
          en: "Small groups",
        },
      },
    },

    mother: {
      title: {
        uz: "Ona tili",
        ru: "Родной язык",
        en: "Mother Tongue",
      },
      shortDescription: {
        uz: "A rankdagi ona tili o‘quvchilari",
        ru: "Ученики родного языка уровня A",
        en: "A-rank native language students",
      },
      students: 300,
      averageScore: 90,
      details: {
        students: {
          uz: "Savodxonlik rivojlanadi",
          ru: "Развитие грамотности",
          en: "Literacy improvement",
        },
        score: {
          uz: "Barqaror natijalar",
          ru: "Стабильные результаты",
          en: "Stable results",
        },
        rank: {
          uz: "Keng dastur",
          ru: "Широкая программа",
          en: "Comprehensive program",
        },
      },
      overview: {
        teaching: {
          uz: "Matn tahlili va yozma ishlar",
          ru: "Анализ текста и письма",
          en: "Text analysis and writing",
        },
        experience: {
          uz: "Tajribali filologlar",
          ru: "Опытные филологи",
          en: "Experienced philologists",
        },
        format: {
          uz: "Doimiy nazorat",
          ru: "Постоянный контроль",
          en: "Continuous assessment",
        },
      },
    },
  },
} as const;
