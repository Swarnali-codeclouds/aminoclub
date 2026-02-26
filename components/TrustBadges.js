export default function TrustBadges() {
  return (
    <section className="py-4 lg:py-6">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            {/* Free Shipping */}
            <div className="flex flex-col items-center text-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M1 3h15v13H1z" />
                  <path d="M16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>

              <span className="text-xs text-[#333]">
                <span className="font-medium">Free shipping</span>
                <span className="block text-[#666]">
                  on orders over $150
                </span>
              </span>
            </div>

            {/* Money Back */}
            <div className="flex flex-col items-center text-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>

              <span className="text-xs text-[#333]">
                <span className="font-medium">60-day money-back</span>
                <span className="block text-[#666]">guarantee</span>
              </span>
            </div>

            {/* Secure Checkout */}
            <div className="flex flex-col items-center text-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>

              <span className="text-xs text-[#333]">
                <span className="font-medium">Secure checkout</span>
                <span className="block text-[#666]">256-bit SSL</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}