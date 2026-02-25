import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#0a192f]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="content-container">
        <div className="py-14 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            
            {/* Logo + About + Social */}
            <div className="col-span-2 flex flex-col gap-6">
              <a
                className="inline-block w-fit"
                aria-label="Amino Club home"
                href="/us"
              >
                <Image
                  alt="Amino Club"
                  src="/images/LogoWhite.svg"
                  width={160}
                  height={48}
                  className="h-10 w-auto"
                />
              </a>
              <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                Premium research-grade peptides for optimal controlled studies and performance. Third-party tested with Certificate of Analysis.
              </p>

              <div className="flex items-center gap-3 mt-2">
                {/* Discord */}
                <a
                  href="https://discord.gg/gADfdjqWcd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                  aria-label="Follow us on Discord"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/amino.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/Amino_Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                  aria-label="Follow us on X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@amino_club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                  aria-label="Follow us on YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Shop */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Shop</h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/store">All Products</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/research">Research Library</a>
                </li>
                <li>
                  <a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/coa">Certificates of Analysis</a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Support</h3>
              <ul className="flex flex-col gap-2.5">
                <li><a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/contact">Contact Us</a></li>
                <li><a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/faq">FAQ</a></li>
                <li><a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/shipping">Shipping Info</a></li>
                <li><a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/returns">Returns & Refunds</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
              <ul className="flex flex-col gap-2.5">
                <li><a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/privacy">Privacy Policy</a></li>
                <li><a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/terms">Terms of Service</a></li>
                <li><a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/disclaimer">Disclaimer</a></li>
                <li><a className="text-sm text-white/70 hover:text-white transition-colors duration-200" href="/us/research-use">Research Use Only</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-white/70">© 2026 Amino Club. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                </svg>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                </svg>
                <span>99%+ Purity</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                </svg>
                <span>Shipment Protection</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
