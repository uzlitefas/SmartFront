import { useState, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";

/* ================= TYPES ================= */

type Course = "english" | "math" | "mother";
type Stat = "students" | "score" | "rank";

interface CourseData {
  students: number;
  averageScore: number;
}

/* ================= DATA (FAQAT RAQAMLAR) ================= */

const courseData: Record<Course, CourseData> = {
  english: {
    students: 240,
    averageScore: 92,
  },
  math: {
    students: 180,
    averageScore: 95,
  },
  mother: {
    students: 300,
    averageScore: 90,
  },
};

/* ================= COMPONENT ================= */

export default function ARankCourses() {
  const { t } = useTranslation();

  const [activeCourse, setActiveCourse] = useState<Course>("english");
  const [activeStat, setActiveStat] = useState<Stat | null>(null);

  const data = courseData[activeCourse];

  return (
    <section style={styles.page}>
      <div style={styles.card}>
        {/* TOP GRID */}
        <div style={styles.topGrid}>
          {/* LEFT */}
          <div>
            <h2 style={styles.heroTitle}>{t("hero.titleLine1")}</h2>
            <p style={styles.heroDesc}>{t("hero.description")}</p>

            <h3 style={styles.title}>{t(`${activeCourse}.title`)}</h3>

            <p style={styles.description}>
              {t(`${activeCourse}.shortDescription`)}
            </p>

            {/* STATS */}
            <div style={styles.stats}>
              {(["students", "score", "rank"] as Stat[]).map((stat) => (
                <StatCard
                  key={stat}
                  label={t(`stats.${stat}`)}
                  value={
                    stat === "students"
                      ? `${data.students}+`
                      : stat === "score"
                        ? `${data.averageScore}%`
                        : "A"
                  }
                  detail={t(`${activeCourse}.details.${stat}`)}
                  active={activeStat === stat}
                  onClick={() =>
                    setActiveStat(activeStat === stat ? null : stat)
                  }
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={styles.imageBox}>Illustration / Logo</div>
        </div>

        {/* OVERVIEW */}
        <div style={styles.overview}>
          <OverviewItem
            title={t("overview.teaching")}
            text={t(`${activeCourse}.overview.teaching`)}
          />
          <OverviewItem
            title={t("overview.experience")}
            text={t(`${activeCourse}.overview.experience`)}
          />
          <OverviewItem
            title={t("overview.format")}
            text={t(`${activeCourse}.overview.format`)}
          />
        </div>

        {/* SWITCH */}
        <div style={styles.switch}>
          {(Object.keys(courseData) as Course[]).map((course) => (
            <button
              key={course}
              onClick={() => {
                setActiveCourse(course);
                setActiveStat(null);
              }}
              style={{
                ...styles.switchBtn,
                background:
                  activeCourse === course
                    ? "var(--primary)"
                    : "var(--secondary)",
                color:
                  activeCourse === course
                    ? "var(--primary-foreground)"
                    : "var(--secondary-foreground)",
              }}
            >
              {t(`${course}.title`)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

interface StatCardProps {
  label: string;
  value: string;
  detail: string;
  active: boolean;
  onClick: () => void;
}

function StatCard({ label, value, detail, active, onClick }: StatCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.statCard,
        ...(active ? styles.statActive : {}),
      }}
    >
      <h3 style={styles.statValue}>{value}</h3>
      <span style={styles.statLabel}>{label}</span>
      {active && <p style={styles.statDetail}>{detail}</p>}
    </div>
  );
}

interface OverviewItemProps {
  title: string;
  text: string;
}

function OverviewItem({ title, text }: OverviewItemProps) {
  return (
    <div style={styles.overviewItem}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

/* ================= STYLES ================= */

const styles: Record<string, CSSProperties> = {
  page: {
    padding: 24,
    background: "var(--background)",
    color: "var(--foreground)",
    fontFamily: "Inter, system-ui",
  },
  card: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: 32,
    background: "var(--card)",
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
  },
  topGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 32,
    marginBottom: 40,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 8,
  },
  heroDesc: {
    color: "var(--muted-foreground)",
    maxWidth: 640,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  description: {
    color: "var(--muted-foreground)",
    marginBottom: 24,
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 16,
  },
  statCard: {
    padding: 16,
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
    cursor: "pointer",
  },
  statActive: {
    background: "var(--accent)",
    borderColor: "var(--ring)",
  },
  statValue: {
    fontSize: 22,
    fontWeight: 700,
  },
  statLabel: {
    fontSize: 13,
    color: "var(--muted-foreground)",
  },
  statDetail: {
    marginTop: 8,
    fontSize: 13,
  },
  imageBox: {
    minHeight: 260,
    borderRadius: "var(--radius)",
    background: "var(--muted)",
    border: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
  },
  overview: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
    marginBottom: 32,
  },
  overviewItem: {
    padding: 20,
    borderRadius: "var(--radius)",
    background: "var(--muted)",
    border: "1px solid var(--border)",
  },
  switch: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    borderTop: "1px solid var(--border)",
    paddingTop: 20,
  },
  switchBtn: {
    flex: "1 1 200px",
    padding: 12,
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
    cursor: "pointer",
  },
};
