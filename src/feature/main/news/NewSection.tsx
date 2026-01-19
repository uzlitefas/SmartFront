import { newsData } from "@/constants";
import NewsCard from "./NewsCard";

function NewsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Maktab yangiliklari
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Maktabimizning so'nggi yangiliklari, tadbirlari va e'lonlari bilan
            tanishing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
            Barcha yangiliklar
            <span className="size='20' transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
