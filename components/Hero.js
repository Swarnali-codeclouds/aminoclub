import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-fit lg:min-h-[40vh] lg:h-[450px] xl:h-[520px] 2xl:h-[580px] overflow-hidden"
      aria-label="Welcome to Amino Club - Premium Research Peptides"
    >
      {/* BACKGROUND SPLIT */}
      <div className="absolute inset-0 flex flex-col lg:flex-row" aria-hidden="true">
        <div className="hidden lg:block lg:w-1/2 bg-white" />
        <div
          className="flex-1 lg:w-2/3"
          style={{
            background:
              "linear-gradient(rgba(232,229,255,0.6) 0%, rgba(203,229,252,0.6) 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative h-full content-container">
        <div className="flex flex-col h-full lg:grid lg:grid-cols-2">

          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2 lg:gap-4 pt-4 pb-8 lg:py-8 xl:py-10 z-20 order-2 lg:order-1">
            <h1 className="font-anek text-[2.75rem] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-[4rem] font-semibold leading-[1.05] tracking-tight max-w-md lg:max-w-lg">
              Sign Up for Full Access
            </h1>

            <p className="font-anek leading-tight text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-black/80 max-w-sm lg:max-w-md">
              Create an account or sign in to explore our complete catalog of
              research-grade peptides with 99%+ purity.
            </p>

            <div className="pt-2 lg:pt-3">
              <button className="font-poppins group bg-black hover:bg-black/90 text-white text-sm lg:text-base h-11 lg:h-12 px-6 lg:px-8 rounded-full transition-all inline-flex items-center gap-3">
                Get Started
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT PRODUCTS */}
          <div
            className="relative h-auto max-h-[40svh] min-h-[20svh]
                       lg:h-full lg:max-h-none lg:min-h-0 lg:flex-1
                       order-1 lg:order-2 aspect-[1.35/1] lg:aspect-[4/3]
                       flex justify-center"
            aria-label="Featured products showcase"
            role="img"
          >
            <div className="relative w-full max-w-[609px] lg:max-w-none h-full">

              {/* BACK BOTTLE */}
              <div className="absolute aspect-[1/1.5] z-0
                              right-[25%] sm:right-[20%] lg:right-[35%] xl:right-[42%]
                              top-[15%] lg:top-[12%]
                              w-[28%] sm:w-[28%] lg:w-[35%] xl:w-[32%]">
                <div className="w-full h-full animate-float-pulse">
                  <Image
                    src="/images/bottle-small-2.webp"
                    alt="TB-500 vial"
                    fill
                    className="object-contain select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* MAIN BOTTLE */}
              <div
                className="absolute aspect-[1/1.3] z-10
                           left-[5%] sm:left-[0%] lg:left-[-18%]
                           top-[0%] sm:top-[5%] lg:top-[0%]
                           w-[60%] sm:w-[60%] lg:w-[80%] xl:w-[75%]"
                style={{ transform: "rotate(-12deg)" }}
              >
                <div className="w-full h-full animate-bob">
                  <Image
                    src="/images/bottle-big.webp"
                    alt="Bacteriostatic Water"
                    fill
                    priority
                    className="object-contain select-none pointer-events-none drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* FRONT BOTTLE */}
              <div className="absolute aspect-[1/1.5] z-20
                              right-[16%] sm:right-[18%] lg:right-[12%] xl:right-[20%]
                              top-[38%] sm:top-[40%] lg:top-[35%]
                              w-[32%] sm:w-[30%] lg:w-[38%] xl:w-[35%]">
                <div className="w-full h-full animate-bob">
                  <Image
                    src="/images/bottle-small-1.webp"
                    alt="BPC-157 vial"
                    fill
                    className="object-contain select-none pointer-events-none drop-shadow-xl"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}