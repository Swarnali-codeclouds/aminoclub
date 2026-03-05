"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [userChecked, setUserChecked] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/login");
    } else {
      try {
        const userObj = JSON.parse(storedUser);
        setUserEmail(userObj.email || "");
      } catch {
        setUserEmail(storedUser);
      }
    }

    setUserChecked(true);
  }, [router]);

  if (!userChecked) return null;

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center p-6 font-anek">
      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white shadow-sm">

        {/* LEFT SIDE */}
        <div className="p-8 space-y-6">

          {/* Contact */}
          <div>
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold text-lg">Contact</h2>
              <Link href="/login">
                <button className="text-sm text-orange-500 font-poppins cursor-pointer">
                  Sign in
                </button>
              </Link>
            </div>
            <input
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email or mobile phone number"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Delivery */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Delivery</h2>

            <select className="w-full border rounded-md px-4 py-3">
              <option>India</option>
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Australia</option>
            </select>

            <div className="grid grid-cols-2 gap-3">
              <input placeholder="First name" className="border rounded-md px-4 py-3" />
              <input placeholder="Last name" className="border rounded-md px-4 py-3" />
            </div>

            <input placeholder="Address" className="w-full border rounded-md px-4 py-3" />

            <div className="grid grid-cols-3 gap-3">
              <input placeholder="City" className="border rounded-md px-4 py-3" />
              <input placeholder="State" className="border rounded-md px-4 py-3" />
              <input placeholder="PIN code" className="border rounded-md px-4 py-3" />
            </div>
          </div>

          {/* Payment */}
          <div>
  <h2 className="font-semibold text-lg mb-3">Payment</h2>

  {/* Credit Card Option */}
  <label
    className={`flex items-center gap-3 cursor-pointer border p-3 rounded-md
      ${paymentMethod === "card" ? "border-orange-500 bg-orange-50" : "border-gray-300"}`}
  >
    <input
      type="radio"
      name="payment"
      value="card"
      checked={paymentMethod === "card"}
      onChange={() => setPaymentMethod("card")}
      className="hidden"
    />
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
        ${paymentMethod === "card" ? "border-orange-500" : "border-gray-400"}`}
    >
      {paymentMethod === "card" && (
       <div class="w-2.5 h-2.5 bg-orange-500 rounded-full -top-1/2 -transform-y-1/2"></div>
      )}
    </div>
    <span className="font-medium">Credit Card</span>
  </label>
   {/* Credit Card Info Box */}
  {paymentMethod === "card" && (
    <div className="p-4 mt-3 border rounded-md bg-gray-50 space-y-3 transition-all duration-300 mb-4">
      <input
        type="text"
        placeholder="Card Number"
        className="w-full border rounded-md px-4 py-3"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Expiration Date (MM/YY)"
          className="border rounded-md px-4 py-3"
        />
        <input
          type="text"
          placeholder="Security Code"
          className="border rounded-md px-4 py-3"
        />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" defaultChecked />
        Use shipping address as billing address
      </label>
    </div>
  )}

  {/* COD Option */}
  <label
    className={`flex items-center gap-3 cursor-pointer border p-3 rounded-md mt-4
      ${paymentMethod === "cod" ? "border-orange-500 bg-orange-50" : "border-gray-300"}`}
  >
    <input
      type="radio"
      name="payment"
      value="cod"
      checked={paymentMethod === "cod"}
      onChange={() => setPaymentMethod("cod")}
      className="hidden"
    />
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
        ${paymentMethod === "cod" ? "border-orange-500" : "border-gray-400"}`}
    >
      {paymentMethod === "cod" && (
        <div class="w-2.5 h-2.5 bg-orange-500 rounded-full -top-1/2 -transform-y-1/2"></div>
      )}
    </div>
    <span className="font-medium">Cash on Delivery</span>
  </label>

 
</div>

          {/* Pay Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md">
            Pay now
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-50 p-8">

          {/* CART PRODUCTS */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-6">
               <div className="bg-gray-200 border rounded-2xl overflow-hidden w-14 h-14 flex items-center justify-center">
  <Image
    src={item.image}
    alt={item.name}
    width={64}
    height={64}
    className="w-full h-full object-contain p-2"
  />
</div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>
                <p className="font-medium">₹{(item.price * item.qty).toFixed(2)}</p>
              </div>
            ))
          )}

          {/* Discount */}
          <div className="flex gap-2 mb-6">
            <input
              placeholder="Discount code"
              className="flex-1 border rounded-md px-3 py-2"
            />
            <button className="border px-4 rounded-md">Apply</button>
          </div>

          {/* Price */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>Calculated at next step</span>
            </div>

            <div className="flex justify-between font-semibold text-lg border-t pt-3">
              <span>Total</span>
              <span>INR ₹{subtotal.toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}