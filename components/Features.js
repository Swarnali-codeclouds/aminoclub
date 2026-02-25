

export default function Features() {
  return (
   <section
  className="py-12 lg:py-16 bg-[#e9fce6] w-full overflow-x-hidden"
  aria-label="Features"
>
  <div className="content-container">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-[1.05] text-center mb-8 lg:mb-12">
      Everything you need to succeed
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
      
      {/* Card 1 */}
      <div className="lg:col-span-6 bg-white rounded-2xl lg:rounded-[28px] shadow-[0px_4px_12.5px_rgba(151,201,143,0.44)] p-5 lg:p-6 min-h-[180px] lg:min-h-[220px] relative overflow-hidden">
        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold leading-[1.1] mb-2">
          Join a community of researchers
        </h3>
        <p className="text-sm lg:text-base mb-4 max-w-[70%]">
          Every purchase unlocks access to our private Discord community. Connect with fellow peptide enthusiasts, share insights, and get real-time support.
        </p>
        <a href="/us/store" className="inline-block">
          <button className="border border-black text-black text-sm lg:text-base font-medium px-5 lg:px-6 h-10 lg:h-11 rounded-full hover:bg-black hover:text-white transition">
            Shop & Join Community
          </button>
        </a>
        <img
          src="/images/TestTube.webp"
          alt="Community"
          className="absolute bottom-4 right-4 w-20 lg:w-24"
        />
      </div>

      {/* Card 2 */}
      <div className="lg:col-span-6 bg-white rounded-2xl lg:rounded-[28px] shadow-[0px_4px_12.5px_rgba(151,201,143,0.44)] p-5 lg:p-6 min-h-[180px] lg:min-h-[220px] relative overflow-hidden">
        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold leading-[1.1] mb-2">
          Lab-grade quality meets research-friendly pricing
        </h3>
        <p className="text-sm lg:text-base mb-4 max-w-[70%]">
          GMP-compliant sourcing with rigorous third-party testing—ensuring the highest purity peptides remain accessible.
        </p>
        <a href="/us/store" className="inline-block">
          <button className="border border-black text-black text-sm lg:text-base font-medium px-5 lg:px-6 h-10 lg:h-11 rounded-full hover:bg-black hover:text-white transition">
            Shop USA Tested Peptides
          </button>
        </a>
        <img
          src="/images/BiologicalTest.webp"
          alt="Lab testing"
          className="absolute bottom-4 right-4 w-20 lg:w-24"
        />
      </div>

      {/* Card 3 */}
      <div className="lg:col-span-6 bg-white rounded-2xl lg:rounded-[28px] shadow-[0px_4px_12.5px_rgba(151,201,143,0.44)] p-5 lg:p-6 min-h-[120px] flex items-center relative overflow-hidden">
        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold max-w-[70%]">
          Expert support whenever you need it
        </h3>
        <img
          src="/images/Support.webp"
          alt="Support"
          className="absolute bottom-4 right-4 w-16 lg:w-20"
        />
      </div>

      {/* Tall card */}
      <div className="lg:col-span-6 lg:row-span-2 bg-white rounded-2xl lg:rounded-[28px] shadow-[0px_4px_12.5px_rgba(151,201,143,0.44)] p-5 lg:p-6 min-h-[300px] relative overflow-hidden">
        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
          Extensive research library at your fingertips
        </h3>
        <p className="text-sm lg:text-base mb-4 max-w-[70%]">
          Access research articles, studies, and educational resources updated regularly.
        </p>
        <a href="/us/research">
          <button className="border border-black text-black text-sm lg:text-base font-medium px-5 lg:px-6 h-10 lg:h-11 rounded-full hover:bg-black hover:text-white transition">
            Explore Research Library
          </button>
        </a>
        <img
          src="/images/Research.webp"
          alt="Research"
          className="absolute bottom-4 right-4 w-24 lg:w-28"
        />
      </div>

      {/* Shipping */}
      <div className="lg:col-span-6 bg-white rounded-2xl lg:rounded-[28px] shadow-[0px_4px_12.5px_rgba(151,201,143,0.44)] p-5 lg:p-6 min-h-[120px] flex items-center relative overflow-hidden">
        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold max-w-[70%]">
          Anywhere in the US, as fast as next day
        </h3>
        <img
          src="/images/AnywhereInUS.webp"
          alt="Fast shipping"
          className="absolute bottom-4 right-4 w-16 lg:w-20"
        />
      </div>

      {/* Guarantee */}
<div className="relative lg:col-span-12 bg-white rounded-2xl lg:rounded-[28px]
shadow-[0px_4px_12.5px_rgba(151,201,143,0.44)]
p-6 lg:p-8 pr-24 lg:pr-32
flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between
overflow-hidden">

  {/* Left Content */}
  <div className="max-w-3xl">
    <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-2 leading-tight">
      60-day money-back guarantee & free shipment protection
    </h3>
    <p className="text-sm lg:text-base text-black/70 leading-relaxed">
      Full refund within 60 days. Every order is protected in transit.
    </p>
  </div>

  {/* Right CTA */}
  <div className="relative z-20 shrink-0">
    <a href="/us/returns">
      <button className="border border-black text-black text-sm lg:text-base font-medium
        px-6 lg:px-8 h-11 lg:h-12 rounded-full
        hover:bg-black hover:text-white transition-all bg-white">
        Shop With Confidence
      </button>
    </a>
  </div>

  {/* Truck Illustration */}
  <img
    src="/images/Delivery.webp"
    alt="Fast shipping"
    className="pointer-events-none select-none
      absolute right-4 lg:right-6 bottom-4 lg:bottom-6
      w-16 lg:w-20 opacity-80 z-10"
  />
</div>
    </div>
  </div>
</section>
  );
}