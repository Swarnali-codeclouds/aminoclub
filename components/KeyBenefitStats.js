export default function KeyBenefitStats() {
  return (
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
          <ExternalIcon />
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
  );
}

/* Reusable Icon */
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