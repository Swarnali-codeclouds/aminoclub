"use client"; // if using Next.js app directory

import { useState } from "react";

export default function SelectCountry({ value, onChange, label = "Country", required = true }) {
  const countries = [
    { code: "", name: "Select..." },
    { code: "-", name: "-" },
    { code: "us", name: "United States" },
    { code: "ca", name: "Canada" },
    { code: "uk", name: "United Kingdom" },
    // Add more countries here
  ];

  return (
    <div className="relative w-full">
          <select
        id="country_code"
        name="country_code"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black bg-white"
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code} disabled={c.code === ""}>
            {c.name}
          </option>
        ))}
      </select>

      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4 4 4-4" />
        </svg>
      </span>
    </div>
  );
}