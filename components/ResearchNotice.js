export default function ResearchNotice() {
  return (
    <section className="py-8 lg:py-12">
      <div className="content-container">
        <div className="bg-gradient-to-br from-white to-[#fef8f8] border-2 border-[#ffe5e5] rounded-3xl p-6 lg:p-9">
          <h2 className="text-sm font-bold text-[#ba5a5a] uppercase tracking-wide mb-4 flex items-center gap-3">
            <span className="text-lg" aria-hidden="true">⚠️</span>
            Important Research Notice
          </h2>

          <div className="space-y-3 text-sm text-[#555] leading-relaxed">
            <p>
              <strong className="text-[#1a1a1a]">
                Not for human consumption.
              </strong>{" "}
              This product is sold exclusively for research and educational
              purposes. It is not intended to diagnose, treat, cure, or prevent
              any disease.
            </p>

            <p>
              All clinical trial data and research findings presented on this
              page are sourced from peer-reviewed journals and official
              publications. They are provided for educational reference only and
              should not be interpreted as medical advice or product claims.
            </p>

            <p>
              By purchasing this product, you confirm that you are a qualified
              researcher and will use it in accordance with all applicable laws
              and regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}