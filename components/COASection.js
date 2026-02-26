import COACard from "./COACard";

const coaData = [
  {
    tag: "Latest",
    purity: "99.76%",
    variant: "GHK-Cu 50mg",
    lot: "B1111",
    labeled: "50mg",
    actual: "59.26mg",
    tested: "Feb 4, 2026",
  },
  {
    tag: "Latest",
    purity: "99.54%",
    variant: "GHK-Cu 100mg",
    lot: "B0111",
    labeled: "100mg",
    actual: "107.58mg",
    tested: "Feb 4, 2026",
  },
];

export default function COASection() {
  return (
    <section className="py-6">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 sm:overflow-visible">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e9fce6] flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-[#16a34a]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
                <path d="M6.453 15h11.094" />
                <path d="M8.5 2h7" />
              </svg>
            </div>

            <div>
              <h2 className="text-lg lg:text-xl font-semibold text-[#131315]">
                Certificate of Analysis
              </h2>
              <p className="text-xs lg:text-sm text-[#5a5a5a]">
                Third Party Tested by Freedom Diagnostics
              </p>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2">
          <div className="shrink-0 w-1" />

          {coaData.map((item, index) => (
            <COACard key={index} {...item} />
          ))}

          <div className="shrink-0 w-1" />
        </div>
      </div>
    </section>
  );
}