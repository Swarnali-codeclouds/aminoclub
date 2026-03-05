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
  icon: Icon = null
}) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {products.map((product, index) => (
        <React.Fragment key={product.slug || index}>
          <li className="h-full">
            <ProductCard 
              product={product} 
              buttonText={product.ctaText || buttonText} 
              basePath={basePath}
              icon={Icon && (() => <Icon className="mr-2" />)}
            />
          </li>

          {showAccessCard && index === 6 && (
            <li className="col-span-full my-4">
              <AccessCard />
            </li>
          )}
        </React.Fragment>
      ))}

      {showAccessCard && products.length <= 6 && (
        <li className="col-span-full">
          <AccessCard />
        </li>
      )}
    </ul>
  );
}