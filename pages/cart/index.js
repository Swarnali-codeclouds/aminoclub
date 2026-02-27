import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import Navbar from "@/components/Navbar";

export default function CartPage() {
  const { cartItems, updateQty, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />
      <div className="py-8 bg-white min-h-screen font-anek">
        <div className="content-container max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
            <h1 className="font-semibold text-2xl sm:text-3xl text-black">
              Shopping Cart
            </h1>
            <p className="text-gray-500 text-sm">
              {cartItems.length} item{cartItems.length !== 1 && "s"} in your cart
            </p>
          </div>

          <Link
            href="/store"
            className="self-start sm:self-auto py-2.5 px-5 rounded-full border border-brand-black text-brand-black font-medium text-sm leading-none hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Cart items */}
          <table className="w-full text-sm">
      {/* HEADER */}
      <thead className="border-y border-gray-200 text-gray-500">
        <tr className="text-left">
          <th className="py-4">Product</th>
          <th></th>
          <th className="text-center">Qty</th>
          <th className="hidden sm:table-cell text-right">Price</th>
          <th className="text-right">Total</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody className="divide-y">
        {cartItems.map((item) => (
          <tr key={item.id} className="align-top">
            {/* IMAGE */}
            <td className="py-4 w-20 sm:w-28">
              <Link href={`/store/${item.slug}`}>
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </td>

            {/* TITLE */}
            <td className="py-4">
              <Link href={`/store/${item.slug}`} className="hover:underline">
                <p className="font-medium text-brand-black">
                  {item.title}
                </p>
              </Link>

              <p className="text-xs text-gray-500">{item.variant}</p>

              {item.bundleDiscount && (
                <span className="inline-block mt-1 px-2 py-0.5 text-sm font-medium bg-teal-100 text-teal-800 rounded">
                  Bundle: {item.bundleDiscount}
                </span>
              )}
            </td>

            {/* QTY */}
            <td className="py-4">
              <div className="flex items-center justify-center gap-2">
                <div className="relative">
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      updateQty(item.id, Number(e.target.value))
                    }
                    className="appearance-none w-16 h-10 text-center border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-black/20"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    ▼
                  </span>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            </td>

            {/* UNIT PRICE */}
            <td className="py-4 hidden sm:table-cell text-right">
              ${item.price.toFixed(2)}
            </td>

            {/* TOTAL */}
            <td className="py-4 text-right">
              <div className="flex flex-col items-end gap-1">
                {item.originalTotal && (
                  <span className="text-xs text-gray-400 line-through">
                    ${item.originalTotal.toFixed(2)}
                  </span>
                )}

                <span className="text-lg font-bold text-green-600">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

          {/* Order summary */}
          {cartItems.length > 0 && (
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="font-semibold text-xl mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-black">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>$0.00</span>
                  </div>
                </div>

                <div className="h-px bg-gray-200 my-4" />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="mt-5 w-full h-12 rounded-full bg-black text-white text-sm font-medium inline-flex items-center justify-center hover:bg-black/90 transition"
                >
                  Proceed to Checkout →
                </Link>

                <p className="text-center text-xs text-gray-500 mt-2">
                  Secure checkout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}