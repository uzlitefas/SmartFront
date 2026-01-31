export default function CourseHero() {
  return (
    <section className="relative mb-16 rounded-[var(--radius)] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 p-8 md:p-14 max-w-3xl text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Bizning kurslar bilan kelajagingni qur 🚀
        </h1>
        <p className="text-white/80 mb-6">
          Eng talabgir kasblar, kuchli mentorlar va real loyihalar asosida
          ta’lim.
        </p>

        <div className="flex gap-4 text-sm">
          <div className="bg-white/10 px-4 py-2 rounded">
            👨‍🏫 Tajribali mentorlar
          </div>
          <div className="bg-white/10 px-4 py-2 rounded">📚 Amaliy darslar</div>
          <div className="bg-white/10 px-4 py-2 rounded">
            💼 Ishga tayyorlash
          </div>
        </div>
      </div>
    </section>
  );
}
