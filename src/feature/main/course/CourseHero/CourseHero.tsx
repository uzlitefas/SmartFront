// CourseHero.tsx
import { useTranslation } from "react-i18next";

export default function CourseHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {t("courseHero.title1")}
            <span className="block text-primary">
              {t("courseHero.title2")}
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            {t("courseHero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium">
              {t("courseHero.explore")}
            </button>
            <button className="px-6 py-3 rounded-xl border border-border bg-card">
              {t("courseHero.how")}
            </button>
          </div>

          <div className="flex gap-6 pt-4 text-sm text-muted-foreground">
            <div>
              <p className="text-2xl font-bold text-foreground">20+</p>
              {t("courseHero.stats.courses")}
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">5k+</p>
              {t("courseHero.stats.students")}
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">95%</p>
              {t("courseHero.stats.satisfaction")}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl bg-card shadow-xl p-6 space-y-4">
            <div className="h-40 rounded-xl bg-muted" />
            <h3 className="text-lg font-semibold">
              {t("courseHero.demo.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("courseHero.demo.desc")}
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-[oklch(0.93_0.12_140)] text-[oklch(0.35_0.15_140)]">
                {t("courseHero.demo.tag1")}
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-[oklch(0.95_0.12_95)] text-[oklch(0.45_0.15_95)]">
                {t("courseHero.demo.tag2")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
