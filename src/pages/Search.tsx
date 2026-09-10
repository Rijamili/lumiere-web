import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SERVICES, CATEGORIES } from "../data/mockData";
import ServiceCard from "../components/ServiceCard";

type SortKey = "popularity" | "rating" | "price" | "nearest";

export default function Search() {
  const [params, setParams] = useSearchParams();
  const activeCategory = params.get("category") || "All";
  const [sort, setSort] = useState<SortKey>("popularity");
  const [maxPrice, setMaxPrice] = useState(200);
  const [minRating, setMinRating] = useState(0);
  const [q, setQ] = useState("");

  const categoryNames = ["All", ...CATEGORIES.map((c) => c.name)];

  function setCategory(name: string) {
    if (name === "All") setParams({});
    else setParams({ category: name });
  }

  const filtered = useMemo(() => {
    let list = SERVICES.filter(
      (s) =>
        s.price <= maxPrice &&
        s.rating >= minRating &&
        (activeCategory === "All" || s.category === activeCategory) &&
        (q === "" ||
          s.name.toLowerCase().includes(q.toLowerCase()) ||
          s.category.toLowerCase().includes(q.toLowerCase()) ||
          s.salon.toLowerCase().includes(q.toLowerCase()))
    );
    if (sort === "price") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "nearest") list = [...list].sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    return list;
  }, [sort, maxPrice, minRating, q, activeCategory]);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
      <h1 className="font-display text-3xl mb-5">Find your next appointment</h1>

      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-1">
        {categoryNames.map((name) => (
          <button
            key={name}
            onClick={() => setCategory(name)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] border transition-colors ${
              activeCategory === name
                ? "bg-charcoal text-white border-charcoal"
                : "bg-white text-charcoalSoft border-line hover:border-charcoal"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="flex gap-2.5 mb-7 flex-wrap">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search service, salon, or professional"
          className="flex-1 min-w-[240px] px-4 py-3 border border-line rounded text-sm outline-none"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="px-4 py-3 border border-line rounded text-sm bg-white"
        >
          <option value="popularity">Sort: Popularity</option>
          <option value="rating">Sort: Rating</option>
          <option value="price">Sort: Price</option>
          <option value="nearest">Sort: Nearest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <aside>
          <div className="card p-5">
            <div className="font-semibold mb-4 text-sm">Filters</div>
            <div className="mb-5">
              <label className="text-[13px] text-charcoalSoft">Max price: ${maxPrice}</label>
              <input
                type="range"
                min="10"
                max="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(+e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-5">
              <label className="text-[13px] text-charcoalSoft">Minimum rating</label>
              <div className="flex gap-1.5 mt-2 flex-wrap">
                {[0, 4, 4.5, 4.8].map((r) => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r)}
                    className={`text-xs px-2.5 py-1.5 rounded border border-line ${
                      minRating === r ? "bg-charcoal text-white" : "bg-white text-charcoal"
                    }`}
                  >
                    {r === 0 ? "Any" : `${r}+`}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[13px] text-charcoalSoft">Availability</label>
              <div className="text-sm mt-2">
                <label className="block mb-1.5">
                  <input type="checkbox" defaultChecked /> Today
                </label>
                <label className="block mb-1.5">
                  <input type="checkbox" /> This week
                </label>
              </div>
            </div>
          </div>
        </aside>
        <div>
          <p className="text-[13px] text-charcoalSoft mb-4">
            {filtered.length} service{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-charcoalSoft">
              <p className="text-base mb-1.5">No services match your filters</p>
              <p className="text-[13px]">Try widening your price range or rating filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filtered.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
