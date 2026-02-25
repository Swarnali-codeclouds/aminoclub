import Image from "next/image";

export default function Quality() {
  return (
  <section
  aria-label="Third-party lab testing and quality assurance"
  className="py-12 lg:py-16 bg-white w-full overflow-x-hidden"
>
  <div className="content-container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="order-2 lg:order-1">
        <h2 className="heading text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight mb-4">
          Quality you can verify, not just trust
        </h2>

        <p className="paragraph text-sm md:text-base lg:text-lg text-[#666] mb-6">
          Every batch is independently tested by accredited U.S. laboratories.
          We don’t ask you to take our word for it—we give you the proof.
        </p>

        {/* STATS */}
        <div className="heading flex flex-wrap gap-6 pb-6 mb-6 border-b border-[#eee]">
          {[
            ["99%+", "Purity Guaranteed"],
            ["5", "Quality Checks"],
            ["100%", "U.S. Verified"],
          ].map(([value, label]) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-xl lg:text-2xl font-bold">{value}</span>
              <span className="text-xs lg:text-sm text-[#555] max-w-[90px] leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* TABS */}
        <div className="relative mb-6">
          <div className="flex gap-2 overflow-x-auto lg:flex-wrap scrollbar-hide">
            {["Potency", "Purity", "Stability", "Safety", "Consistency"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                    tab === "Consistency"
                      ? "bg-black text-white shadow"
                      : "bg-[#f5f5f5] text-[#555] hover:bg-[#eaeaea]"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* PANEL */}
        <div className="relative bg-gradient-to-br from-[#fafafa] to-[#f5f5f5]
          border border-[#eaeaea] rounded-2xl p-5 lg:p-6">
          <h3 className="text-lg font-semibold mb-3">
            Batch-to-Batch Consistency
          </h3>

          <p className="text-sm lg:text-[15px] text-[#555] mb-4">
            Precision weighing and quality controls ensure every batch meets the
            same exacting standards.
          </p>

          <div className="relative bg-white rounded-xl p-4 border border-[#e8e8e8]">
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-green-500 to-green-600" />
            <p className="text-xs lg:text-sm pl-3 text-[#555]">
              <span className="font-semibold text-black">Why it matters: </span>
              Same great quality whether it’s your first order or your fiftieth.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a href="/us/store">
            <button className="bg-black text-white px-6 lg:px-7 h-11 lg:h-12 rounded-full
              hover:bg-[#1a1a1a] transition-all">
              Shop Now →
            </button>
          </a>

          <div className="flex items-center gap-2 text-xs lg:text-sm text-[#555]">
           <svg class="w-4 h-4 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
            Free COA included with every order
          </div>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="order-1 lg:order-2">
        <div className="relative rounded-[28px] lg:rounded-[32px]
          bg-gradient-to-b from-[#f8f9fb] via-[#e8eef5] to-[#cddaeb]
          p-6 lg:p-10 min-h-[280px] lg:min-h-[500px]
          flex items-center justify-center overflow-hidden">

          {/* PRODUCT IMAGE */}
          <img
            src="/images/TB500Desktop.webp"
            alt="Peptide vial"
            className="relative z-10 h-[220px] lg:h-[420px] object-contain"
          />

          {/* FLOATING BADGE */}
          <div className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2.5 lg:px-4 lg:py-3 shadow-lg border border-white/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
            <div className="flex items-center gap-2.5">
    
              <div className="relative flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0]">
                <svg
                  className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-[#16a34a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="leading-none">
                <p className="text-xs lg:text-sm font-semibold text-black">
                  99%+ Purity
                </p>
                <p className="mt-0.5 text-[10px] lg:text-xs text-[#666]">
                  Verified by HPLC
                </p>
              </div>
            </div>
          </div>
          <div class="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 z-20">
  <a href="/us/quality" class="block">
    <div class="group cursor-pointer bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/50 hover:bg-white hover:shadow-xl hover:scale-[1.01] transition-all duration-200">
      
      <div class="flex items-center justify-between gap-4">
        

        <div class="flex items-center gap-3">
          
   
          <div class="flex items-center justify-center w-9 h-11 lg:w-10 lg:h-12 rounded-lg border border-[#e5e5e5] bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] shadow-sm">
            <svg
              class="w-4 h-4 lg:w-5 lg:h-5 text-[#555]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <div class="leading-none">
            <p class="text-xs lg:text-sm font-semibold text-black">
              See the Proof
            </p>
            <p class="mt-1 text-[10px] lg:text-xs text-[#666]">
              View our quality procedures
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f5] group-hover:bg-black transition-all duration-200">
          <svg
            class="w-4 h-4 text-[#666] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

      </div>
    </div>
  </a>
</div>
          </div>
      </div>

    </div>
  </div>
</section>
  );
}