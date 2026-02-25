import Link from "next/link";

export default function AccessCard() {
  return (
    <div className="h-full">
      <Link href="/account" className="block h-full">
        <div className="relative h-full min-h-[280px] sm:min-h-[320px]
          rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50
          border border-gray-200 p-5 sm:p-6
          flex flex-col items-center justify-center text-center
          transition-all hover:border-gray-300 hover:shadow-md">

          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/5
            flex items-center justify-center mb-3 sm:mb-4">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-black/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h3 className="font-anek text-base sm:text-lg font-semibold mb-1 sm:mb-2">
            20+ More Products
          </h3>

          <p className="paragraph text-xs sm:text-sm text-black/60 mb-3 sm:mb-4">
            Sign in or create an account to view our full catalog
          </p>

          <span className="inline-flex items-center gap-2
            text-xs sm:text-sm font-medium
            text-black bg-white border border-black
            rounded-full px-4 sm:px-5 py-2 sm:py-2.5
            hover:bg-black hover:text-white transition">
            Get Access
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
}