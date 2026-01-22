import type { News } from "@/lib/supabase"
import { FaCalendar, FaUser } from "react-icons/fa"
import { useTranslation } from "react-i18next"

interface NewsCardProps {
  news: News
  featured?: boolean
}

export function NewsCard({ news, featured = false }: NewsCardProps) {
  const { i18n, t } = useTranslation()

  const date = new Date(news.published_date)
  const formattedDate = date.toLocaleDateString(
    i18n.language === "ru"
      ? "ru-RU"
      : i18n.language === "en"
      ? "en-US"
      : "uz-UZ",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <article
      className={`group relative overflow-hidden rounded-[var(--radius)] transition-all duration-300 hover:shadow-lg ${
        featured
          ? "bg-[var(--card)] border border-[var(--border)] col-span-full md:col-span-2"
          : "bg-[var(--card)] border border-[var(--border)]"
      }`}
    >
      <div className={`${featured ? "md:flex md:gap-6" : ""}`}>
        {news.image_url && (
          <div
            className={`relative overflow-hidden ${
              featured ? "md:w-1/2" : "w-full h-48"
            }`}
          >
            <img
              src={news.image_url}
              alt={news.title}
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                featured ? "h-full min-h-[300px]" : "h-48"
              }`}
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]">
                {news.category}
              </span>
            </div>
          </div>
        )}

        <div
          className={`p-6 ${
            featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""
          }`}
        >
          <h3
            className={`font-bold text-[var(--card-foreground)] mb-3 line-clamp-2 transition-colors group-hover:text-[var(--primary)] ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {news.title}
          </h3>

          <p
            className={`text-[var(--muted-foreground)] mb-4 leading-relaxed ${
              featured ? "text-base line-clamp-4" : "text-sm line-clamp-3"
            }`}
          >
            {news.content}
          </p>

          <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
            <div className="flex items-center gap-1.5">
              <FaCalendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>

            {news.author && (
              <div className="flex items-center gap-1.5">
                <FaUser className="w-4 h-4" />
                <span>{news.author}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
