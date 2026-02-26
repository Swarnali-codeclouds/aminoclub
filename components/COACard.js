import PropTypes from "prop-types";

export default function COACard({
  tag,
  purity,
  variant,
  lot,
  labeled,
  actual,
  tested,
}) {
  return (
    <div className="relative font-anek flex-shrink-0 w-[260px] sm:w-[280px] snap-start rounded-2xl p-5 flex flex-col bg-white border border-[#e2e8f0]
      shadow-[0px_4px_12px_0px_rgba(151,201,143,0.1)]
      hover:-translate-y-0.5 hover:shadow-[0px_8px_24px_0px_rgba(151,201,143,0.2)] hover:border-[#000000]
      transition-all duration-300">

      {/* Tag */}
      {tag && (
        <div className="mb-3 min-h-[20px]">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#131315] text-white">
            {tag}
          </span>
        </div>
      )}

      {/* Purity */}
      <div className="text-center mb-4">
        <p className="text-3xl font-bold text-[#16a34a] leading-none">
          {purity}
        </p>
        <p className="text-xs font-semibold text-[#5a5a5a] uppercase tracking-wider mt-1.5">
          Purity
        </p>
      </div>

      {/* Details */}
      <div className="bg-[#fafafa] rounded-xl p-3 mb-3 space-y-1">
        <Row label="Variant" value={variant} />
        <Row label="Lot #" value={lot} mono />
        <Row label="Labeled" value={labeled} />
        <Row label="Actual" value={actual} highlight />
        <Row label="Tested" value={tested} />
      </div>

      {/* Button */}
      <button className="mt-auto w-full h-10 rounded-xl bg-[#131315] text-white text-sm font-medium font-poppins
        hover:bg-[#2a2a2d] transition-colors flex items-center justify-center gap-2">
        View COA
      </button>
    </div>
  );
}

/* ---------------- Row Component ---------------- */

function Row({ label, value, mono, highlight }) {
  return (
    <div className="flex items-baseline justify-between py-1">
      <span className="text-xs text-[#5a5a5a]">{label}</span>
      <span
        className={`text-xs font-medium ${
          mono ? "font-mono" : ""
        } ${highlight ? "text-[#16a34a]" : "text-[#131315]"}`}
      >
        {value}
      </span>
    </div>
  );
}

/* ---------------- PropTypes ---------------- */

COACard.propTypes = {
  tag: PropTypes.string,
  purity: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  lot: PropTypes.string.isRequired,
  labeled: PropTypes.string.isRequired,
  actual: PropTypes.string.isRequired,
  tested: PropTypes.string.isRequired,
};

Row.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  mono: PropTypes.bool,
  highlight: PropTypes.bool,
};