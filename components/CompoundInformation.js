export default function CompoundInformation() {
  return (
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
  );
}