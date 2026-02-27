import { useState } from "react";

const QTY_OPTIONS = [
  { qty: 1 },
  { qty: 2, discount: "5% off" },
  { qty: 3, discount: "7.5% off" },
  { qty: 4, discount: "7.5% off" },
  { qty: 5, discount: "7.5% off" },
  { qty: 6, discount: "7.5% off" },
];

export default function QuantityDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-9 px-4 rounded-full border bg-white text-sm font-medium flex items-center gap-2"
      >
        {value}
        <span className="text-xs">
          <svg
            className="w-3.5 h-3.5 text-[#999] transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-44 rounded-xl border bg-white shadow-xl overflow-hidden">
          <div className="max-h-56 overflow-y-auto">
            {QTY_OPTIONS.map((item) => {
              const active = item.qty === value;

              return (
                <button
                  key={item.qty}
                  onClick={() => {
                    onChange(item.qty);
                    setOpen(false);
                  }}
                  className={`w-full px-4 py-2 flex items-center justify-between text-sm transition
                    ${
                      active
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 text-black"
                    }`}
                >
                  <span>{item.qty}</span>

                  {item.discount && (
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-md
                        ${
                          active
                            ? "bg-gray-800 text-white"
                            : "bg-teal-100 text-teal-700"
                        }`}
                    >
                      {item.discount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}