import React from "react";
import ProductCard from "./ProductCard";
import AccessCard from "./AccessCard";

/**
 * @param {Array} products - Array of product objects
 * @param {boolean} showAccessCard - Whether to show the promo card
 * @param {string} buttonText - The text to show on all buttons (e.g., "Read Research")
 * @param {string} basePath - The URL prefix (e.g., "store" or "research")
 * @param {React.Component} icon - An optional icon component to pass to the ProductCard
 */
export default function ProductGrid({ 
  products, 
  showAccessCard = false, 
  buttonText = "View", 
  basePath = "store",
  icon: IconProp // Rename to start with a Capital letter so React can render it
}) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {products.map((product, index) => (
        <React.Fragment key={product.slug || index}>
          <li className="h-full">
            <ProductCard 
              product={product} 
              // Priority: 1. Individual product ctaText, 2. Grid-level buttonText
              buttonText={product.ctaText || buttonText} 
              basePath={basePath}
              icon={IconProp} // Pass the component down
            />
          </li>

          {/* Inject AccessCard after the 7th product (index 6) */}
          {showAccessCard && index === 6 && (
            <li className="col-span-full my-4">
              <AccessCard />
            </li>
          )}
        </React.Fragment>
      ))}

      {/* Fallback for short lists (Only if it hasn't been shown yet) */}
      {showAccessCard && products.length <= 6 && (
        <li className="col-span-full">
          <AccessCard />
        </li>
      )}
    </ul>
  );
}