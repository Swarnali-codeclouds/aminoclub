import ProductCard from "./ProductCard";
import AccessCard from "./AccessCard";

export default function ProductGrid({ products }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {products.map((product) => (
        <li key={product.slug} className="h-full">
          <ProductCard product={product} />
        </li>
      ))}

      <AccessCard />
    </ul>
  );
}