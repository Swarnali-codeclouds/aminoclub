import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
   <header
  className="sticky top-0 z-50 h-16 lg:h-[70px] bg-white/95 backdrop-blur
  border-b border-gray-100/80
  shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
  role="banner"
>
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white to-[#fafafc]"></div>

      <nav className="content-container relative flex items-center justify-between w-full h-full" aria-label="Main navigation">
        {/* Left side: mobile menu + logo */}
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="flex items-center justify-center w-10 h-10 text-black/70 hover:text-black rounded-full hover:bg-black/5 transition-all duration-200 focus:outline-none"
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <a
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 rounded-sm"
            aria-label="Amino Club home"
            href="/us"
          >
            <img
              src="/images/LogoMain.svg"
              alt="Amino Club"
              width={120}
              height={40}
              className="h-7 sm:h-8 lg:h-9 w-auto"
            />
          </a>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex items-center gap-1">
          <a href="/us/store" className="relative px-4 py-2 text-[13px] font-medium text-black/75 hover:text-black rounded-full hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition-colors duration-200">
            Products
          </a>
          <a href="/us/research" className="relative px-4 py-2 text-[13px] font-medium text-black/75 hover:text-black rounded-full hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition-colors duration-200">
            Research
          </a>
          <a href="/us/affiliate" className="relative px-4 py-2 text-[13px] font-medium text-black/75 hover:text-black rounded-full hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition-colors duration-200">
            Partner Program
          </a>
          <a href="/us/contact" className="relative px-4 py-2 text-[13px] font-medium text-black/75 hover:text-black rounded-full hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition-colors duration-200">
            Contact us
          </a>
        </div>

        {/* Right side: account & cart */}
        <div className="flex items-center gap-1 lg:gap-2">
          {/* Account */}
          <a
            href="/us/account"
            className="hidden sm:flex items-center justify-center w-10 h-10 text-black/70 hover:text-black rounded-full hover:bg-black/5 transition-all duration-200"
            aria-label="Sign in"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Cart */}
          <button
            className="relative flex items-center justify-center w-10 h-10 text-black/70 hover:text-black rounded-full hover:bg-black/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            {/* Cart count badge */}
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-black text-white text-[10px] font-semibold rounded-full transition-transform duration-200">
              {cartCount}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}