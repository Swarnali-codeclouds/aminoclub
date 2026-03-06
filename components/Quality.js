"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "potency",
    label: "Potency",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Verified Potency",
    desc: "Every vial is tested to confirm it contains exactly what the label says—down to the microgram.",
    why: "No guessing games. You get the exact concentration you paid for, every single time.",
  },
  {
    id: "purity",
    label: "Purity",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "99%+ Purity Guaranteed",
    desc: "Comprehensive testing confirms our peptides are free from impurities, degradation products, and synthesis byproducts.",
    why: "Higher purity means better results. We guarantee 99%+ or your money back.",
  },
  {
    id: "stability",
    label: "Stability",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Long-Term Stability",
    desc: "Optimal pH and formulation testing ensures your peptides remain effective throughout their entire shelf life.",
    why: "Your peptides work when you need them—not just when they arrive.",
  },
  {
    id: "safety",
    label: "Safety",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Contaminant-Free",
    desc: "Rigorous sterility and endotoxin testing confirms products are free from bacteria, fungi, and harmful toxins.",
    why: "Peace of mind knowing your research won't be compromised by contamination.",
  },
  {
    id: "consistency",
    label: "Consistency",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Batch-to-Batch Consistency",
    desc: "Precision weighing and quality controls ensure every batch meets the same exacting standards.",
    why: "Same great quality whether it’s your first order or your fiftieth.",
  },
];

export default function Quality() {
  const [activeTab, setActiveTab] = useState("consistency");
  const tabData = tabs.find((t) => t.id === activeTab);

  return (
    <section className="py-12 lg:py-16 bg-white w-full overflow-x-hidden font-anek">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight mb-4">
              Quality you can verify, not just trust
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#666] mb-6">
              Every batch is independently tested by accredited U.S. laboratories.
              We don’t ask you to take our word for it—we give you the proof.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-6 pb-6 mb-6 border-b border-[#eee]">
              {[
                ["99%+", "Purity Guaranteed"],
                ["5", "Quality Checks"],
                ["100%", "U.S. Verified"],
              ].map(([value, label]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-xl lg:text-2xl font-bold">{value}</span>
                  <span className="text-xs lg:text-sm text-[#555] max-w-[90px] leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {/* TABS */}
            <div className="relative mb-6">
              <div className="flex gap-2 overflow-x-auto lg:flex-wrap scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
                      ${activeTab === tab.id
                        ? "bg-black text-white shadow"
                        : "bg-[#f5f5f5] text-[#555] hover:bg-[#eaeaea] hover:text-black"
                      }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* PANEL */}
            <div className="relative bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] border border-[#eaeaea] rounded-2xl p-5 lg:p-6">
              <h3 className="text-lg font-semibold mb-3">{tabData.title}</h3>
              <p className="text-sm lg:text-[15px] text-[#555] mb-4">{tabData.desc}</p>
              <div className="relative bg-white rounded-xl p-4 border border-[#e8e8e8]">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-green-500 to-green-600" />
                <p className="text-xs lg:text-sm pl-3 text-[#555]">
                  <span className="font-semibold text-black">Why it matters: </span>
                  {tabData.why}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-5 lg:mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/store" className="inline-flex">
                <button className="inline-flex items-center gap-2.5 bg-black text-white text-sm lg:text-base font-medium px-6 lg:px-7 h-11 lg:h-12 rounded-full hover:bg-[#1a1a1a] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 leading-none group">
                  <span>Shop Now</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>

              <div className="flex items-center gap-2 text-xs lg:text-sm text-[#555]">
                <svg className="w-4 h-4 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Free COA included with every order</span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="order-1 lg:order-2">
  <div className="relative bg-gradient-to-b from-[#f8f9fb] via-[#e8eef5] to-[#cddaeb] rounded-[28px] lg:rounded-[32px] p-6 lg:p-10 flex items-center justify-center min-h-[280px] lg:min-h-[500px] overflow-hidden">

    {/* Decorative inset border */}
    <div className="absolute inset-8 lg:inset-12 rounded-full border border-white/30" aria-hidden="true"></div>

    {/* Floating Purity Badge */}
    <div className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2.5 lg:px-4 lg:py-3 shadow-lg border border-white/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
      <div className="flex items-center gap-2.5">
        <div className="relative w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] flex items-center justify-center">
          <svg className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-xs lg:text-sm font-semibold text-black leading-none">99%+ Purity</p>
          <p className="text-[10px] lg:text-xs text-[#666] leading-none mt-0.5">Verified by HPLC</p>
        </div>
      </div>
    </div>

    {/* Product Image */}
    <img
      alt="Amino Club TB-500 peptide vial - 99%+ purity, third-party lab tested with Certificate of Analysis"
      src="/images/TB500Desktop.webp"
      loading="lazy"
      width={320}
      height={450}
      className="relative z-10 w-auto h-[220px] lg:h-[420px] object-contain hover:scale-[1.02] transition-transform duration-500"
    />

    <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 z-20">
  <Link href="/quality">
    <div className="group cursor-pointer bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/50 hover:bg-white hover:shadow-xl hover:scale-[1.01] transition-all duration-200">
      <div className="flex items-center justify-between">
        {/* Left side: icon + text */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-11 lg:w-10 lg:h-12 bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] rounded-lg border border-[#e5e5e5] flex items-center justify-center shadow-sm">
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 text-[#555]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs lg:text-sm font-semibold text-black leading-none">See the Proof</p>
            <p className="text-[10px] lg:text-xs text-[#666] leading-none mt-1">View our quality procedures</p>
          </div>
        </div>

        {/* Right side: arrow */}
        <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center group-hover:bg-black transition-all duration-200">
          <svg
            className="w-4 h-4 text-[#666] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </Link>
</div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}