import Image from "next/image";

export default function WhyChooseSection() {
  return (
    <section
      className="relative py-12 lg:py-16 overflow-hidden w-full max-w-[100vw]"
      aria-labelledby="why-choose-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/bubbles2.webp"
          alt=""
          fill
          className="object-cover blur-[8px] opacity-50"
          priority
        />
      </div>

      <div className="content-container relative z-10">
        <h2
          id="why-choose-heading"
          className="heading text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-6 lg:mb-10 leading-tight"
        >
          Why choose Amino Club?
        </h2>

        <div className="paragraph grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Card */}
          {[
            {
              title: "Always in Stock",
              desc: "Top research peptides like BPC-157, TB-500, and Ipamorelin ready to ship. No backorders, no waiting.",
              icon: "/images/Boxes.webp",
              bg: "bg-[#f2f0ff]",
              border: "border-[rgba(220,215,255,0.3)]",
            },
            {
              title: "Volume Discounts",
              desc: "Save up to 20% on bulk peptide orders. The more you buy, the less you pay per vial.",
              icon: "/images/Discount.webp",
              bg: "bg-[#f0ffee]",
              border: "border-[rgba(233,250,231,0.3)]",
            },
            {
              title: "Safe & Protected Shipping",
              desc: "Cold-pack shipping keeps peptides stable. Discreet packaging with full tracking on every USA order.",
              icon: "/images/Shipping2.webp",
              bg: "bg-[#fffbdb]",
              border: "border-[rgba(255,250,214,0.3)]",
            },
            {
              title: "Community Sourced Research",
              desc: "Join 5,000+ researchers in our Discord. Real results, dosing guides, and peptide research discussions.",
              icon: "/images/Search2.webp",
              bg: "bg-[#ffe7fd]",
              border: "border-[rgba(250,217,255,0.3)]",
            },
            {
              title: "99%+ Purity Guaranteed",
              desc: "Every batch tested by US labs via HPLC and Mass Spec. Full Certificate of Analysis included free.",
              icon: "/images/Quality2.webp",
              bg: "bg-[#f1eeff]",
              border: "border-[rgba(220,215,255,0.3)]",
            },
            {
              title: "Shipment Protection",
              desc: "Every order includes free shipment protection. Lost, damaged, or stolen packages are reshipped at no cost.",
              icon: "/images/Quick.webp",
              bg: "bg-[#effff8]",
              border: "border-[rgba(165,226,198,0.3)]",
            },
          ].map((item, i) => (
            <article
              key={i}
              className="relative bg-white/80 backdrop-blur-sm border border-[rgba(227,227,227,0.6)] rounded-2xl lg:rounded-3xl p-4 lg:p-5 shadow-sm"
            >
              <div
                className={`absolute inset-0 rounded-2xl lg:rounded-3xl border-[3px] ${item.border} pointer-events-none`}
                aria-hidden="true"
              />

              <div
                className={`w-11 h-11 lg:w-14 lg:h-14 rounded-xl border flex items-center justify-center mb-3 lg:mb-4 ${item.bg}`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                />
              </div>

              <h3 className="font-semibold text-base lg:text-lg text-black leading-tight mb-1.5 lg:mb-2">
                {item.title}
              </h3>

              <p className="text-[#797979] text-sm lg:text-base leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}