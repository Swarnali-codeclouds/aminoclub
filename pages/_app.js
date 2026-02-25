import { Anek_Latin, Poppins } from 'next/font/google';
import '../styles/globals.css';

// Initialize the fonts
const anek = Anek_Latin({
  subsets: ['latin'],
  variable: '--font-anek', // This matches the variable in your CSS screenshot
});

const poppins = Poppins({
  weight: ['400', '700'], // Poppins requires specific weights
  subsets: ['latin'],
  variable: '--font-poppins',
});

function MyApp({ Component, pageProps }) {
  return (
    // Apply the font variables to a wrapper div
    <main className={`${anek.variable} ${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;