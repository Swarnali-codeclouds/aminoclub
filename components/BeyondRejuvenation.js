import KeyBenefitStats from "./KeyBenefitStats";
import DetailedBenefits from "./DetailedBenefits";

export default function BeyondRejuvenation() {
  return (
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
        <KeyBenefitStats />

        {/* Detailed Cards */}
        <DetailedBenefits />
      </div>
    </section>
  );
}