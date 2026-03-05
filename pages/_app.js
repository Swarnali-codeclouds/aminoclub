import { Anek_Latin, Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

/* ---------------- Fonts ---------------- */

const anek = Anek_Latin({
  subsets: ["latin"],
  variable: "--font-anek",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

/* ---------------- App ---------------- */

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /**
   * Hide Navbar on auth-related pages
   * Add more routes here if needed
   */
  const hideNavbar =
    router.pathname === "/login" ||
    router.pathname === "/signup" ||
    router.pathname.startsWith("/account");

  return (
    <main className={`${anek.variable} ${poppins.variable} font-sans`}>
      <CartProvider>
        <Navbar />

        {/* Page Content */}
        <Component {...pageProps} />

        {/* ✅ Global Cart Drawer */}
        <CartDrawer />
      </CartProvider>
      <Footer />
    </main>
  );
}