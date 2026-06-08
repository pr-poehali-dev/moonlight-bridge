export default function ContactSection() {
  return (
    <section id="contacts" className="relative z-10 bg-black px-6 sm:px-12 lg:px-20 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 text-xs">✦ Контакты</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Свяжитесь со мной
          </h2>
          <p className="text-white/50 text-base sm:text-lg mt-4 max-w-xl">
            Опишите задачу — отвечу в течение нескольких часов и предложу варианты.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">
          {/* Phone */}
          <a
            href="tel:+7833251765"
            className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.08] rounded-2xl p-5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
              <span className="text-2xl">📞</span>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">Телефон</p>
              <p className="text-white font-semibold text-base">+7 (833) 251-76-5</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:ekemel1996@gmail.com"
            className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.08] rounded-2xl p-5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
              <span className="text-2xl">✉️</span>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">Email</p>
              <p className="text-white font-semibold text-base">ekemel1996@gmail.com</p>
            </div>
          </a>
          {/* Telegram */}
          <a
            href="https://t.me/EkaDib"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.08] rounded-2xl p-5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
              <span className="text-2xl">✈️</span>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">Telegram</p>
              <p className="text-white font-semibold text-base">@EkaDib</p>
            </div>
          </a>
        </div>

        {/* Footer note */}
        <p className="text-white/20 text-sm mt-16 pt-8 border-t border-white/5">
          © {new Date().getFullYear()} NeuroPix. Все права защищены.
        </p>
      </div>
    </section>
  )
}