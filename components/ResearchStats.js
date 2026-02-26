const stats = [
  {
    icon: "📉",
    iconBg: "bg-[#e9fce6]",
    value: "50",
    suffix: "%",
    title: "Decline by Age 50",
    description: "NAD+ levels decrease with aging",
  },
  {
    icon: "🎯",
    iconBg: "bg-[#cbe5fc]",
    value: "7",
    suffix: "Sirtuins",
    title: "Enzyme Activation",
    description: "SIRT1-7 longevity pathways",
  },
  {
    icon: "🔋",
    iconBg: "bg-[#e8e5ff]",
    value: "500+",
    suffix: "reactions",
    title: "Cellular Processes",
    description: "Essential metabolic cofactor",
  },
  {
    icon: "🧪",
    iconBg: "bg-[#fefeca]",
    value: "1,518",
    suffix: "subjects",
    title: "Clinical Study",
    description: "Large-scale human research",
  },
  {
    icon: "⚡",
    iconBg: "bg-[#ccfbf1]",
    value: "ATP",
    suffix: "production",
    title: "Energy Metabolism",
    description: "Mitochondrial function",
  },
];

export default function ResearchStats() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <section
          aria-label="Key research statistics"
          className="flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5 max-w-[1400px] w-full font-anek">
            {stats.map((item, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[220px]"
              >
                <article
                  className="relative h-full transition-all duration-500 ease-out"
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <div
                    className="
                      bg-white rounded-2xl p-5 h-full
                      border border-[#e2e8f0]
                      shadow-[0px_4px_12px_0px_rgba(151,201,143,0.1)]
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:shadow-[0px_8px_24px_0px_rgba(151,201,143,0.2)]
                      flex flex-col items-center justify-center text-center
                    "
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 mb-3 rounded-xl flex items-center justify-center text-2xl ${item.iconBg}`}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>

                    {/* Value */}
                    <p className="text-2xl lg:text-3xl font-bold text-[#131315] leading-none tracking-tight">
                      {item.value} &nbsp;
                      <span className="text-base lg:text-lg font-medium text-[#5a5a5a] ml-0.5">
                        {item.suffix}
                      </span>
                    </p>

                    {/* Title */}
                    <p className="text-sm font-semibold text-[#5a5a5a] uppercase tracking-wider mt-2">
                      {item.title}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#4a5568] mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}