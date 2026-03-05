import React from "react";
import ProductCard from "./ProductCard";
import AccessCard from "./AccessCard";

// Added 'showAccessCard' prop with a default of false
export default function ProductGrid({ products, showAccessCard = false }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {products.map((product, index) => (
        <React.Fragment key={product.slug}>
          <li className="h-full">
            <ProductCard product={product} />
          </li>

          {/* Inject AccessCard after the 7th product (index 6).
            The 'col-span-full' ensures it takes up a full row 
            regardless of the grid column count.
          */}
          {showAccessCard && index === 6 && (
            <li className="col-span-full my-4">
              <AccessCard />
            </li>
          )}
        </React.Fragment>
      ))}

      {/* Fallback: If you have FEWER than 7 products and still 
        want the card at the very end, keep this logic. 
        Otherwise, remove the line below.
      */}
      {showAccessCard && products.length <= 6 && (
        <li className="col-span-full">
          <AccessCard />
        </li>
      )}
    </ul>
  );
}