import { newsData } from "@/constants";
import NewsCard from "./NewsCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NewsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("news.title")}
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t("news.description")}
          </p>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <Link to="/news">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              {t("news.all")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
