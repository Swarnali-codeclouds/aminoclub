"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import FloatingInput from "@/components/FloatingInput"; 
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [userChecked, setUserChecked] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Delivery fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");

  // Discount code
  const [discountCode, setDiscountCode] = useState("");

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

        {/* LEFT SIDE: CART SUMMARY */}
        <div className="bg-gray-50 p-8 space-y-6">
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
            <FloatingInput
              label="Discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
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

        {/* RIGHT SIDE: CONTACT, DELIVERY, PAYMENT */}
        <div className="p-8 space-y-6">

          {/* Contact */}
          <FloatingInput
            label="Email or mobile phone number"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />

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
              <FloatingInput label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <FloatingInput label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>

            <FloatingInput label="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />

            <div className="grid grid-cols-3 gap-3">
              <FloatingInput label="City" value={city} onChange={(e) => setCity(e.target.value)} required />
              <FloatingInput label="State" value={state} onChange={(e) => setState(e.target.value)} required />
              <FloatingInput label="PIN Code" value={pin} onChange={(e) => setPin(e.target.value)} required />
            </div>
          </div>

          {/* Payment */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Payment</h2>

            {/* Credit Card Option */}
            <label
              className={`flex items-center gap-3 cursor-pointer border p-3 rounded-md
                ${paymentMethod === "card" ? "border-black bg-black/5" : "border-gray-300"}`}
            >
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="hidden"
              />
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${paymentMethod === "card" ? "border-black" : "border-gray-400"}`}>
                {paymentMethod === "card" && (
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                )}
              </div>
              <span className="font-medium">Credit Card</span>
            </label>

            {/* Credit Card Info Box */}
            {paymentMethod === "card" && (
              <div className="p-4 mt-3 border rounded-md bg-gray-50 space-y-3 transition-all duration-300">
                <FloatingInput label="Card Number" value="" onChange={() => {}} required />
                <div className="grid grid-cols-2 gap-3">
                  <FloatingInput label="Expiration Date (MM/YY)" value="" onChange={() => {}} required />
                  <FloatingInput label="Security Code" value="" onChange={() => {}} required />
                </div>
                <FloatingInput label="Name on Card" value="" onChange={() => {}} required />
              </div>
            )}

            {/* COD Option */}
            <label
              className={`flex items-center gap-3 cursor-pointer border p-3 rounded-md
                ${paymentMethod === "cod" ? "border-black bg-black/5" : "border-gray-300"}`}
            >
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="hidden"
              />
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${paymentMethod === "cod" ? "border-black" : "border-gray-400"}`}>
                {paymentMethod === "cod" && (
                  <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                )}
              </div>
              <span className="font-medium">Cash on Delivery</span>
            </label>
          </div>

          {/* Pay Button */}
          <button className="w-full bg-black hover:bg-black/80 text-white font-semibold py-3 rounded-md">
            Pay now
          </button>

        </div>
      </div>
    </div>
  );
}