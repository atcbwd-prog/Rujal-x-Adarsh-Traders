import { useContext, useEffect, useMemo, useState } from "react";
import {
  Filter,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { productsData } from "../../data/productData";
import { slugify } from "../../utils/slugify";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";
import axiosInstance from "../../configs/axiosConfig";

/* =========================
   FLATTEN productsData
========================= */

const groupProductsByCategory = (products) => {
  const map = {};

  products.forEach((p) => {
    if (!map[p.category]) {
      map[p.category] = [];
    }

    map[p.category].push({
      name: p.name,
      description: p.description,
      // ✅ multiple images URL array
      images: Array.isArray(p.image)
        ? p.image.map((img) => `${import.meta.env.VITE_API_URL}/uploads/${img}`)
        : [`${import.meta.env.VITE_API_URL}/uploads/${p.image}`],
      price: p.price,
      brand: p.brand,
      location: p.location,
      _id: p._id,
    });
  });

  return Object.entries(map).map(([category, products]) => ({
    category,
    products,
  }));
};

const unique = (arr) => Array.from(new Set(arr)).sort();

function AdminDashboard() {
  /* =========================
     STATE
  ========================= */
  const { state } = useContext(AuthContext);
  const [productsData, setProductsData] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
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
  const INVENTORY = productsData.flatMap((category) =>
    category.products.map((product) => ({
      id: product._id,
      _id: product._id, // ✅ add this
      title: product.name,
      category: category.category,
      brand: product.brand, // ✅ use real brand (not split)
      country: product.location,
      // ✅ take first image as thumbnail
      thumbnail: product.images?.[0],
      description: product.description,
    }))
  );

  /* =========================
     FILTER OPTIONS
  ========================= */
  const options = useMemo(() => {
    return {
      categories: unique(INVENTORY.map((i) => i.category)),
      brands: unique(INVENTORY.map((i) => i.brand)),
      countries: unique(INVENTORY.map((i) => i.country)),
    };
  }, [INVENTORY]);

  /* =========================
     FILTER LOGIC
  ========================= */
  const filtered = useMemo(() => {
    console.log(INVENTORY, "INVENTORY");
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

  /* =========================
     PAGINATION
  ========================= */
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [q, filters]);

  const getProducts = async () => {
    try {
      const response = await axiosInstance.get("/admin/view-products");

      if (response.data.success) {
        const grouped = groupProductsByCategory(response.data.allProducts);

        console.log(grouped, "groupedProducts");

        setProductsData(grouped); // 👈 replace static data
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    if (state && state?.adminEmail) {
      getProducts();
    }
  }, [state]);

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
  const openDeleteModal = (product) => {
    setDeleteTarget(product);
    setDeleteOpen(true);
  };

  const confirmDelete = async () => {
    if (!deleteTarget?._id) return;

    try {
      const res = await axiosInstance.delete(
        `/admin/delete-product/${deleteTarget._id}`
      );

      if (res.data.success) {
        toast.success(res.data.message || "Deleted");
        setDeleteOpen(false);
        setDeleteTarget(null);
        getProducts(); // ✅ refresh list
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  /* =========================
     UI
  ========================= */
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-700" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-6 py-6 mt-20 text-white">
          <div className="flex items-center justify-between">
            {/* Left Title */}
            <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>

            {/* Right Button */}
            <button
              onClick={() => navigate("/dashboard/add-product")}
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold 
                       hover:bg-gray-200 transition duration-200 shadow-lg"
            >
              + Add Product
            </button>
          </div>
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

                    <div className="mt-4 flex items-center justify-between">
                      {/* Edit Button — Left */}
                      <button
                        onClick={() =>
                          navigate(`/dashboard/edit-product/${p._id}`)
                        }
                        className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline"
                      >
                        Edit
                      </button>

                      {/* Delete Button — Right */}
                      <button
                        onClick={() => openDeleteModal(p)}
                        className="inline-flex items-center gap-1 text-red-600 font-medium hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {deleteOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                      {/* overlay */}
                      <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setDeleteOpen(false)}
                      />

                      {/* modal */}
                      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          Delete Product
                        </h3>

                        <p className="text-gray-600 mb-6">
                          Are you sure you want to delete
                          <span className="font-semibold">
                            {" "}
                            {deleteTarget?.title}
                          </span>{" "}
                          ? This action cannot be undone.
                        </p>

                        <div className="flex justify-end gap-3">
                          <button
                            onClick={() => setDeleteOpen(false)}
                            className="px-5 py-2 rounded-lg border hover:bg-gray-100"
                          >
                            Cancel
                          </button>

                          <button
                            onClick={confirmDelete}
                            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
      <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
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
export default AdminDashboard;
export { AdminDashboard };
