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

          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-200 rounded-full px-5 py-2.5 text-sm"
          >
            <option value="popular">Most Popular</option>
            <option value="az">A – Z</option>
            <option value="za">Z – A</option>
          </select>
        </div>
      </div>
    </div>
  );
}