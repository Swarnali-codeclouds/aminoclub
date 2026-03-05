"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.terms) return;

  // Save user data to localStorage
  const userData = {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
  };
  localStorage.setItem("user", JSON.stringify(userData));

  // Redirect to login page after successful signup
  router.push("/login");
};
  const inputClass =
    "peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none focus:border-black";

  const labelClass =
    "absolute left-4 text-gray-500 text-sm transition-all duration-200 pointer-events-none";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

      {/* First Name */}
      <div className="relative mb-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder=" "
          className={inputClass}
          required
        />
        <label
          className={`${labelClass} ${
            formData.firstName
              ? "top-2 text-xs text-black"
              : "top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black"
          }`}
        >
          First Name
        </label>
      </div>

      {/* Last Name */}
      <div className="relative mb-4">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder=" "
          className={inputClass}
          required
        />
        <label
          className={`${labelClass} ${
            formData.lastName
              ? "top-2 text-xs text-black"
              : "top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black"
          }`}
        >
          Last Name
        </label>
      </div>

      {/* Email */}
      <div className="relative mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=" "
          className={inputClass}
          required
        />
        <label
          className={`${labelClass} ${
            formData.email
              ? "top-2 text-xs text-black"
              : "top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black"
          }`}
        >
          Email Address
        </label>
      </div>

      {/* Password */}
      <div className="relative mb-4">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder=" "
          className={inputClass}
          required
        />
        <label
          className={`${labelClass} ${
            formData.password
              ? "top-2 text-xs text-black"
              : "top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black"
          }`}
        >
          Password
        </label>
      </div>

      {/* Terms Checkbox */}
      <label className="flex items-start gap-3 mt-6 cursor-pointer group">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="sr-only"
            required
          />
          <div
            className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all
              ${
                formData.terms
                  ? "bg-black border-black"
                  : "border-gray-300 group-hover:border-gray-400"
              }`}
          >
            {formData.terms && (
              <svg
                className="w-3 h-3 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        <span className="text-sm text-gray-500 leading-relaxed">
          I confirm that I am at least 18 years of age and agree to the{" "}
          <Link href="/terms" className="text-black underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-black underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!formData.terms}
        className={`w-full mt-6 py-3  text-white text-sm font-medium transition-all rounded-full
          ${
            formData.terms
              ? "bg-black hover:opacity-90"
              : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        Create Account
      </button>

      {/* Login Link */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500 font-anek">
            Already have an account?
          </span>
        </div>
      </div>

      <Link
        href="/login"
        className="w-full h-12 font-poppins border border-gray-300 hover:border-black text-black font-medium rounded-full transition-colors flex items-center justify-center"
      >
        Sign In
      </Link>
    </form>
  );
}