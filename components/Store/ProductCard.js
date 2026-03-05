import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ 
  product, 
  buttonText = "View", // Default text
  basePath = "store",    // Default path base
  icon: IconProp
}) {
  const {
    slug,
    name,
    price,
    subtitle,
    image,
    rating,
    reviews,
  } = product;

  const fullPath = `/${basePath}/${slug}`;

  return (
    <div className="h-full font-anek">
      <div className="group h-full">
        <div className="bg-neutral-100 rounded-[20px] lg:rounded-[24px] overflow-hidden h-full flex flex-col border border-transparent hover:border-gray-200 transition-all">

          {/* Image */}
          <Link
            href={fullPath}
            className="block relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105 object-right"
            />
          </Link>

          {/* Content */}
          <div className="p-3 lg:p-4 flex flex-col flex-grow bg-[#f9f9f9] rounded-b-[20px] lg:rounded-b-[24px]">

            {/* Title + Price */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <Link
                href={fullPath}
                className="hover:opacity-80 transition-opacity flex-1 min-w-0"
              >
                <h3 className="font-semibold text-base lg:text-lg leading-tight line-clamp-2 text-black">
                  {name}
                </h3>
              </Link>

              <div className="flex-shrink-0 text-right">
                <span className="text-gray-500 text-[10px] lg:text-xs block leading-none">
                  From
                </span>
                <span className="font-bold text-lg lg:text-xl leading-tight text-black">
                  ${price}
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-500 text-xs lg:text-sm mb-2 line-clamp-1">
              {subtitle}
            </p>

            {/* Rating */}
            <div className="mb-3">
              <div className="inline-flex items-center gap-1.5">
                <div className="flex items-center gap-0.5 text-yellow-400">
                  {[...Array(4)].map((_, i) => <Star key={i} />)}
                  <HalfStar />
                </div>
                <span className="text-[11px] lg:text-xs text-gray-400 font-medium">
                  {rating} ({reviews})
                </span>
              </div>
            </div>

            {/* CTA Button - Now Dynamic */}
            <div className="mt-auto">
              <Link
                href={fullPath}
                className="w-full h-10 lg:h-11 rounded-full bg-black text-white font-medium text-xs lg:text-sm flex items-center justify-center hover:bg-gray-800 transition-all active:scale-[0.98]"
              >
                {buttonText}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ... Star and HalfStar functions remain the same
function Star() {
  return (
    <svg
      className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-yellow-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function HalfStar() {
  return (
    <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5" viewBox="0 0 20 20">
      <defs>
        <linearGradient id="half-star">
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#D1D5DB" />
        </linearGradient>
      </defs>
      <path
        fill="url(#half-star)"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}