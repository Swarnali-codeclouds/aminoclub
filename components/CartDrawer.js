"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import QuantityDropdown from "./QuantityDropdown";

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cartItems, removeFromCart, updateQty } =
    useCart();
  const router = useRouter();

  /* ---------- Calculations ---------- */
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  const FREE_SHIPPING = 100;
  const SECOND_TIER = 175;

  const remaining = Math.max(FREE_SHIPPING - subtotal, 0);
  const progress1 = Math.min((subtotal / FREE_SHIPPING) * 100, 100);
  const progress2 =
    subtotal > FREE_SHIPPING
      ? Math.min(
          ((subtotal - FREE_SHIPPING) / (SECOND_TIER - FREE_SHIPPING)) * 100,
          100,
        )
      : 0;

  const [showPromo, setShowPromo] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  return (
    <>
      {/* Overlay */}
      {cartOpen && (
        <div
          className="font-anek fixed inset-0 bg-black/40 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`font-anek fixed top-0 right-0 h-full w-full md:w-[450px] flex flex-col bg-[#f8f8f8] shadow-2xl z-50 transform transition-transform duration-300 -z-40
        ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#e8e8e8] bg-white">
          <div className="flex items-baseline gap-1.5">
            <h3 className="text-sm font-semibold text-black">Cart</h3>
            <span className="text-xs text-[#999]">({cartItems.length})</span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col">
          {cartItems.length === 0 ? (
            /* Empty State */
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 border">
                🛒
              </div>
              <h3 className="text-lg font-semibold mb-1">Your cart is empty</h3>
              <p className="text-sm text-gray-500 mb-6">
                Looks like you haven't added anything yet.
              </p>
              <button
                onClick={() => {
                  setCartOpen(false);
                  router.push("/store");
                }}
                className="rounded-full bg-black px-6 py-3 text-sm text-white"
              >
                Start Shopping →
              </button>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex gap-3 p-4 bg-white border rounded-2xl border-[#e8e8e8]"
                  >
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-1 right-1 w-8 h-8 text-gray-400 hover:text-red-500"
                    >
                      ✕
                    </button>

                    <div className="w-20 h-20 relative bg-gray-50 rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <span className="font-semibold text-sm">{item.name}</span>

                      <div className="flex justify-between mt-auto items-center">
                        <QuantityDropdown
                          value={item.qty}
                          onChange={(qty) => updateQty(item.id, qty)}
                        />
                        <span className="font-bold">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Shipment Protection */}
                <div className="flex items-center justify-between p-4 bg-white border rounded-2xl border-[#e8e8e8]">
                  <div className="flex items-center gap-2 group relative">
                    <svg
                      className="w-4 h-4 text-green-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>

                    <span className="text-xs font-medium">
                      Shipment Protection
                    </span>

                    <span className="w-4 h-4 text-[8px] bg-gray-200 rounded-full flex items-center justify-center cursor-help">
                      ?
                    </span>

                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                      Covers lost, stolen, or damaged packages at no extra cost.
                    </div>
                  </div>

                  <span className="text-green-600 font-semibold text-sm">
                    Free
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="border-t border-[#e8e8e8] px-4 py-3 bg-white">
                <button
                  onClick={() => setShowPromo((p) => !p)}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  Add promo code
                </button>

                <div
                  className={`transition-all overflow-hidden ${
                    showPromo ? "max-h-24 mt-3" : "max-h-0"
                  }`}
                >
                  <div className="flex gap-2">
                    <input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 h-10 rounded-full border px-4 text-sm"
                    />
                    <button className="h-10 px-5 rounded-full bg-black text-white text-sm">
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtotal */}
              <div className="border-t border-[#e8e8e8] px-4 py-4 bg-white">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-sm">Subtotal</span>
                  <span className="text-xl font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="flex align-middle gap-0.5 text-xs text-gray-600">
                    <span className="flex gap-0.5 text-green-600 font-semibold">
                      <svg
                        class="w-4 h-4 text-green-600 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        ></path>
                      </svg>
                      ${remaining.toFixed(2)}
                    </span>{" "}
                    away from free shipping
                  </span>

                  <div className="flex gap-1 mt-2">
                    <div className="flex-1 h-1.5 bg-green-100 rounded-full">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all"
                        style={{ width: `${progress1}%` }}
                      />
                    </div>
                    <div className="flex-1 h-1.5 bg-green-100 rounded-full">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all"
                        style={{ width: `${progress2}%` }}
                      />
                    </div>
                  </div>
                </div>
<Link href="/checkout">
  <button className="w-full h-12 bg-black text-white rounded-full font-medium">
    Proceed to Checkout →
  </button>
</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
