import Image from "next/image";

export default function PaymentMethods() {
  return (
    <div className="flex items-center gap-3 mt-3 font-anek">
      <span className="text-xs text-[#666]">We accept</span>

      <div className="flex items-center gap-3">
        {/* Apple Pay */}
        <img
          src="https://cdn.simpleicons.org/applepay"
          alt="Apple Pay"
          className="h-6 w-auto"
        />

        {/* Visa */}
        <img
          src="https://cdn.simpleicons.org/visa"
          alt="Visa"
          className="h-5 w-auto"
        />

        {/* Mastercard (local SVG – use next/image) */}
        <Image
          src="/images/product-list/ma_symbol.svg"
          alt="Mastercard"
          width={48}
          height={32}
          className="h-6 w-auto"
        />

        {/* American Express */}
        <img
          src="https://cdn.simpleicons.org/americanexpress"
          alt="American Express"
          className="h-6 w-auto"
        />
      </div>
    </div>
  );
}