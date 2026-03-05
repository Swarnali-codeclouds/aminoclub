import { Anek_Latin, Poppins } from "next/font/google";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

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
  return (
    <main className={`${anek.variable} ${poppins.variable} font-sans`}>
      <AuthProvider>
        <CartProvider>
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <Component {...pageProps} />

          {/* Global Cart Drawer */}
          <CartDrawer />

          {/* Footer */}
          <Footer />
        </CartProvider>
      </AuthProvider>
    </main>
  );
}       