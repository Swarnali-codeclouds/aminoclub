"use client";

import Link from "next/link";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="absolute left-0 top-0 h-full w-[100%] max-w-[700px] bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6">
          {/* Primary links */}
          <div className="px-4 space-y-1">
            <MobileLink href="/store" label="Products" onClose={onClose} />
            <MobileLink href="/research" label="Research" onClose={onClose} />
            <MobileLink
              href="/affiliate"
              label="Partner Program"
              onClose={onClose}
            />
            <MobileLink
              href="/contact"
              label="Contact us"
              onClose={onClose}
            />
          </div>

          {/* Divider */}
          <div className="my-6 mx-6 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          {/* Secondary links */}
          <div className="px-4 space-y-1">
            <MobileSubLink href="/account" label="Account" onClose={onClose} />
            <MobileSubLink href="/cart" label="Cart" onClose={onClose} />
          </div>
        </nav>
      </aside>
    </div>
  );
}

/* ---------- Reusable components ---------- */

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 text-black/20 group-hover:text-black/30 group-hover:translate-x-0.5 transition-all"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileLink({ href, label, onClose }) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex items-center justify-between h-14 px-5 text-[16px] font-medium
                 text-black rounded-2xl hover:bg-gradient-to-r
                 hover:from-gray-50 hover:to-gray-50/50 transition-all"
    >
      <span>{label}</span>
      <ArrowIcon />
    </Link>
  );
}

function MobileSubLink({ href, label, onClose }) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex items-center justify-between h-12 px-5 text-[15px]
                 font-medium text-black/50 hover:text-black/80 rounded-2xl
                 hover:bg-gray-50/80 transition-all"
    >
      <span>{label}</span>
      <ArrowIcon />
    </Link>
  );
}