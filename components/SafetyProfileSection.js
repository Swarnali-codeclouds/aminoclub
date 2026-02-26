export default function SafetyProfileContent() {
  return (
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
  );
}