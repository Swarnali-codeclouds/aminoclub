import StoreSearch from "./StoreSearch";

export default function StoreHeader({
  search,
  onSearchChange,
  sort,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-6 mb-8 lg:mb-10">
      <div>
        <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-black">
          All Products
        </h1>
        <p className="font-anek text-gray-500 text-sm lg:text-base">
          Premium research peptides with 99%+ purity
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <StoreSearch value={search} onChange={onSearchChange} />

        <div className="font-anek flex items-center gap-3 sm:ml-auto">
          <span className="text-sm text-gray-500 hidden sm:inline">
            Sort by:
          </span>
          <div className="relative">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-full
         px-4 py-2.5 pr-10 text-sm font-medium text-gray-700
         hover:border-gray-300
         focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300
         cursor-pointer transition-all"
          >
            <option value="popular">Most Popular</option>
            <option value="az">A – Z</option>
            <option value="za">Z – A</option>
          </select>
           <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
    <svg
      className="w-4 h-4 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
}