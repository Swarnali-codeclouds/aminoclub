export default function MechanismSection() {
  return (
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
  );
}