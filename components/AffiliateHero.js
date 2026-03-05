// components/AffiliateHero.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AffiliateHero() {
  return (
    <section
      className="relative w-full min-h-fit lg:min-h-[40vh] lg:h-[450px] xl:h-[520px] 2xl:h-[580px] overflow-hidden"
      aria-label="Amino Club Affiliate Program - Turn your influence into income"
    >
      {/* Background */}
      <div className="absolute inset-0 flex flex-col lg:flex-row" aria-hidden="true">
        <div className="hidden lg:block lg:w-1/2 bg-white" />
        <div
          className="flex-1 lg:w-2/3"
          style={{ background: "linear-gradient(rgba(232, 229, 255, 0.6) 0%, rgba(203, 229, 252, 0.6) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="content-container relative h-full min-h-fit lg:min-h-0 lg:h-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full min-h-fit lg:min-h-0">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2 lg:gap-4 pt-4 pb-8 lg:py-8 xl:py-10 z-20 order-2 lg:order-1">
            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-[4rem] font-semibold text-black leading-[1.05] tracking-tight max-w-md lg:max-w-lg">
              Partner with premium research peptides
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-black/80 leading-relaxed max-w-sm lg:max-w-md">
              Earn 20% commission on first orders, 10% recurring on all research peptide purchases.
            </p>

            {/* Commission Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 w-full max-w-sm lg:max-w-md">
              <div className="text-left">
                <p className="text-2xl lg:text-3xl font-semibold text-black">20%</p>
                <p className="text-sm text-black/60">First order commission</p>
              </div>
              <div className="text-left">
                <p className="text-2xl lg:text-3xl font-semibold text-black">10%</p>
                <p className="text-sm text-black/60">Lifetime recurring</p>
              </div>
              <div className="text-left">
                <p className="text-2xl lg:text-3xl font-semibold text-black">30 days</p>
                <p className="text-sm text-black/60">Cookie window</p>
              </div>
              <div className="text-left">
                <p className="text-2xl lg:text-3xl font-semibold text-black">Monthly</p>
                <p className="text-sm text-black/60">Payouts via PayPal</p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2 lg:pt-3">
              <Link href="/us/account">
                <button className="group bg-black hover:bg-black/90 text-white text-sm lg:text-base font-medium h-11 lg:h-12 px-6 lg:px-8 rounded-full transition-all inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                  Become a Partner
                  <svg
                    width="24"
                    height="10"
                    viewBox="0 0 45 15"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M44.7071 8.20711C45.0976 7.81658 45.0976 7.18342 44.7071 6.79289L38.3431 0.428932C37.9526 0.0384078 37.3195 0.0384078 36.9289 0.428932C36.5384 0.819457 36.5384 1.45262 36.9289 1.84315L42.5858 7.5L36.9289 13.1569C36.5384 13.5474 36.5384 14.1805 36.9289 14.5711C37.3195 14.9616 37.9526 14.9616 38.3431 14.5711L44.7071 8.20711ZM0 8.5H44V6.5H0V8.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Showcase */}
          <div
            className="relative h-auto max-h-[40svh] min-h-[20svh] lg:h-full lg:max-h-none lg:min-h-0 lg:flex-1 order-1 lg:order-2 aspect-[1.35/1] lg:aspect-[4/3] flex justify-center"
            aria-label="Affiliate program showcase"
            role="img"
          >
            <div className="relative w-full max-w-[609px] lg:max-w-none h-full">
              {/* Floating Images */}
              <div
                className="absolute w-[18%] sm:w-[25%] lg:w-[15%] aspect-[1/1.5] z-10 right-[8%] top-[15%] sm:right-[10%] sm:top-[5%] lg:right-[15%] lg:top-[10%] animate-float-slow pointer-events-none select-none"
                style={{ transform: "rotate(-8deg)" }}
              >
                <Image
                  src="/images/hero/TB500Desktop.webp"
                  alt="TB-500 Peptide vial"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div
                className="absolute w-[20%] sm:w-[30%] lg:w-[18%] aspect-[1/1.5] z-10 left-[5%] top-[8%] sm:left-[8%] sm:top-[15%] lg:left-[10%] lg:top-[20%] animate-float pointer-events-none select-none"
                style={{ transform: "rotate(12deg)" }}
              >
                <Image
                  src="/images/hero/BPC157Desktop.webp"
                  alt="BPC-157 Peptide vial"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div
                className="absolute w-[22%] sm:w-[35%] lg:w-[20%] aspect-[1/1.5] z-10 right-[6%] bottom-[20%] sm:right-[5%] sm:bottom-[10%] lg:right-[8%] lg:bottom-[15%] animate-float-delayed pointer-events-none select-none"
                style={{ transform: "rotate(-5deg)" }}
              >
                <Image
                  src="/images/hero/BacWaterDesktop.webp"
                  alt="Bacteriostatic Water"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Earnings Card */}
              <div className="absolute left-[10%] top-[50%] sm:left-auto sm:right-[20%] sm:top-[55%] lg:right-[35%] lg:top-[40%] w-[45%] sm:w-56 lg:w-64 bg-white/95 backdrop-blur rounded-2xl shadow-xl p-3 sm:p-5 lg:p-6 animate-float-slow z-20">
                <p className="text-xs sm:text-sm text-black/60 mb-1">Average monthly earnings</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">$1,250</p>
                <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-black/10">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-black/60">10 referrals</span>
                    <span className="font-medium text-green-600">+$500</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm mt-1">
                    <span className="text-black/60">Recurring</span>
                    <span className="font-medium text-blue-600">+$750</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}