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