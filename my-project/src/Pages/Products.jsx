import { useEffect, useMemo, useState } from "react";
import {
  Filter,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../data/productData";
import { slugify } from "../utils/slugify";

/* =========================
   FLATTEN productsData
========================= */
const INVENTORY = productsData.flatMap((category) =>
  category.products.map((product, index) => ({
    id: `${category.category}-${index}`,
    title: product.name,
    category: category.category,
    brand: category.category.split(" ")[0],
    country: "India",
    thumbnail: product.image,
    description: product.description,
  }))
);

const unique = (arr) => Array.from(new Set(arr)).sort();

function Products() {
  /* =========================
     STATE
  ========================= */
  const navigate = useNavigate(); // ✅ REQUIRED
  const [q, setQ] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    country: [],
  });
  const [page, setPage] = useState(1);
  const pageSize = 12;

  /* =========================
     FILTER OPTIONS
  ========================= */
  const options = useMemo(() => {
    return {
      categories: unique(INVENTORY.map((i) => i.category)),
      brands: unique(INVENTORY.map((i) => i.brand)),
      countries: unique(INVENTORY.map((i) => i.country)),
    };
  }, []);

  /* =========================
     FILTER LOGIC
  ========================= */
  const filtered = useMemo(() => {
    return INVENTORY.filter((item) => {
      const text = `${item.title} ${item.category}`.toLowerCase();
      if (q && !text.includes(q.toLowerCase())) return false;
      if (filters.category.length && !filters.category.includes(item.category))
        return false;
      if (filters.brand.length && !filters.brand.includes(item.brand))
        return false;
      if (filters.country.length && !filters.country.includes(item.country))
        return false;
      return true;
    });
  }, [q, filters]);

  /* =========================
     PAGINATION
  ========================= */
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [q, filters]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  /* =========================
     HANDLERS
  ========================= */
  const toggle = (key, value) => {
    setFilters((f) => {
      const set = new Set(f[key]);
      set.has(value) ? set.delete(value) : set.add(value);
      return { ...f, [key]: Array.from(set) };
    });
  };

  const clearAll = () => {
    setFilters({ category: [], brand: [], country: [] });
    setQ("");
  };

  /* =========================
     UI
  ========================= */
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-700" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Our Products</h1>
          <p className="mt-2 text-blue-100 max-w-2xl">
            Explore our complete range of textile machinery spare parts and
            electronic cards.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* SIDEBAR */}
          <aside className="md:col-span-3">
            <div className="hidden md:block sticky top-24 space-y-6">
              <SearchBox q={q} setQ={setQ} />
              <FiltersPanel
                filters={filters}
                options={options}
                toggle={toggle}
                clearAll={clearAll}
              />
            </div>

            {/* Mobile filters */}
            {openFilters && (
              <div className="fixed inset-0 z-50">
                <div
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setOpenFilters(false)}
                />
                <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <button
                      onClick={() => setOpenFilters(false)}
                      className="p-2 rounded-lg border"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <SearchBox q={q} setQ={setQ} />
                  <FiltersPanel
                    filters={filters}
                    options={options}
                    toggle={toggle}
                    clearAll={clearAll}
                  />
                </div>
              </div>
            )}
          </aside>

          {/* RESULTS */}
          <div className="md:col-span-9">
            {/* Top bar */}
            <div className="md:hidden mb-4 flex justify-between">
              <button
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2"
                onClick={() => setOpenFilters(true)}
              >
                <Filter size={16} /> Filters
              </button>
            </div>

            {/* Summary */}
            <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
              <p>{filtered.length} results</p>
              <button onClick={clearAll} className="hover:text-blue-700">
                Clear all
              </button>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paged.map((p) => (
                <article
                  key={p.id}
                  className="group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition"
                >
                  {/* IMAGE (NO BLUR, FULL IMAGE) */}
                  <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                      {p.category}
                    </span>

                    <h3 className="mt-2 font-semibold text-lg line-clamp-2">
                      {p.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {p.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() =>
                          navigate(
                            `/products/${slugify(p.category)}/${slugify(
                              p.title
                            )}`
                          )
                        }
                        className="inline-flex items-center gap-1 text-blue-700 font-medium hover:underline"
                      >
                        Enquire <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                className="p-2 rounded-lg border disabled:opacity-40"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                <ChevronLeft />
              </button>

              <span className="px-3 py-2 rounded-lg border text-sm">
                Page {page} of {totalPages}
              </span>

              <button
                className="p-2 rounded-lg border disabled:opacity-40"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================
   COMPONENTS
========================= */
function SearchBox({ q, setQ }) {
  return (
    <div className="relative">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2"
        size={16}
      />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-xl border pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-blue-700"
      />
    </div>
  );
}

function FiltersPanel({ filters, options, toggle, clearAll }) {
  return (
    <div className="space-y-6">
      <fieldset className="border rounded-xl p-4">
        <legend className="text-sm font-semibold">Category</legend>
        <div className="mt-2 space-y-2 text-sm">
          {options.categories.map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-700"
                checked={filters.category.includes(c)}
                onChange={() => toggle("category", c)}
              />
              {c}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="border rounded-xl p-4">
        <legend className="text-sm font-semibold">Brand</legend>
        <div className="mt-2 space-y-2 text-sm">
          {options.brands.map((b) => (
            <label key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-700"
                checked={filters.brand.includes(b)}
                onChange={() => toggle("brand", b)}
              />
              {b}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="border rounded-xl p-4">
        <legend className="text-sm font-semibold">Location</legend>
        <div className="mt-2 space-y-2 text-sm">
          {options.countries.map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-700"
                checked={filters.country.includes(c)}
                onChange={() => toggle("country", c)}
              />
              {c}
            </label>
          ))}
        </div>
      </fieldset>

      <button onClick={clearAll} className="text-sm underline">
        Reset all
      </button>
    </div>
  );
}

/* =========================
   EXPORTS
========================= */
export default Products;
export { Products };
