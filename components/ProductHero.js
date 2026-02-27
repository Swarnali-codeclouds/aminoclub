// components/ProductHero.js
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import PaymentMethods from "./PaymentMethods";
import AddToCartButton from "./AddToCartButton";

export default function ProductHero({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedBundle, setSelectedBundle] = useState(product.bundles[0]);

  const rightRef = useRef(null);
  const [rightHeight, setRightHeight] = useState(0);

  // Match left image height with right content
  useEffect(() => {
    const updateHeight = () => {
      if (rightRef.current) setRightHeight(rightRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [product]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // NEW: price calculation
  const calculatePrice = () => {
  const base = selectedVariant.price * selectedBundle.bottles * quantity;

  if (!selectedBundle.saving) return base.toFixed(2);

  return (base * (1 - selectedBundle.saving / 100)).toFixed(2);
};

const finalPrice = calculatePrice();

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8 sm:py-4 lg:py-9 sm:px-6 lg:px-8 font-anek">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
        {/* Product Image */}
        <div
          className="bg-[#eeeeee] border border-[#e8e8e8] rounded-[25px] lg:rounded-[24px] p-0 flex items-center justify-center overflow-hidden"
          style={{ minHeight: rightHeight || "300px" }}
        >
          <Image
            src={product.displayImage}
            alt={product.name}
            width={600}
            height={600}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Product Info */}
        <div
          ref={rightRef}
          className="flex flex-col bg-white border border-[#e8e8e8] rounded-[20px] lg:rounded-[24px] p-5 lg:p-7"
        >
          <p className="text-sm text-[#555] italic mb-2">{product.subtitle}</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-black leading-[1] mb-1">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <Star key={i} />
              ))}
              {product.rating % 1 !== 0 && <HalfStar />}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 border border-[#e0e0e0] rounded-full text-xs text-[#555]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-[#666] leading-relaxed mb-5">
            {product.description}
          </p>

          {/* Dosage, Quantity & Price */}
          <div className="lg:flex lg:items-center lg:gap-6 mb-6">
            <div className="flex-1">
              {/* Dosage */}
              <div className="flex items-center mb-3">
                <span className="text-sm font-semibold text-black w-20">
                  Dosage
                </span>
                <div className="flex gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all
                        ${
                          selectedVariant.id === variant.id
                            ? "bg-black text-white border-black"
                            : "bg-white text-[#555] border-[#e0e0e0] hover:border-[#999]"
                        }`}
                    >
                      {variant.dosage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center">
                <span className="text-sm font-semibold text-black w-20">
                  Quantity
                </span>
                <div className="flex items-center border border-[#e0e0e0] rounded-full">
                  <button onClick={decreaseQty} className="w-9 h-9">
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button onClick={increaseQty} className="w-9 h-9">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="text-right">
              <span className="text-2xl font-bold text-black">
                ${finalPrice}
              </span>
            </div>
          </div>

          {/* Bundle & Save */}
          <div className="mt-2">
            <h2 className="text-lg font-bold mb-3">Bundle & Save</h2>
            <div className="overflow-x-auto sm:overflow-visible pt-2">
              <div className="flex gap-2 min-w-max sm:min-w-0">
                {product.bundles.map((bundle) => {
                  const isSelected = selectedBundle.id === bundle.id;

                return (
                  <button
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle)}
                    className={`relative flex items-center gap-3 px-6 py-4 border rounded-lg transition-all flex-shrink-0
                      ${
                        isSelected
                          ? "border-black bg-gray-100"
                          : "border-[#e0e0e0] hover:border-black"
                      }`}
                  >
                    {/* Tag */}
                    {bundle.tag && (
                    <span
                        className={`absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white whitespace-nowrap z-10
                        ${
                            bundle.tag.toLowerCase() === "most popular"
                            ? "bg-teal-600"
                            : "bg-amber-500"
                        }`}
                    >
                        {bundle.tag}
                    </span>
                    )}

                    {/* Bottle Images */}
                    <div className="flex items-center h-12">
                      {[...Array(bundle.bottles)].map((_, i) => (
                        <Image
                          key={i}
                          src={product.displayImage}
                          alt="Bottle"
                          width={22}
                          height={44}
                          className={`object-contain ${
                            bundle.bottles > 1 ? "-mr-1" : ""
                          }`}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <div className="text-left">
                      <p className="text-xs font-medium text-black">{bundle.label}</p>
                      {bundle.saving && (
                        <p className="text-[10px] font-bold text-green-600">
                          Save {bundle.saving}%
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex items-center gap-3 mt-auto pt-6">
            {/* CoA Button */}
            <button
              type="button"
              aria-label="View Certificate of Analysis"
              className="h-12 px-5 border border-[#e0e0e0] rounded-full text-sm font-medium text-[#555] hover:border-[#999] transition-colors"
            >
              CoA
            </button>

            {/* Add to Cart */}
           <AddToCartButton
              product={product}
              selectedVariant={selectedVariant}
              selectedBundle={selectedBundle}
              quantity={quantity}
            />
          </div>
          {/* Shipping & Trust Info */}
          <div className="flex justify-between items-start gap-2 mt-3 py-3 px-3 bg-[#f8f8f8] rounded-xl text-[#555]">
            {/* Delivery Date */}
            <div className="flex flex-col items-center text-center gap-1 flex-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              <span className="text-[11px] leading-tight">
                Tue, Mar 3 – Mon, Mar 9
              </span>
            </div>

            {/* Shipment Protection */}
            <div className="flex flex-col items-center text-center gap-1 flex-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>

              <button
                type="button"
                className="text-[11px] leading-tight inline-flex items-center gap-0.5 cursor-help"
              >
                <span className="underline decoration-dotted decoration-gray-400 underline-offset-2">
                  Free shipment protection
                </span>
                <span className="w-3 h-3 flex items-center justify-center rounded-full bg-gray-300 text-[7px] font-bold text-gray-600">
                  ?
                </span>
              </button>
            </div>

            {/* Overnight Shipping */}
            <div className="flex flex-col items-center text-center gap-1 flex-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              <span className="text-[11px] leading-tight">
                Overnight shipping available
              </span>
            </div>
          </div>
          {/* Klarna Pay Later */}
          <div className="flex items-center gap-2 bg-[rgba(255,179,199,0.1)] border border-[#FFB3C7]/30 rounded-lg px-3 py-2.5 mt-4">
  <img
    src="/images/product-list/pink.svg"
    alt="Klarna"
    width={55}
    height={24}
    className="flex-shrink-0"
  />
  <span className="text-sm text-[#333] leading-tight">
    4 interest-free payments of{" "}
    <span className="font-semibold">
      ${(finalPrice / 4).toFixed(2)}
    </span>
  </span>
</div>
<PaymentMethods />
        </div>
      </div>
    </div>
  );
}

/* Stars unchanged */

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
