"use client";

import { useEffect } from "react";

export default function MobileMenu({ open, onClose }) {
  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-[767px] bg-white
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b">
          <img
            src="/images/LogoMain.svg"
            alt="Amino Club"
            className="h-7"
          />
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="px-5 py-4 space-y-1">
          {[
            { label: "Products", href: "/store" },
            { label: "Research", href: "/us/research" },
            { label: "Partner Program", href: "/us/affiliate" },
            { label: "Contact us", href: "/us/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between py-3 text-[15px] font-medium text-black"
              onClick={onClose}
            >
              {item.label}
              <span className="text-gray-400">›</span>
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t mx-5 my-4" />

        {/* Secondary */}
        <nav className="px-5 space-y-1">
          <a
            href="/us/account"
            className="flex items-center justify-between py-3 text-[15px] text-gray-500"
            onClick={onClose}
          >
            Account
            <span>›</span>
          </a>
          <button
            onClick={onClose}
            className="flex w-full items-center justify-between py-3 text-[15px] text-gray-500"
          >
            Cart
            <span>›</span>
          </button>
        </nav>
      </div>
    </>
  );
}