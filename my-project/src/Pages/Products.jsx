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
import { slugify } from "../utils/slugify";
import { useTranslation } from "react-i18next";
import axiosInstance from "../configs/axiosConfig";

/* =========================
   FLATTEN DATA
========================= */

const unique = (arr) => Array.from(new Set(arr)).sort();

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const INVENTORY = productsData;
  const [q, setQ] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    country: [],
  });
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const options = useMemo(() => {
    return {
      categories: unique(INVENTORY.map((i) => i.category)),
      brands: unique(INVENTORY.map((i) => i.brand)),
      countries: unique(INVENTORY.map((i) => i.country)),
    };
  }, [INVENTORY]);

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
  }, [q, filters, INVENTORY]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [q, filters]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

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

  const getProducts = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/admin/view-products");

      if (res.data.success) {
        const formatted = res.data.allProducts.map((p) => ({
          id: p._id,
          title: p.name,
          category: p.category?.trim(),
          brand: p.brand,
          country: p.location,
          thumbnail: `${import.meta.env.VITE_API_URL}/uploads/${p.image?.[0]}`,
          description: p.description,
        }));

        setProductsData(formatted);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 mt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-700" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            {t("products.heroTitle")}
          </h1>
          <p className="mt-2 text-blue-100 max-w-2xl">
            {t("products.heroDesc")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-8">
          <aside className="md:col-span-3">
            <div className="hidden md:block sticky top-24 space-y-6">
              <SearchBox q={q} setQ={setQ} t={t} />
              <FiltersPanel
                filters={filters}
                options={options}
                toggle={toggle}
                clearAll={clearAll}
                t={t}
              />
            </div>

            {openFilters && (
              <div className="fixed inset-0 z-50">
                <div
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setOpenFilters(false)}
                />
                <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{t("products.filters")}</h3>
                    <button
                      onClick={() => setOpenFilters(false)}
                      className="p-2 border rounded"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <SearchBox q={q} setQ={setQ} t={t} />
                  <FiltersPanel
                    filters={filters}
                    options={options}
                    toggle={toggle}
                    clearAll={clearAll}
                    t={t}
                  />
                </div>
              </div>
            )}
          </aside>

          {/* RESULTS */}
          <div className="md:col-span-9">
            <div className="md:hidden mb-4">
              <button
                onClick={() => setOpenFilters(true)}
                className="border px-4 py-2 rounded-xl flex items-center gap-2"
              >
                <Filter size={16} /> {t("products.filters")}
              </button>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-3">
              <p>
                {filtered.length} {t("products.results")}
              </p>
              <button onClick={clearAll}>{t("products.clearAll")}</button>
            </div>
            {loading ? (
              <div className="text-center py-20 text-gray-500">
                Loading products...
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paged.map((p) => (
                  <article
                    key={p.id}
                    className="border rounded-2xl overflow-hidden hover:shadow-xl"
                  >
                    <div className="h-56 bg-gray-100 flex items-center justify-center">
                      <img
                        src={p.thumbnail || "/no-image.png"}
                        alt={p.title}
                        className="max-h-full"
                      />
                    </div>

                    <div className="p-5">
                      <span className="text-xs bg-blue-100 px-2 py-1 rounded">
                        {p.category}
                      </span>

                      <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>

                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {p.description}
                      </p>

                      <button
                        onClick={() =>
                          navigate(
                            `/products/${slugify(p.category)}/${slugify(
                              p.title
                            )}`
                          )
                        }
                        className="mt-3 text-blue-700 flex items-center gap-1"
                      >
                        {t("products.enquire")} <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* PAGINATION */}
            <div className="mt-8 flex justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="border p-2 rounded"
                disabled={page === 1}
              >
                <ChevronLeft />
              </button>

              <span className="px-3 py-2 border rounded text-sm">
                {t("products.page")} {page} {t("products.of")} {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="border p-2 rounded"
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

/* ========================= COMPONENTS ========================= */

function SearchBox({ q, setQ, t }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t("products.searchPlaceholder")}
        className="w-full border rounded-xl pl-9 py-2"
      />
    </div>
  );
}

function FiltersPanel({ filters, options, toggle, clearAll, t }) {
  return (
    <div className="space-y-6">
      <fieldset className="border rounded-xl p-4">
        <legend>{t("products.category")}</legend>
        {options.categories.map((c) => (
          <label key={c} className="flex gap-2">
            <input
              type="checkbox"
              checked={filters.category.includes(c)}
              onChange={() => toggle("category", c)}
            />
            {c}
          </label>
        ))}
      </fieldset>

      <fieldset className="border rounded-xl p-4">
        <legend>{t("products.brand")}</legend>
        {options.brands.map((b) => (
          <label key={b} className="flex gap-2">
            <input
              type="checkbox"
              checked={filters.brand.includes(b)}
              onChange={() => toggle("brand", b)}
            />
            {b}
          </label>
        ))}
      </fieldset>

      <fieldset className="border rounded-xl p-4">
        <legend>{t("products.location")}</legend>
        {options.countries.map((c) => (
          <label key={c} className="flex gap-2">
            <input
              type="checkbox"
              checked={filters.country.includes(c)}
              onChange={() => toggle("country", c)}
            />
            {c}
          </label>
        ))}
      </fieldset>

      <button onClick={clearAll} className="underline text-sm">
        {t("products.resetAll")}
      </button>
    </div>
  );
}

export default Products;
