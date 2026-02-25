const categories = [
  "Recovery Research",
  "Skin & Anti-Aging Research",
  "Longevity Research",
  "Cognitive Research",
  "Sleep Research",
];

export default function StoreFilters({ activeCategory, onChange }) {
  return (
    <div className="mb-6 font-anek">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {/* All button */}
        <button
          onClick={() => onChange("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
            ${
              activeCategory === "All"
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
              ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}