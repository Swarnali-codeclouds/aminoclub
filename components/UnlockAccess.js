export default function UnlockAccess() {
  return (
    <section
      className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50"
      aria-label="Get full access"
    >
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-6">
            <svg
              className="w-5 h-5 text-black/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-sm font-medium text-black/70 pt-[4.5px]">
              Members Only
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-4">
            Unlock Full Access to Our Store
          </h2>

          {/* DESCRIPTION */}
          <p className="text-base md:text-lg text-black/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Sign in or create an account to browse our complete catalog of
            research-grade peptides, access exclusive member pricing, and join
            our community of researchers.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* CREATE ACCOUNT */}
            <a href="/us/account">
              <button
                type="button"
                className="group bg-black hover:bg-black/90 text-white
                           text-sm lg:text-base font-medium h-12 px-8
                           rounded-full transition-all inline-flex
                           items-center justify-center gap-3
                           focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Create Account
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </a>

            {/* SIGN IN */}
            <a href="/us/account">
              <button
                type="button"
                className="group border border-black text-black
                           hover:bg-black hover:text-white
                           text-sm lg:text-base font-medium h-12 px-8
                           rounded-full transition-all inline-flex
                           items-center justify-center
                           focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Sign In
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}