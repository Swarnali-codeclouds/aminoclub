export default function DetailedBenefits() {
  return (
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