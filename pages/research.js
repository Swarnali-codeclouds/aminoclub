"use client";

import { useState, useMemo } from "react";
import StoreHeader from "../components/Store/StoreHeader";
import ProductGrid from "../components/Store/ProductGrid";
import products from "../data/products";

const ArrowIcon = (props) => (
<svg {...props} className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#ffffff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
);

export default function ListingPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // SEARCH LOGIC
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(q) ||
          product.subtitle.toLowerCase().includes(q)
      );
    }

    // SORT LOGIC
    switch (sort) {
      case "az":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default to "popular" based on reviews
        list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    }

    return list;
  }, [search, sort]);

  return (
    <div className="bg-white min-h-screen font-anek">
      <div className="py-8 lg:py-16 max-w-7xl mx-auto px-4">
        
        {/* Header section with Title, Search, and Sort */}
        <div className="mb-10">
         <StoreHeader 
  title="Peptide Research"
  description="Explore scientific studies and clinical data on our peptides"
  search={search}
  onSearchChange={setSearch}
  sort={sort}
  onSortChange={setSort}
/>
        </div>

        {/* Product Listing */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts}
          buttonText="View Research" 
          basePath="store" 
          icon={ArrowIcon} />
        ) : (
          <div className="py-24 text-center">
            <p className="text-gray-500 text-lg">No products found matching "{search}"</p>
            <button 
              onClick={() => setSearch("")}
              className="mt-4 text-sm font-semibold text-black underline underline-offset-4"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}