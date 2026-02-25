"use client";

import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreHeader from "../components/Store/StoreHeader";
import StoreFilters from "../components/Store/StoreFilters";
import ProductGrid from "../components/Store/ProductGrid";
import products from "../data/products";

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // CATEGORY
    if (activeCategory !== "All") {
      list = list.filter(
        (product) => product.category === activeCategory
      );
    }

    // SEARCH
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(q) ||
          product.subtitle.toLowerCase().includes(q)
      );
    }

    // SORT
    switch (sort) {
      case "az":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    }

    return list;
  }, [activeCategory, search, sort]);

  return (
    <>
      <Navbar />

      <div className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <StoreHeader
            search={search}
            onSearchChange={setSearch}
            sort={sort}
            onSortChange={setSort}
          />

          <StoreFilters
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      <Footer />
    </>
  );
}