import { useRouter } from "next/router";
import products from "../../data/products";
import ProductHero from "../../components/ProductHero";
import TrustBadges from "../../components/TrustBadges";
import ResearchStats from "../../components/ResearchStats";
import COASection from "../../components/COASection";
import MechanismSection from "../../components/MechanismSection";
import ResearchInsights from "../../components/ResearchInsights";
import BeyondRejuvenation from "../../components/BeyondRejuvenation";
import CompoundInformation from "../../components/CompoundInformation";
import FinalCTA from "../../components/FinalCTA";
import SafetyProfileSection from "../../components/SafetyProfileSection";
import ResearchFAQ from "../../components/ResearchFAQ";
import SourcesReferences from "@/components/SourcesReferences";
import ResearchNotice from "@/components/ResearchNotice";


import AnimatedProgressBar from "@/components/AnimatedProgressBar";

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <>
      <ProductHero product={product} />

      <TrustBadges />
      <COASection />
      <ResearchStats />
      {/* <MechanismSection /> */}
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
      {/* <ResearchInsights /> */}
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
      <BeyondRejuvenation />
      <SafetyProfileSection />
      <CompoundInformation />
      <ResearchFAQ />
      <SourcesReferences />
      <ResearchNotice />
      <FinalCTA />
    </>
  );
}