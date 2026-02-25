import { Anek_Telugu, Poppins } from "next/font/google";
import "./globals.css";

const anekTelugu = Anek_Telugu({
  subsets: ["latin", "telugu"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-anek",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anekTelugu.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}