import {
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Globe,
  Award,
  TrendingUp,
  Clock,
} from "lucide-react";
import InfoSection from "./InfoSection";
import StatCard from "./StatCard";
import FeatureCard from "./FeatureCard";

function SchoolInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 md:mb-6 shadow-lg">
          <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
          Barkamol Avlod Maktabi
        </h1>
        <p className="text-sm md:text-xl text-muted-foreground max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          Zamonaviy ta'lim standartlari asosida o'quvchilarning intellektual va
          ijodiy salohiyatini rivojlantirishga qaratilgan ta'lim muassasasi
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
        <StatCard
          icon={<Users className="w-5 h-5 md:w-6 md:h-6" />}
          number="1,250+"
          label="O'quvchilar"
          color="blue"
        />
        <StatCard
          icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6" />}
          number="85+"
          label="O'qituvchilar"
          color="green"
        />
        <StatCard
          icon={<Trophy className="w-5 h-5 md:w-6 md:h-6" />}
          number="150+"
          label="Yutuqlar"
          color="amber"
        />
        <StatCard
          icon={<Award className="w-5 h-5 md:w-6 md:h-6" />}
          number="98%"
          label="Muvaffaqiyat"
          color="purple"
        />
      </div>

      <InfoSection
        title="Maktab tarixi"
        icon={<Clock className="w-5 h-5 md:w-6 md:h-6" />}
      >
        <div className="space-y-2 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>
            Barkamol Avlod maktabi 2005-yilda tashkil etilgan bo'lib, bugungi
            kunga qadar minglab o'quvchilarni muvaffaqiyatli tayyorlab kelmoqda.
            Maktab o'z faoliyatini boshlagan kundan boshlab zamonaviy ta'lim
            texnologiyalari va innovatsion usullarni qo'llash orqali
            o'quvchilarning bilim darajasini oshirishga alohida e'tibor beradi.
          </p>
          <p>
            20 yillik tarix davomida maktab respublika va xalqaro olimpiadalarda
            ko'plab g'oliblar tayyorladi, yuqori malakali o'qituvchilar
            jamoasini shakllantirdi va zamonaviy o'quv bazasini yaratdi.
          </p>
        </div>
      </InfoSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
        <InfoSection
          title="Missiyamiz"
          icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6" />}
        >
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Har bir o'quvchining shaxsiy qobiliyatlarini rivojlantirish,
            ularning intellektual, ijodiy va axloqiy salohiyatini ochish orqali
            jamiyat uchun bilimdon, mas'uliyatli va muvaffaqiyatli shaxslarni
            tarbiyalash. Biz o'quvchilarimizni XXI asr talablariga mos keladigan
            ko'nikmalarga ega qilishni maqsad qilganmiz.
          </p>
        </InfoSection>

        <InfoSection
          title="Viziyamiz"
          icon={<Globe className="w-5 h-5 md:w-6 md:h-6" />}
        >
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Respublikadagi eng yaxshi ta'lim muassasalaridan biri sifatida tan
            olinish va xalqaro standartlarga javob beradigan sifatli ta'lim
            berish. Innovatsion yondashuv, zamonaviy texnologiyalar va
            professional o'qituvchilar jamoasi orqali o'quvchilarni global
            raqobatbardosh bozorga tayyorlash.
          </p>
        </InfoSection>
      </div>

      <InfoSection
        title="Ta'lim dasturlari"
        icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <FeatureCard
            title="Umumiy ta'lim"
            description="1-11 sinflar uchun davlat ta'lim standartlari asosida tuzilgan to'liq kurs dasturi"
            color="blue"
          />
          <FeatureCard
            title="Chuqur ta'lim"
            description="Matematika, fizika, informatika va ingliz tili bo'yicha maxsus kurslar"
            color="green"
          />
          <FeatureCard
            title="Qo'shimcha ta'lim"
            description="Robotexnika, dasturlash, rasmchilik, musiqa va sport to'garaklari"
            color="amber"
          />
        </div>
      </InfoSection>

      <InfoSection
        title="Maktabning afzalliklari"
        icon={<Award className="w-5 h-5 md:w-6 md:h-6" />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
              Kichik guruhlar
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              Har bir sinfda 20-25 nafar o'quvchi, individual yondashuvni
              ta'minlash
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
              Zamonaviy laboratoriyalar
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              Fizika, kimyo, biologiya va informatika fanlari uchun jihozlangan
              xonalar
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
              Xalqaro aloqalar
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              Chet el maktablari bilan hamkorlik va almashinuv dasturlari
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
              <Trophy className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
              Sport majmuasi
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              Futbol, basketbol, voleybol va boshqa sport turlari uchun
              maydonlar
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
              Malakali o'qituvchilar
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              85% o'qituvchilar oliy toifa va magistr darajasiga ega
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
              Yuqori natijalar
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              O'quvchilarning 98% oliy ta'lim muassasalariga kiradi
            </p>
          </div>
        </div>
      </InfoSection>

      <InfoSection
        title="Yutuqlar va mukofotlar"
        icon={<Trophy className="w-5 h-5 md:w-6 md:h-6" />}
      >
        <div className="space-y-2 md:space-y-4 text-muted-foreground dark:text-muted-foreground-dark text-sm md:text-base">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-800 dark:to-amber-900 rounded-xl p-4 md:p-6 border-l-4 border-amber-500 dark:border-amber-400">
            <h4 className="font-semibold text-foreground dark:text-foreground-dark mb-1 md:mb-2">
              Respublika olimpiadalari
            </h4>
            <p>
              2023-2024 o'quv yilida 45 ta oltin, 38 ta kumush va 52 ta bronza
              medallar qo'lga kiritildi
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-800 dark:to-blue-900 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
            <h4 className="font-semibold text-foreground dark:text-foreground-dark mb-1 md:mb-2">
              Xalqaro olimpiadalarda ishtirok
            </h4>
            <p>
              Matematika, fizika va informatika bo'yicha xalqaro olimpiadalarda
              12 ta medal yutildi
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-800 dark:to-green-900 rounded-xl p-4 md:p-6 border-l-4 border-green-500 dark:border-green-400">
            <h4 className="font-semibold text-foreground dark:text-foreground-dark mb-1 md:mb-2">
              "Yilning eng yaxshi maktabi"
            </h4>
            <p>
              2023-yilda viloyat miqyosida "Yilning eng yaxshi ta'lim
              muassasasi" mukofotiga sazovor bo'ldi
            </p>
          </div>
        </div>
      </InfoSection>

      <div className="bg-ring rounded-2xl p-6 md:p-10 text-center text-white shadow-xl mt-8 md:mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
          Bizning maqsadimiz - Kelajak avlodni tarbiyalash
        </h2>
        <p className="text-xs md:text-lg max-w-xl md:max-w-3xl mx-auto leading-relaxed text-blue-100">
          Biz har bir o'quvchining individual qobiliyatlarini rivojlantirishga,
          ularni hayotga tayyorlashga va muvaffaqiyatli kelajak qurishga yordam
          beramiz. Bizning maktabimiz - bu faqat bilim olish joyi emas, balki
          shaxs sifatida shakllanish va o'z imkoniyatlarini kashf etish joyi.
        </p>
      </div>
    </div>
  );
}

export default SchoolInfo;
