import Image from "next/image";

export default function CallToActionSection() {
  return (
    <div className="relative overflow-x-clip">
      {/* Hero Section */}
      <section
        className="relative pt-12 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 bg-gradient-to-b from-[#fefeca] to-[#e9fae7] w-full"
        aria-label="Call to action"
      >
        {/* Left Vial */}
        <div
          className="absolute left-[-15px] sm:left-[-5px] lg:left-[35px] xl:left-[75px] top-[-20px] lg:top-[-35px] w-[55px] sm:w-[65px] lg:w-[85px] xl:w-[100px] h-[110px] sm:h-[130px] lg:h-[170px] xl:h-[200px] pointer-events-none z-10"
          style={{ transform: "translateY(-16.079px)", transition: "transform 0.1s ease-out" }}
        >
          <div className="relative w-full h-full rotate-[18deg]">
            <Image
              alt="DSIP peptide vial"
              src="/images/DSIP.webp"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Right Vial */}
        <div
          className="absolute z-[70] right-[-20px] sm:right-[-10px] lg:right-[40px] xl:right-[80px] bottom-[-40px] lg:bottom-[-70px] w-[60px] sm:w-[75px] lg:w-[95px] xl:w-[110px] h-[120px] sm:h-[150px] lg:h-[190px] xl:h-[220px] pointer-events-none"
          style={{ transform: "translateY(10.7194px)", transition: "transform 0.1s ease-out" }}
        >
          <div className="relative w-full h-full rotate-[-8deg]">
            <Image
              alt="NAD+ peptide vial"
              src="/images/NADDesktop.webp"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="content-container relative z-20">
          <div className="max-w-3xl mx-auto text-center px-8 sm:px-12 lg:px-16">
            <h2 className="headingtext-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-[1.35] mb-6 lg:mb-8">
              All the research peptides you need, with the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 transition-all duration-500 animate-text-glow">
                  peace of mind
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[4px] lg:h-[5px] overflow-hidden rounded-full">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#b8e03f] via-[#7dd87d] to-[#4ade80] rounded-full origin-left transition-transform duration-1000 ease-out scale-x-100"></span>
                  <span
                    className="absolute inset-0 rounded-full opacity-100 animate-shimmer"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)",
                    }}
                  ></span>
                </span>
                <span
                  className="absolute inset-0 -z-10 blur-xl transition-opacity duration-1000 opacity-40 animate-pulse-glow"
                  style={{
                    background: "linear-gradient(90deg, rgb(184, 224, 63), rgb(125, 216, 125), rgb(74, 222, 128))",
                  }}
                ></span>
                <span
                  className="absolute top-[-8px] left-[20%] w-1.5 h-1.5 rounded-full pointer-events-none animate-sparkle-1"
                  style={{
                    background: "radial-gradient(circle, rgb(255, 255, 255) 0%, rgb(125, 216, 125) 50%, transparent 70%)",
                  }}
                ></span>
                <span
                  className="absolute top-[-5px] left-[50%] w-1.5 h-1.5 rounded-full pointer-events-none animate-sparkle-2"
                  style={{
                    background: "radial-gradient(circle, rgb(255, 255, 255) 0%, rgb(125, 216, 125) 50%, transparent 70%)",
                  }}
                ></span>
                <span
                  className="absolute top-[-10px] left-[80%] w-1.5 h-1.5 rounded-full pointer-events-none animate-sparkle-3"
                  style={{
                    background: "radial-gradient(circle, rgb(255, 255, 255) 0%, rgb(125, 216, 125) 50%, transparent 70%)",
                  }}
                ></span>
              </span>{" "}
              and research community at your fingertips.
            </h2>

            <a href="/us/store">
              <button className="relative overflow-hidden inline-flex items-center gap-2 bg-black text-white px-6 lg:px-7 py-3 lg:py-3.5 rounded-full font-medium text-sm lg:text-base transition-all duration-300 hover:gap-3 hover:shadow-xl hover:shadow-black/20 hover:scale-105 group before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-[100%]">
                Shop Now
                <svg
                  width="32"
                  height="10"
                  viewBox="0 0 45 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M44.5303 6.53033C44.8232 6.23744 44.8232 5.76256 44.5303 5.46967L39.7574 0.696699C39.4645 0.403806 38.9896 0.403806 38.6967 0.696699C38.4038 0.989593 38.4038 1.46447 38.6967 1.75736L42.9393 6L38.6967 10.2426C38.4038 10.5355 38.4038 11.0104 38.6967 11.3033C38.9896 11.5962 39.4645 11.5962 39.7574 11.3033L44.5303 6.53033ZM0 6.75H44V5.25H0V6.75Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <div className="relative z-30 pb-12 -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="content-container">
          <div
            className="relative bg-gradient-to-b from-[#e8e5ff] to-[#f8eaed] rounded-2xl lg:rounded-3xl px-5 sm:px-8 lg:px-10 py-6 lg:py-8 overflow-hidden"
            style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px -4px 40px" }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8">
              <div className="flex-1 max-w-md">
                <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-black leading-tight mb-1.5 lg:mb-2">
                  Stay Updated with Amino Club
                </h3>
                <p className="text-sm lg:text-base text-[#797979] leading-relaxed mb-1.5">
                  Subscribe to our newsletter for exclusive deals, research updates, and wellness tips
                </p>
                <p className="text-xs lg:text-sm text-black/70">
                  Join <span className="font-semibold text-black">10,000+</span> subscribers. No spam, unsubscribe anytime.
                </p>
              </div>

              <div className="flex-shrink-0 w-full lg:w-auto lg:min-w-[340px]">
                <form className="relative">
                  <div className="flex items-center bg-white rounded-full border border-[#dedede] p-1 lg:p-1.5 shadow-sm">
                    <input
                      placeholder="Enter your email"
                      className="flex-1 min-w-0 bg-transparent px-4 py-2 text-base text-black placeholder:text-black/40 focus:outline-none"
                      type="email"
                    />
                    <button
                      type="submit"
                      className="flex-shrink-0 bg-black text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}