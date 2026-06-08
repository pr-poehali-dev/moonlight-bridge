import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const galleryPairs = [
  {
    before: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/254751ce-b007-4180-bdb9-dcb1a45fa29d.JPG",
    after: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/86cd66a0-7c8c-43a8-997c-5e7926d259a7.png",
  },
  {
    before: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/88c074c8-1ad4-46ab-9cad-b6d1a7ae2d61.JPG",
    after: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/0bcc82b5-7d6a-4d92-819c-e2a080eb97f2.jpeg",
  },
  {
    before: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/0bcc82b5-7d6a-4d92-819c-e2a080eb97f2.jpeg",
    after: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/252b6d4d-5803-49e1-8817-e396e92953a3.jpeg",
  },
]

const serviceCards = [
  {
    icon: "🎭",
    title: "Портрет по референсу",
    description: "Загружаете фото или описание — получаете готовый нейропортрет в нужном стиле: реализм, фэнтези, аниме и другие.",
  },
  {
    icon: "🎨",
    title: "Арт и концепт",
    description: "Персонажи, локации, обложки — создаю художественные образы для игр, книг, брендинга и творческих проектов.",
  },
  {
    icon: "✨",
    title: "Уникальный стиль",
    description: "Разрабатываю авторский визуальный стиль под ваш бренд или проект — чтобы образы были узнаваемы и неповторимы.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 bg-black px-6 sm:px-12 lg:px-20 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 text-xs">✦ Услуги</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Нейрофотография
          </h2>
          <p className="text-white/50 text-base sm:text-lg mt-4 max-w-xl">
            Создаю уникальные образы на основе ваших референсов — портреты, арт, концепт-арт и многое другое.
          </p>
        </div>

        {/* Gallery Before / After */}
        <div className="space-y-4 sm:space-y-5 mb-12 sm:mb-16">
          {galleryPairs.map((pair, i) => (
            <div key={i} className="grid grid-cols-2 gap-3 sm:gap-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={pair.before}
                  alt={`До ${i + 1}`}
                  className="w-full h-52 sm:h-72 lg:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-black/50 backdrop-blur-sm border border-white/20 text-white/70 text-xs px-3 py-1.5 rounded-full">До</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-orange-500/30">
                <img
                  src={pair.after}
                  alt={`После ${i + 1}`}
                  className="w-full h-52 sm:h-72 lg:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-orange-500/80 backdrop-blur-sm border border-orange-400/40 text-white text-xs px-3 py-1.5 rounded-full">После</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCards.map((card, i) => (
            <div key={i} className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 hover:bg-white/8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-5 group-hover:bg-orange-500/30 transition-colors">
                <span className="text-2xl">{card.icon}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-base font-semibold flex items-center gap-2 border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
            Заказать нейрофото
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
