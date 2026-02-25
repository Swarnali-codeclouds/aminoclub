import Image from "next/image";

export default function GuaranteeSection() {
  return (
    <section
      className="relative bg-white overflow-visible"
      aria-label="Amino Club quality guarantee and trust badges"
    >
      {/* BACKGROUND GRADIENT BLOCK */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[280px] sm:h-[290px] md:h-[300px]
                   lg:top-0 lg:bottom-0 lg:h-full lg:w-1/2"
        style={{
          background:
            "linear-gradient(rgba(232,229,255,0.75) 0%, rgba(248,234,237,0.75) 100%)",
        }}
      />

      {/* CONTENT CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 overflow-visible">

        {/* LEFT – TEXT + CARDS */}
        <div className="pt-6 pb-10 md:pt-8 md:pb-12 lg:py-10 lg:pr-14 order-1 lg:order-2 flex flex-col justify-center">

          {/* HEADER */}
          <header className="mb-4 md:mb-5 lg:mb-8 lg:pl-14">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-[1.05] mb-2">
              The Amino Club Guarantee
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#555] max-w-[420px]">
              We don't compromise on quality. Every product meets the highest
              standards.
            </p>
          </header>

          {/* GUARANTEE ITEMS */}
          <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3 lg:-ml-[24px]">

            {/* ITEM 1 */}
            <GuaranteeItem
              color="rgb(233, 252, 230)"
              icon="/images/Verified.webp"
              title="99% Purity Guaranteed"
              subtitle="Or your money back"
            />

            {/* ITEM 2 */}
            <GuaranteeItem
              color="rgb(203, 229, 252)"
              icon="/images/Shipping.webp"
              title="Shipment Protection"
              subtitle="Every order fully covered"
            />

            {/* ITEM 3 */}
            <GuaranteeItem
              color="rgb(254, 254, 202)"
              icon="/images/CoA.webp"
              title="CoA with Every Batch"
              subtitle="Third Party tested in America"
            />

          </div>
        </div>

        {/* RIGHT – PRODUCT IMAGE */}
        <div className="relative min-h-[265px] sm:min-h-[270px] md:min-h-[280px] lg:min-h-[320px] order-2 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-[500px] lg:max-w-[780px] h-full">

            <div
              className="absolute left-[14%] top-[0%] w-[40%] max-w-[160px]
                         lg:left-[4%] lg:top-[8%] lg:w-[50%] lg:max-w-[280px]
                         aspect-[1/1.5] rotate-[15deg] translate-y-[6px]"
              style={{ zIndex: 10 }}
            >
              <Image
                src="/images/NADDesktop.webp"
                alt="NAD+ Peptide vial"
                fill
                className="object-contain select-none pointer-events-none"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- SUB COMPONENT ---------------- */

function GuaranteeItem({ color, icon, title, subtitle }) {
  return (
    <article className="relative bg-white shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)]
                        h-[80px] md:h-[88px] lg:h-[100px] overflow-visible">

      {/* COLOR STRIP */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[12px] lg:w-[24px]"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <div className="flex items-center h-full pl-7 md:pl-9 lg:pl-10 pr-4 gap-3 lg:gap-4">

        {/* ICON */}
        <div
          className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px]
                     rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          <Image
            src={icon}
            alt=""
            width={32}
            height={32}
            className="object-contain"
          />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-sm md:text-base lg:text-lg font-semibold leading-[1.24]">
            {title}
          </h3>
          <p className="text-xs md:text-sm lg:text-base text-[#555] leading-[1.24]">
            {subtitle}
          </p>
        </div>

      </div>
    </article>
  );
}