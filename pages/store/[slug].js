import { useRouter } from "next/router";
import products from "../../data/products";
import Navbar from "../../components/Navbar";
import ProductHero from "../../components/ProductHero";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <ProductHero product={product} />
        <FinalCTA />
      <Footer />
    </>
  );
}