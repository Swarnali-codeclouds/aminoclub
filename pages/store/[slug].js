import { useRouter } from "next/router";
import products from "../../data/products";
import ProductHero from "../../components/ProductHero";
import TrustBadges from "../../components/TrustBadges";
import ResearchStats from "../../components/ResearchStats";
import COASection from "../../components/COASection";
import MechanismSection from "../../components/MechanismSection";
import ResearchInsights from "../../components/ResearchInsights";
import BeyondRejuvenation from "../../components/BeyondRejuvenation";
import CompoundInformation from "../../components/CompoundInformation";
import FinalCTA from "../../components/FinalCTA";
import SafetyProfileSection from "../../components/SafetyProfileSection";
import ResearchFAQ from "../../components/ResearchFAQ";
import SourcesReferences from "@/components/SourcesReferences";
import ResearchNotice from "@/components/ResearchNotice";

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
      <ProductHero product={product} />
      <TrustBadges />
        <COASection />
        <ResearchStats />    
        <MechanismSection />
        <ResearchInsights />
        <BeyondRejuvenation />
        <SafetyProfileSection />
        <CompoundInformation />
        <ResearchFAQ />
        <SourcesReferences />
        <ResearchNotice />
      <FinalCTA />
    </>
  );
}