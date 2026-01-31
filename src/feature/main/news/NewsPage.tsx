import { useState } from "react";
import { NewsCard } from "./NewsCard";
import { FaFilter, FaNewspaper } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { newsData } from "@/constants";
import Header from "@/components/shared/main/Header";

export function NewsPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "achievements",
    "events",
    "announcements",
    "general",
  ];

  const filteredNews =
    selectedCategory === "all"
      ? newsData
      : newsData.filter((item) => item.category_key === selectedCategory);

  const featuredNews = filteredNews.filter((item) => item.is_featured);
  const regularNews = filteredNews.filter((item) => !item.is_featured);

  return (
    <>
      {" "}
      <Header type={"news"} />
      <div className="min-h-screen bg-[var(--background)]">
        <header className="bg-[var(--card)] border-b border-[var(--border)] sticky top-0 z-10 backdrop-blur-sm bg-opacity-90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-[var(--radius)] bg-[var(--primary)]">
                <FaNewspaper className="w-6 h-6 text-[var(--primary-foreground)]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[var(--foreground)]">
                  {t("newsPage.title")}
                </h1>
                <p className="text-[var(--muted-foreground)] mt-1">
                  {t("newsPage.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaFilter className="w-5 h-5 text-[var(--muted-foreground)]" />
              <h2 className="text-lg font-semibold text-[var(--foreground)]">
                {t("newsPage.categoriesTitle")}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-5 py-2.5 rounded-[var(--radius)] font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-md"
                      : "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--accent)]"
                  }`}
                >
                  {t(`newsPage.${key}`)}
                </button>
              ))}
            </div>
          </div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--muted-foreground)] text-lg">
                {t("newsPage.empty")}
              </p>
            </div>
          ) : (
            <>
              {featuredNews.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                    {t("newsPage.featured")}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredNews.map((item) => (
                      <NewsCard key={item.id} news={item} featured />
                    ))}
                  </div>
                </section>
              )}

              {regularNews.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                    {t("newsPage.allNews")}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularNews.map((item) => (
                      <NewsCard key={item.id} news={item} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </main>
      </div>
    </>
  );
}
