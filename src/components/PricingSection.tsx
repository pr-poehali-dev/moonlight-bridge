import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const plans = [
  {
    icon: "🖼️",
    title: "Реставрация фото",
    price: "70",
    unit: "₽ / фото",
    description: "Убираю дефекты, восстанавливаю цвет и чёткость одного снимка.",
    features: [
      "Удаление царапин и трещин",
      "Восстановление цвета",
      "Повышение резкости",
      "Готово за 1–2 дня",
    ],
    cta: "Заказать реставрацию",
    highlight: false,
  },
  {
    icon: "✨",
    title: "Оживление фото",
    price: "890",
    unit: "₽ / от 10 фото",
    description: "Добавляю мимику, моргание и лёгкое движение — люди на снимках оживают.",
    features: [
      "От 10 фотографий в заказе",
      "Анимация лица и мимики",
      "Формат видеофайла",
      "Готово за 2–3 дня",
    ],
    cta: "Заказать оживление",
    highlight: true,
  },
  {
    icon: "🎬",
    title: "Создание видео",
    price: "от 1 000",
    unit: "₽",
    description: "Собираю из ваших фото атмосферный видеоролик или семейную хронику.",
    features: [
      "Слайдшоу с переходами",
      "Эффект параллакса",
      "Музыкальное оформление",
      "Сдача в течение 3–5 дней",
    ],
    cta: "Заказать видео",
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 bg-black px-6 sm:px-12 lg:px-20 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 text-xs">✦ Цены</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Понятные цены
          </h2>
          <p className="text-white/50 text-base sm:text-lg mt-4 max-w-xl">
            Никаких скрытых платежей. Платите только за результат.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-orange-500/15 to-orange-500/5 border border-orange-500/40"
                  : "bg-white/5 border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    Популярное
                  </span>
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-5">
                <span className="text-2xl">{plan.icon}</span>
              </div>

              <h3 className="text-white font-semibold text-lg mb-1">{plan.title}</h3>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">{plan.description}</p>

              <div className="mb-6">
                <span className="text-white text-4xl font-bold">{plan.price}</span>
                <span className="text-white/40 text-sm ml-2">{plan.unit}</span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-white/60 text-sm">
                    <span className="w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-400 text-[9px]">✓</span>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`group relative w-full rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
