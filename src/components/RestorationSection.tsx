import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const restorationPairs = [
  {
    before: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/324f3dd1-595d-45b8-af1c-d25e4e799444.jpg",
    after: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/a135791d-6864-498d-b7a4-210c5785a4f2.jpeg",
    label: "Семейный архив",
  },
  {
    before: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/7c565a06-1609-4ad5-a204-c68993a8db4a.png",
    after: "https://cdn.poehali.dev/projects/92e07662-2fc5-4af2-bf2f-48bceedf2eea/bucket/072e647a-d8d7-421c-a5cf-18b281c0769a.jpeg",
    label: "Детское фото",
  },
]

const features = [
  { icon: "🖼️", text: "Убираю царапины, трещины и пятна" },
  { icon: "🎨", text: "Восстанавливаю цвет выцветших снимков" },
  { icon: "🔍", text: "Повышаю чёткость и детали лиц" },
  { icon: "📸", text: "Работаю даже с сильно повреждёнными фото" },
]

export default function RestorationSection() {
  return (
    <section id="restoration" className="relative z-10 bg-black px-6 sm:px-12 lg:px-20 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 text-xs">✦ Реставрация</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Старые фото — как новые
          </h2>
          <p className="text-white/50 text-base sm:text-lg mt-4 max-w-xl">
            Восстанавливаю старые, повреждённые и выцветшие снимки. Семейные архивы, детские фотографии — всё, что дорого вам.
          </p>
        </div>

        {/* Before / After pairs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {restorationPairs.map((pair, i) => (
            <div key={i} className="space-y-2">
              <p className="text-white/40 text-xs uppercase tracking-widest pl-1">{pair.label}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={pair.before}
                    alt={`Оригинал ${i + 1}`}
                    className="w-full h-60 sm:h-72 lg:h-80 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-black/50 backdrop-blur-sm border border-white/20 text-white/70 text-xs px-3 py-1.5 rounded-full">Оригинал</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-orange-500/30">
                  <img
                    src={pair.after}
                    alt={`Результат ${i + 1}`}
                    className="w-full h-60 sm:h-72 lg:h-80 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-orange-500/80 backdrop-blur-sm border border-orange-400/40 text-white text-xs px-3 py-1.5 rounded-full">Результат</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-xl mt-0.5">{f.icon}</span>
              <p className="text-white/60 text-sm leading-snug">{f.text}</p>
            </div>
          ))}
        </div>

        <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-base font-semibold flex items-center gap-2 border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
          Заказать реставрацию
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
    </section>
  )
}
