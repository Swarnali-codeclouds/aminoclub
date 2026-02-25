import Navbar from "../components/Navbar";
 import Hero from "../components/Hero";
import Guarantee from "../components/Guarantee";
 import UnlockAccess from "../components/UnlockAccess";
 import Features from "../components/Features";
import Quality from "../components/Quality";
import WhyChoose from "../components/WhyChoose";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Guarantee />
       <UnlockAccess />
    <Features />
      <Quality />
      <WhyChoose />
       <FAQ />
      <FinalCTA />
     <Footer />  

    </>
  );

}
