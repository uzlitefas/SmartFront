import type { NewsItem } from "@/types/main";
import { useTranslation } from "react-i18next";

interface NewsCardProps {
  news: NewsItem;
}

function NewsCard({ news }: NewsCardProps) {
  const { t } = useTranslation();

  const categoryColors = {
    Yangilik: "from-blue-500 to-blue-600",
    "E'lon": "from-yellow-500 to-orange-500",
    Tadbir: "from-green-500 to-teal-600",
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className={`absolute top-4 left-4 bg-gradient-to-r ${
            categoryColors[news.category]
          } text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md`}
        >
          {/* Agar category ham tarjima qilinadigan bo‘lsa */}
          {t(`news.categories.${news.category}`, news.category)}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
          <time dateTime={news.date}>
            {new Date(news.date).toLocaleDateString("uz-UZ", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
          {news.description}
        </p>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg active:scale-95">
          {t("news.readMore")}
        </button>
      </div>
    </article>
  );
}

export default NewsCard;
