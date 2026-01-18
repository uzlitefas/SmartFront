import type { NewsItem } from "./types";

interface NewsCardProps {
  news: NewsItem;
}

function NewsCard({ news }: NewsCardProps) {
  const categoryColors = {
    Yangilik: 'from-blue-500 to-blue-600',
    "E'lon": 'from-yellow-500 to-orange-500',
    Tadbir: 'from-green-500 to-teal-600',
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute top-4 left-4 bg-gradient-to-r ${categoryColors[news.category]} text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md`}
        >
          {news.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <span className="size='16'" />
          <time dateTime={news.date}>
            {new Date(news.date).toLocaleDateString('uz-UZ', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {news.description}
        </p>

        <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95">
          Batafsil
        </button>
      </div>
    </article>
  );
}

export default NewsCard;
