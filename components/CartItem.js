import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

export default function CartItem({
  id,
  name,
  variant,
  image,
  price,
  qty,
  onRemove,
  onQtyChange,
}) {
  return (
    <div
      className="relative flex gap-3 p-3 sm:p-4 bg-white border border-[#e8e8e8]
      rounded-2xl sm:rounded-[20px]"
    >
      {/* Remove button */}
      <button
        onClick={() => onRemove(id)}
        aria-label={`Remove ${name} from cart`}
        className="absolute -top-1 -right-1 sm:top-1 sm:right-1
        w-11 h-11 flex items-center justify-center
        text-[#999] hover:text-red-500 active:bg-red-50
        rounded-full transition-all
        focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      {/* Image */}
      <Link
        href="/store"
        className="relative flex-shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20
        rounded-xl overflow-hidden bg-[#ededed]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 72px, 80px"
          className="object-cover object-[80%_center]"
        />
      </Link>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col pr-5 sm:pr-6">
        <Link
          href="/store"
          className="font-bold text-black text-sm sm:text-base leading-tight
          hover:text-black/70 transition-colors line-clamp-2"
        >
          {name}
        </Link>

        <div className="mt-0.5 sm:mt-1 mb-2 sm:mb-3">
          <span className="text-xs text-gray-500">{variant}</span>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-auto gap-3">
          {/* Quantity */}
          <div className="relative">
            <select
              value={qty}
              onChange={(e) => onQtyChange(id, Number(e.target.value))}
              className="h-9 min-w-[60px] px-2.5
              flex items-center justify-between
              bg-white border border-[#e0e0e0] rounded-full
              text-sm font-medium text-black
              focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="flex items-end sm:items-center gap-1 sm:gap-2">
            <span className="text-base sm:text-lg font-bold text-black">
              ${(price * qty).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}