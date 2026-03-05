import AnimatedProgressBar from "@/components/AnimatedProgressBar";

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
export default function ProductDetails() {
  return (
    <>
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
     <section
        className="py-6 lg:py-8"
        aria-labelledby="mechanism-heading"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-5 lg:mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-xl shrink-0">
                🧬
              </div>
              <h2
                id="mechanism-heading"
                className="text-2xl lg:text-3xl font-semibold text-[#131315] tracking-tight"
              >
                How GHK-Cu Works
              </h2>
            </div>
          </header>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            {/* Left card */}
            <article className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e4e4e7]">
              <div className="text-xs font-semibold text-[#5a5a5a] uppercase tracking-wider mb-2">
                The Science, Simplified
              </div>

              <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-2">
                Multi-Pathway Regeneration
              </h3>

              <p className="text-sm text-[#4a5568] leading-relaxed mb-6">
                GHK-Cu is a naturally occurring tripeptide that binds with copper to
                form a regenerative complex. It acts as an injury signal, activating
                genes involved in tissue repair, inflammation control, and cellular
                protection.
              </p>

              {/* Pathways */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
                {/* Gene Expression */}
                <div className="text-center flex-1 max-w-[180px]">
                  <div
                    className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "conic-gradient(#718096 0% 75%, #e4e4e7 75% 100%)",
                      padding: "3px",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                      <span className="font-bold text-[#718096]">GE</span>
                      <span className="text-xs font-semibold text-[#5a5a5a]">
                        Primary
                      </span>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-[#131315]">
                    Gene Expression
                  </h4>
                  <p className="text-xs text-[#5a5a5a]">
                    Epigenetic modulation
                  </p>
                </div>

                {/* Collagen */}
                <div className="text-center flex-1 max-w-[180px]">
                  <div
                    className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "conic-gradient(#16a34a 0% 95%, #e4e4e7 95% 100%)",
                      padding: "3px",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                      <span className="font-bold text-[#16a34a]">COL</span>
                      <span className="text-xs font-semibold text-[#5a5a5a]">
                        Strongest
                      </span>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-[#131315]">
                    Collagen Pathway
                  </h4>
                  <p className="text-xs text-[#5a5a5a]">
                    ECM synthesis
                  </p>
                </div>

                {/* Copper */}
                <div className="text-center flex-1 max-w-[180px]">
                  <div
                    className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "conic-gradient(#16a34a 0% 85%, #e4e4e7 85% 100%)",
                      padding: "3px",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                      <span className="font-bold text-[#16a34a]">Cu²⁺</span>
                      <span className="text-xs font-semibold text-[#5a5a5a]">
                        Supportive
                      </span>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-[#131315]">
                    Copper Delivery
                  </h4>
                  <p className="text-xs text-[#5a5a5a]">
                    Ion transport
                  </p>
                </div>
              </div>

              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#a0aec0] hover:text-[#5a5a5a]"
              >
                Pickart &amp; Margolina, Int J Mol Sci 2018
              </a>
            </article>

            {/* Right card */}
            <article className="rounded-2xl p-6 lg:p-8 bg-[#131315] text-white flex flex-col">
              <div className="text-xs uppercase tracking-wider text-white/50 mb-2">
                Key Discovery
              </div>

              <h3 className="text-lg lg:text-xl font-semibold mb-2">
                Unprecedented Gene Influence
              </h3>

              <p className="text-sm text-white/70 mb-5">
                GHK-Cu affects more human genes than any other studied peptide —
                modulating over 30% of the genome.
              </p>

              <div className="bg-white/[0.06] rounded-xl p-4 mb-5">
                <p className="text-sm text-white/85">
                  <strong className="text-white">Research finding:</strong>{" "}
                  Increased expression of 1,942 genes and suppressed 762 genes.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Genes Upregulated</span>
                  <span className="text-[#16a34a] font-semibold">1,942</span>
                </div>
                <div className="flex justify-between text-sm text-white/60">
                  <span>Genes Downregulated</span>
                  <span>762</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>DNA Repair Genes</span>
                  <span className="text-[#16a34a]">↑ 47</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        className="py-6 lg:py-8"
        aria-labelledby="trial-results-heading"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 font-anek">
          {/* Header */}
          <header className="mb-5 lg:mb-6">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-xl font-poppins shrink-0"
                aria-hidden="true"
              >
                📊
              </div>
              <div className="flex-1 min-w-0">
                <h2
                  id="trial-results-heading"
                  className="text-2xl lg:text-3xl font-semibold text-[#131315] tracking-tight"
                >
                  What Research Has Shown
                </h2>
                <p className="text-sm lg:text-base text-[#5a5a5a] mt-1">
                  Summary of clinical and preclinical findings
                </p>
              </div>
            </div>
          </header>

          {/* Grid 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* LEFT CARD */}
            <article className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e4e4e7]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#f4f4f5] text-[#4a5568] mb-4">
                <span aria-hidden="true">📋</span>
                <span>12-Week Facial Study — 71 Women</span>
              </span>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-6xl font-bold text-[#131315] leading-none tracking-tight">
                    55.8
                  </span>
                  <span className="text-2xl font-medium text-[#5a5a5a]">%</span>
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#5a5a5a] mt-2">
                  Wrinkle Volume Reduction
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-[#131315] mb-4">
                  Wrinkle Reduction Comparison
                </h4>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#131315]">
                        GHK-Cu vs Control
                      </span>
                      <span className="text-sm font-semibold text-[#16a34a]">
                        -55.8%
                      </span>
                    </div>
                    <AnimatedProgressBar value={55.8} color="green-500" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#4a5568]">
                        GHK-Cu vs Matrixyl®
                      </span>
                      <span className="text-sm font-semibold text-[#131315]">
                        -31.6%
                      </span>
                    </div>
                    <AnimatedProgressBar value={31.6} color="gray" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#4a5568]">
                        Placebo
                      </span>
                      <span className="text-sm font-semibold text-[#131315]">
                        -0%
                      </span>
                    </div>
                    <AnimatedProgressBar value={0} color="gray" />
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-4 bg-[#fafafa] border border-[#e4e4e7] mt-6">
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  <strong className="text-[#131315]">Trial details:</strong> 71 women
                  with mild to advanced photoaging applied GHK-Cu facial cream twice
                  daily for 12 weeks. Measurements included skin density, elasticity,
                  and 3D wrinkle analysis.
                </p>
              </div>
            </article>

            {/* RIGHT CARD */}
            <article className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7] flex flex-col">
              <div className="mb-2">
                <div className="text-xs font-medium uppercase tracking-wider text-[#5a5a5a] mb-1 flex items-center gap-1.5">
                  <span aria-hidden="true">📈</span>
                  <span>Clinical Outcomes</span>
                </div>
                <h3 className="text-lg font-semibold text-[#131315]">
                  Key Trial Results
                </h3>
              </div>

              <p className="text-sm text-[#4a5568] mb-4">
                Objective measurements from clinical studies
              </p>

              <div className="space-y-3 flex-1">
                <div className="pb-3 border-b border-[#e4e4e7]">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#131315]">70%</span>
                      <span className="text-sm text-[#5a5a5a]">
                        Research Participants
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#131315]">
                      Improved collagen production
                    </span>
                  </div>
                  <AnimatedProgressBar value={70} color="green" />
                </div>

                <div className="pb-3 border-b border-[#e4e4e7]">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#131315]">55.8%</span>
                      <span className="text-sm text-[#5a5a5a]">
                        Research Participants
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#131315]">
                      Wrinkle volume reduction
                    </span>
                  </div>
                  <AnimatedProgressBar value={55.8} color="green" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#131315]">35.5%</span>
                      <span className="text-sm text-[#5a5a5a]">
                        Research Participants
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#131315]">
                      Wrinkle depth decrease
                    </span>
                  </div>
                  <AnimatedProgressBar value={35.5} color="green" />
                </div>
              </div>

              <div className="rounded-xl p-4 bg-[#fafafa] border border-[#e4e4e7] mt-4">
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  💡 <strong className="text-[#131315]">Note:</strong> Results
                  measured using 3D skin topography analysis and ultrasound imaging.
                </p>
              </div>
            </article>
          </div>

          {/* Grid 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* COLLAGEN COMPARISON */}
            <article className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e4e4e7]">
              <div className="mb-6">
                <div className="text-xs font-medium uppercase tracking-wider text-[#5a5a5a] mb-1 flex items-center gap-1.5">
                  <span aria-hidden="true">⚖️</span>
                  <span>Comparison</span>
                </div>
                <h3 className="text-lg font-semibold text-[#131315]">
                  Collagen Stimulation Comparison
                </h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#131315]">GHK-Cu</span>
                    <span className="text-sm font-semibold text-[#16a34a]">70%</span>
                  </div>
                  <AnimatedProgressBar value={70} color="green-500" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#4a5568]">Vitamin C</span>
                    <span className="text-sm font-semibold text-[#131315]">50%</span>
                  </div>
                  <AnimatedProgressBar value={50} color="black" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#4a5568]">Retinoic Acid</span>
                    <span className="text-sm font-semibold text-[#131315]">40%</span>
                  </div>
                  <AnimatedProgressBar value={40} color="black" />
                </div>
              </div>

              <div className="rounded-xl p-4 bg-[#fafafa] border border-[#e4e4e7] mt-6">
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  ⚠️ <strong className="text-[#131315]">Note:</strong> Based on thigh
                  skin biopsy studies measuring collagen production after 1 month of
                  treatment.
                </p>
              </div>
            </article>

            {/* AGE DECLINE */}
            <article className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e4e4e7]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#f4f4f5] text-[#4a5568] mb-4">
                <span aria-hidden="true">📋</span>
                <span>Plasma Concentration Studies</span>
              </span>

              <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-1">
                Age-Related Decline in Natural GHK Levels
              </h3>
              <p className="text-sm text-[#4a5568] mb-6">
                Natural GHK-Cu levels decrease significantly with age
              </p>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-[#131315]">Age 20</span>
                      <span className="block text-xs text-[#5a5a5a]">Peak levels</span>
                    </div>
                    <span className="text-sm font-semibold text-[#16a34a]">-200 ng/mL</span>
                  </div>
                  <AnimatedProgressBar value={100} color="green-500" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-[#4a5568]">Age 40</span>
                      <span className="block text-xs text-[#5a5a5a]">30% decline</span>
                    </div>
                    <span className="text-sm font-semibold text-[#131315]">-140 ng/mL</span>
                  </div>
                  <AnimatedProgressBar value={70} color="gray-500" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-[#4a5568]">Age 60</span>
                      <span className="block text-xs text-[#5a5a5a]">60% decline</span>
                    </div>
                    <span className="text-sm font-semibold text-[#131315]">-80 ng/mL</span>
                  </div>
                  <AnimatedProgressBar value={40} color="gray-500" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-[#4a5568]">Age 80</span>
                      <span className="block text-xs text-[#5a5a5a]">80% decline</span>
                    </div>
                    <span className="text-sm font-semibold text-[#131315]">-40 ng/mL</span>
                  </div>
                  <AnimatedProgressBar value={20} color="gray-500" />
                </div>
              </div>

              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-xs text-[#a0aec0] hover:text-[#5a5a5a]"
              >
                <span>🔗 Pickart & Margolina 2018</span>
              </a>
            </article>
          </div>
        </div>
      </section>
      <section
      className="py-6 lg:py-8 font-anek"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-5 lg:mb-6">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-xl shrink-0"
              aria-hidden="true"
            >
              ✨
            </div>
            <div className="flex-1 min-w-0">
              <h2
                id="benefits-heading"
                className="text-2xl lg:text-3xl font-semibold text-[#131315] tracking-tight"
              >
                Beyond Skin Rejuvenation
              </h2>
              <p className="text-sm lg:text-base text-[#5a5a5a] mt-1">
                Other benefits observed in research
              </p>
            </div>
          </div>
        </header>

        {/* Top Stats */}
         <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
      role="list"
      aria-label="Key benefit statistics"
    >
      {/* Hair */}
      <article
        className="rounded-2xl p-5 border border-[#e4e4e7] bg-[#f0fdf4]"
        role="listitem"
      >
        <div className="text-2xl lg:text-3xl font-bold tracking-tight text-[#131315]">
          Hair
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mt-2">
          Growth
        </div>
        <p className="text-sm text-[#4a5568] mt-3">
          30–50% follicle size increase
        </p>

        <a
          href="https://www.scantifix.com/blogs/news/ghk-cu-peptide-benefits"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-[#a0aec0] hover:text-[#5a5a5a] transition-colors"
        >
          <ExternalIcon />
          <span>Hair Growth Studies</span>
        </a>
      </article>

      {/* Wound */}
      <article
        className="rounded-2xl p-5 border border-[#e4e4e7] bg-[#fafafa]"
        role="listitem"
      >
        <div className="text-2xl lg:text-3xl font-bold tracking-tight text-[#131315]">
          Wound
        </div>

        <div className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mt-2">
          Healing
        </div>

        <p className="text-sm text-[#4a5568] mt-3">
          Enhanced diabetic ulcer healing
        </p>

        <a
          href="https://www.sciencedirect.com/science/article/pii/S0022202X1541067X"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-[#a0aec0] hover:text-[#5a5a5a] transition-colors"
        >
          <ExternalIcon />
          <span>Mulder et al. 1994</span>
        </a>
      </article>

      {/* DNA */}
      <article
        className="rounded-2xl p-5 border border-[#e4e4e7] bg-[#fafafa]"
        role="listitem"
      >
        <div className="text-2xl lg:text-3xl font-bold tracking-tight text-[#131315]">
          47
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mt-2">
          DNA Repair Genes
        </div>
        <p className="text-sm text-[#4a5568] mt-3">
          Activated for cellular protection
        </p>

        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-[#a0aec0] hover:text-[#5a5a5a] transition-colors"
        >
          <ExternalIconOne />
          <span>Gene Expression Study</span>
        </a>
      </article>

      {/* Anti-inflammatory */}
      <article
        className="rounded-2xl p-5 border border-[#e4e4e7] bg-[#fafafa]"
        role="listitem"
      >
        <div className="text-2xl lg:text-3xl font-bold tracking-tight text-[#131315]">
          Anti
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mt-2">
          Inflammatory
        </div>
        <p className="text-sm text-[#4a5568] mt-3">
          Reduced TNF-α and IL-6
        </p>

        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-[#a0aec0] hover:text-[#5a5a5a] transition-colors"
        >
          <ExternalIcon />
          <span>Campbell et al. 2012</span>
        </a>
      </article>
    </div>

        {/* Detailed Cards */}
      <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Detailed benefit information"
    >
      {/* Hair Restoration */}
      <article
        className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7]"
        role="listitem"
      >
        <Header icon="💇" label="Hair Restoration" />

        <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-2">
          Follicle Regeneration
        </h3>

        <p className="text-sm text-[#4a5568] mb-5">
          Research shows GHK-Cu significantly improves hair growth parameters
        </p>

        <Progress label="Follicle size increase" value={40} />
        <Progress label="Growth rate improvement" value={35} />
        <Progress label="Anagen phase extension" value={30} />

        <Note bg="bg-[#eff6ff]" border="border-[#bfdbfe]">
          <strong>Study finding:</strong> GHK-Cu increased hair follicle size by
          30–50% compared to placebo.
        </Note>

        <SourceLink
          href="https://www.scantifix.com/blogs/news/ghk-cu-peptide-benefits"
          label="Hair Growth Research"
        />
      </article>

      {/* Wound Healing */}
      <article
        className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7]"
        role="listitem"
      >
        <Header icon="🩹" label="Wound Healing" />

        <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-2">
          Tissue Repair Acceleration
        </h3>

        <p className="text-sm text-[#4a5568] mb-5">
          Multiple pathways contribute to enhanced healing
        </p>

        <TableRow label="Angiogenesis" value="↑ Enhanced" />
        <TableRow label="Fibroblast migration" value="↑ 70% faster" />
        <TableRow label="Collagen deposition" value="↑ Increased" />
        <TableRow label="Inflammatory response" value="↓ Reduced" last />

        <Note bg="bg-[#f0fdf4]" border="border-[#bbf7d0]">
          <strong>Clinical evidence:</strong> Diabetic ulcer patients showed
          significantly improved healing with topical GHK-Cu treatment.
        </Note>

        <SourceLink
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/"
          label="Wound Healing Studies"
        />
      </article>

      {/* Gene Modulation */}
      <article
        className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7]"
        role="listitem"
      >
        <Header icon="🧬" label="Gene Modulation" />

        <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-2">
          Epigenetic Reprogramming
        </h3>

        <p className="text-sm text-[#4a5568] mb-5">
          GHK-Cu acts as a master regulator of cellular health
        </p>

        <div className="mb-5">
          <div className="text-2xl lg:text-3xl font-bold text-[#16a34a]">
            4,000+
          </div>
          <p className="text-sm text-[#5a5a5a]">Genes Affected</p>
        </div>

        <Note bg="bg-[#eff6ff]" border="border-[#bfdbfe]">
          <strong>Key insight:</strong> GHK-Cu shifts gene expression from tissue
          destruction to tissue repair.
        </Note>

        <SourceLink
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/"
          label="Gene Expression Analysis"
        />
      </article>

      {/* Antioxidant Defense */}
      <article
        className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7]"
        role="listitem"
      >
        <Header icon="🛡️" label="Antioxidant Defense" />

        <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-2">
          Cellular Protection
        </h3>

        <p className="text-sm text-[#4a5568] mb-5">
          Multiple mechanisms combat oxidative stress
        </p>

        <TableRow label="SOD activity" value="↑ Increased" />
        <TableRow label="Catalase expression" value="↑ Enhanced" />
        <TableRow label="Free radical scavenging" value="↑ Improved" />
        <TableRow label="Lipid peroxidation" value="↓ 38%" last />

        <SourceLink
          href="https://www.mdpi.com/2079-9284/2/3/236"
          label="Antioxidant Studies"
        />
      </article>
    </div>
      </div>
    </section>
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 font-anek">
      {/* Header */}
      <header className="mb-5 lg:mb-6">
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-xl font-poppins shrink-0"
            aria-hidden="true"
          >
            ⚠️
          </div>
          <div className="flex-1 min-w-0">
            <h2
              id="side-effects-heading"
              className="text-2xl lg:text-3xl font-semibold text-[#131315] tracking-tight"
            >
              Safety Profile from Research
            </h2>
            <p className="text-sm lg:text-base text-[#5a5a5a] mt-1">
              What clinical studies report
            </p>
          </div>
        </div>
      </header>

      <p className="text-sm lg:text-base text-[#4a5568] leading-relaxed mb-6 max-w-2xl">
        GHK-Cu has demonstrated an excellent safety profile across multiple
        studies with minimal adverse effects
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Common Side Effects */}
        <article className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7]">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mb-4 flex items-center gap-1.5">
            <span aria-hidden="true">🤢</span>
            <span>Common Digestive Issues</span>
          </div>

          <div
            className="grid grid-cols-2 gap-4"
            role="list"
            aria-label="Common side effects"
          >
            {[
              { label: "Injection site irritation", value: 5, delay: 0 },
              { label: "Skin redness (topical)", value: 3, delay: 50 },
              { label: "Itching", value: 2, delay: 100 },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#fafafa] border border-[#e4e4e7] rounded-xl p-4 transition-all duration-500 opacity-100 translate-y-0"
                role="listitem"
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  role="img"
                  aria-label={`${item.value}% occurrence rate`}
                  style={{
                    background: `conic-gradient(rgb(22,163,74) 0%, rgb(22,163,74) ${item.value}%, rgb(228,228,231) ${item.value}%, rgb(228,228,231) 100%)`,
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm lg:text-base font-bold text-[#131315] tabular-nums">
                      {item.value}%
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-[#131315] text-center mb-2">
                  {item.label}
                </h4>

                <div className="flex justify-center">
                  <span
                    className="text-xs font-semibold uppercase px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(22,163,74,0.082)",
                      color: "rgb(22,163,74)",
                    }}
                  >
                    mild
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Theoretical Concern */}
        <article className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7]">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c] mb-2 flex items-center gap-1.5">
            <span aria-hidden="true">⚠️</span>
            <span>Theoretical Concern</span>
          </div>

          <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-4 leading-tight">
            Copper Accumulation Risk
          </h3>

          <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
            Copper toxicity is theoretically possible with extreme overuse but
            has not been reported in clinical studies
          </p>

          <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-lg p-3">
            <ul className="space-y-1.5">
              {[
                "Normal therapeutic doses well below toxic threshold",
                "Body has efficient copper regulation mechanisms",
                "No cases reported in published literature at research doses",
              ].map((text) => (
                <li
                  key={text}
                  className="text-sm text-[#4a5568] flex gap-2"
                >
                  <span className="text-[#ea580c]">•</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Discontinuation Rates */}
      <article className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7]">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mb-2 flex items-center gap-1.5">
          <span aria-hidden="true">📊</span>
          <span>Discontinuation Rates</span>
        </div>

        <h3 className="text-lg lg:text-xl font-semibold text-[#131315] mb-5 leading-tight">
          Treatment Discontinuation Rates
        </h3>

        <div
          className="space-y-0 bg-[#fafafa] border border-[#e4e4e7] rounded-xl p-4"
          role="table"
          aria-label="Discontinuation rates by dose"
        >
          <div
            className="flex justify-between items-center py-3 border-b border-[#e4e4e7]"
            role="row"
          >
            <span className="text-sm font-semibold text-[#131315]" role="cell">
              Topical 2–4%
            </span>
            <span
              className="text-sm font-semibold tabular-nums text-[#ea580c]"
              role="cell"
            >
              &lt;1%
            </span>
          </div>

          <div
            className="flex justify-between items-center py-3"
            role="row"
          >
            <span className="text-sm text-[#4a5568]" role="cell">
              Injectable 1–2mg
            </span>
            <span
              className="text-sm font-semibold tabular-nums text-[#131315]"
              role="cell"
            >
              2%
            </span>
          </div>
        </div>

        <div
          className="mt-4 p-4 bg-[#eff6ff] border border-[#bfdbfe] rounded-xl"
          role="note"
        >
          <p className="text-sm text-[#4a5568]">
            <span aria-hidden="true">💡</span>{" "}
            Extremely low discontinuation rates across all studies
          </p>
          <p className="text-sm text-[#4a5568]">
            <span aria-hidden="true">💡</span>{" "}
            Most discontinuations due to protocol non-compliance, not adverse
            effects
          </p>
        </div>
      </article>

      {/* Trial Exclusions */}
      <div className="space-y-6">
        <article className="bg-white rounded-2xl p-5 lg:p-6 border border-[#e4e4e7]">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mb-2 flex items-center gap-1.5">
            <span aria-hidden="true">🚫</span>
            <span>Trial Exclusions</span>
          </div>

          <h3 className="text-sm lg:text-base font-semibold text-[#131315] mb-4">
            Study Exclusion Criteria
          </h3>

          <div
            className="flex flex-wrap gap-2"
            role="list"
            aria-label="Excluded conditions"
          >
            {[
              "Wilson's disease (copper metabolism disorder)",
              "Known copper allergy",
              "Active skin infections at application site",
              "Pregnancy or breastfeeding (not studied)",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 bg-[#f4f4f5] rounded-lg text-sm text-[#4a5568] font-medium"
                role="listitem"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
      </div>


      {/* Researcher Notes */}
      <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-5 lg:p-6">
        <h4 className="text-sm font-semibold text-[#131315] mb-3 flex items-center gap-2">
          <span aria-hidden="true">💡</span>
          <span>Researcher Notes</span>
        </h4>

        <ul className="space-y-2">
          {[
            "No serious adverse events reported in any published clinical trial",
            "Safety profile comparable to or better than standard cosmetic ingredients",
            "Long history of safe use in cosmetic formulations since 1980s",
          ].map((note) => (
            <li
              key={note}
              className="text-sm text-[#4a5568] leading-relaxed flex gap-2"
            >
              <span className="text-[#2563eb]">•</span>
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <section
      className="py-6 lg:py-8 font-anek"
      aria-labelledby="compound-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-5 lg:mb-6">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-xl shrink-0"
              aria-hidden="true"
            >
              🧪
            </div>
            <div className="flex-1 min-w-0">
              <h2
                id="compound-heading"
                className="text-2xl lg:text-3xl font-semibold text-[#131315] tracking-tight"
              >
                Compound Information
              </h2>
              <p className="text-sm lg:text-base text-[#5a5a5a] mt-1">
                Technical specifications
              </p>
            </div>
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Molecular Profile */}
          <article className="rounded-2xl p-5 lg:p-6 bg-white border border-[#e4e4e7]">
            <div className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 text-[#5a5a5a]">
              <span aria-hidden="true">🔬</span>
              <span>Molecular Profile</span>
            </div>

            <h3 className="text-lg lg:text-xl font-semibold mb-3 text-[#131315]">
              What Is GHK-Cu?
            </h3>

            <div className="rounded-xl p-4 bg-[#fafafa] border border-[#e4e4e7] space-y-0">
              {[
                ["Type", "Copper-peptide complex"],
                ["CAS Number", "89030-95-5"],
                ["Molecular Weight", "340.38 g/mol (free peptide)"],
                ["Molecular Weight (Cu)", "401.91 g/mol (with copper)"],
                ["Amino Acids", "3 (tripeptide)"],
                ["Sequence", "Gly-His-Lys"],
                ["Formula", "C₁₄H₂₄N₆O₄·Cu"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-3 ${
                    i !== 6 ? "border-b border-[#e4e4e7]" : ""
                  }`}
                >
                  <span className="text-sm text-[#4a5568]">{label}</span>
                  <span className="text-sm font-semibold text-[#131315]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://pubchem.ncbi.nlm.nih.gov/compound/Copper-tripeptide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-xs text-[#a0aec0] hover:text-[#5a5a5a]"
            >
              ↗ PubChem Database
            </a>
          </article>

          {/* Storage Requirements */}
          <article className="rounded-2xl p-5 lg:p-6 bg-white border border-[#e4e4e7]">
            <div className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 text-[#5a5a5a]">
              <span aria-hidden="true">🧊</span>
              <span>Storage Requirements</span>
            </div>

            <h3 className="text-lg lg:text-xl font-semibold mb-3 text-[#131315]">
              Stability Information
            </h3>

            <div className="flex flex-wrap gap-2 mb-5">
              {[
                "Protect from light",
                "Avoid repeated freeze-thaw",
                "Blue color indicates copper binding",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[#f3f4f6] text-[#4b5563]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              {[
                ["❄️", "Lyophilized (powder)", "-20°C", "up to 2 years"],
                ["💉", "Reconstituted", "2–8°C", "up to 30 days"],
                ["💉", "Working solution", "Use within 24 hours", ""],
              ].map(([icon, title, temp, note], i) => (
                <div
                  key={i}
                  className="bg-[#fafafa] border border-[#e4e4e7] rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-[#dcfce7] rounded-xl flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#4a5568]">
                      {title}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-semibold text-[#131315]">
                        {temp}
                      </span>
                      {note && (
                        <>
                          <span>•</span>
                          <span className="text-sm text-[#4a5568]">
                            {note}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Research Status */}
          <article className="rounded-2xl p-5 lg:p-6 bg-[#131315] text-white">
            <div className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 text-white/50">
              <span aria-hidden="true">📋</span>
              <span>Research Status</span>
            </div>

            <h3 className="text-lg lg:text-xl font-semibold mb-3">
              Where It Stands
            </h3>

            <div className="flex flex-wrap gap-2 mb-5">
              {[
                "Naturally Occurring",
                "Discovered 1973",
                "4000+ Publications",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-sm bg-white/10 text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="rounded-xl p-4 bg-white/[0.06] space-y-0">
              {[
                ["Origin", "Human plasma"],
                ["Primary research", "Regenerative medicine"],
                ["Clinical studies", "50+ published"],
                ["Commercial use", "Cosmetics since 1980s"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-3 ${
                    i !== 3 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="text-sm text-white/60">{label}</span>
                  <span className="text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-xs text-white/40 hover:text-white/60"
            >
              ↗ Research Overview
            </a>
          </article>
        </div>
      </div>
    </section>
      </>
  );
}



/* Reusable Icon */
function ExternalIconOne() {
  return (
    <svg
      className="w-3 h-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ---------- Helpers ---------- */

function Header({ icon, label }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-wider text-[#5a5a5a] mb-2 flex items-center gap-1.5">
      <span aria-hidden>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function Progress({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-[#4a5568]">{label}</span>
        <span className="text-sm font-semibold text-[#16a34a]">
          +{value}%
        </span>
      </div>
      <div className="h-2 bg-[#e4e4e7] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#16a34a] rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function TableRow({ label, value, last }) {
  return (
    <div
      className={`flex justify-between py-3 ${
        last ? "" : "border-b border-[#e4e4e7]"
      }`}
    >
      <span className="text-sm text-[#4a5568]">{label}</span>
      <span className="text-sm font-semibold text-[#131315]">{value}</span>
    </div>
  );
}

function Note({ children, bg, border }) {
  return (
    <div className={`rounded-xl p-4 border ${bg} ${border} my-4`}>
      <p className="text-sm text-[#4a5568] leading-relaxed">{children}</p>
    </div>
  );
}

function SourceLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 mt-3 text-xs text-[#a0aec0] hover:text-[#5a5a5a]"
    >
      <ExternalIcon />
      <span>{label}</span>
    </a>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="w-3 h-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}