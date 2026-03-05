import { Anek_Latin, Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/AuthContext";
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
  // We removed the 'hideNavbar' logic entirely to keep it visible everywhere

  return (
    <main className={`${anek.variable} ${poppins.variable} font-sans`}>
      <AuthProvider>
        <CartProvider>
          {/* Navbar is now outside any conditional checks */}
          <Navbar />

          {/* Page Content */}
          <Component {...pageProps} />

          {/* ✅ Global Cart Drawer */}
          <CartDrawer />
        </CartProvider>
      </AuthProvider>
      <Footer />
    </main>
  );
}