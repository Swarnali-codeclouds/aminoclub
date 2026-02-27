import { useCart } from "../context/CartContext";

export default function AddToCartButton({
  product,
  selectedVariant,
  selectedBundle,
  quantity,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const id = selectedBundle
      ? `${product.slug}-bundle-${selectedBundle.id}`
      : `${product.slug}-variant-${selectedVariant.id}`;

    const name = selectedBundle
      ? `${product.name} (${selectedBundle.label})`
      : product.name;

    const variant = selectedBundle ? "bundle" : selectedVariant.dosage;

    const price = selectedBundle
      ? selectedVariant.price * selectedBundle.bottles * quantity * (1 - (selectedBundle.saving ?? 0) / 100)
      : selectedVariant.price * quantity;

    addToCart({
      id,
      name,
      variant,
      price,
      qty: quantity,
      image: product.displayImage,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex-1 h-12 rounded-full bg-black text-white font-medium text-sm"
    >
      Add to Cart
    </button>
  );
}