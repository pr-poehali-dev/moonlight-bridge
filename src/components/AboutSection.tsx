export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 bg-black px-6 sm:px-12 lg:px-20 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <img
                src="https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/0f83ee77-9c73-46a8-8e35-4a382d8f0a59.jpeg"
                alt="Экемел"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-400 text-xs">✦ О мне</span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Мастер нейро&shy;фотографии
            </h2>
            <div className="space-y-4 text-white/60 text-base sm:text-lg leading-relaxed">
              <p>
                Меня зовут Экемел, я начинаю свой путь нейрокреатора — создаю нейропортреты, восстанавливаю семейные архивы и оживляю старые снимки.
              </p>
              <p>
                Каждый заказ для меня — это история: чья-то бабушка на пожелтевшей фотографии, детский портрет с трещинами, мама с ребёнком на руках. Я отношусь к этому бережно и с душой.
              </p>
              <p>
                Работаю с современными ИИ-инструментами, но финальный результат всегда довожу вручную — чтобы он был живым, а не «машинным».
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Нейрофотография", "Реставрация", "Оживление фото", "Видеохроника"].map((tag) => (
                <span key={tag} className="bg-white/5 border border-white/10 text-white/50 text-sm px-4 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}