"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext"; // Import your new Auth hook

export default function Header() {
  const { cartItems, setCartOpen } = useCart();
  const { user, logout } = useAuth(); // Consume global auth state and logout function
  const cartCount = cartItems.length;

  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Still needed to prevent hydration mismatch (server vs client HTML)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header className="sticky top-0 z-50 h-16 lg:h-[70px] bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <nav className="content-container flex items-center justify-between w-full h-full">
          
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M3 6H21M3 12H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <Link href="/" className="flex items-center">
              <img
                src="/images/LogoMain.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 font-poppins">
            <Link href="/store" className="px-4 py-2 text-sm text-black/70 hover:text-black rounded-full hover:bg-black/5">
              Products
            </Link>
            <Link href="/research" className="px-4 py-2 text-sm text-black/70 hover:text-black rounded-full hover:bg-black/5">
              Research
            </Link>
            <Link href="/affiliate" className="px-4 py-2 text-sm text-black/70 hover:text-black rounded-full hover:bg-black/5">
              Partner Program
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm text-black/70 hover:text-black rounded-full hover:bg-black/5">
              Contact Us
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            
            {/* Account - Logic is now driven by AuthContext */}
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/account/dashboard"
                  className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm uppercase font-anek"
                >
                  {user.name?.charAt(0) || "U"}
                </Link>
              </div>
            ) : (
              <Link
                href="/login"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
            )}

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-black text-white text-[10px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}