import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Search, ChevronDown } from "lucide-react";

import bannerImg from "../assets/Bannerimgss/BannerThree.png";
import Aboutimg from "../assets/Bannerimgss/Aboutus.jpeg";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import axiosInstance from "../configs/axiosConfig";

export default function Home() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  /* ======================
     PREPARE PRODUCT DATA
  ====================== */
  const allProducts = productsData;
  const navigate = useNavigate();

  /* ======================
     FILTER STATES
  ====================== */
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [brand, setBrand] = useState("");

  /* ======================
     FILTER OPTIONS
  ====================== */
  const categories = [...new Set(allProducts.map((p) => p.category))];
  const departments = [...new Set(allProducts.map((p) => p.department))];
  const brands = [...new Set(allProducts.map((p) => p.brand))];

  /* ======================
     FILTER LOGIC
  ====================== */
  const filteredProducts = allProducts.filter((p) => {
    if (category && p.category !== category) return false;
    if (department && p.department !== department) return false;
    if (brand && p.brand !== brand) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  const homeProducts = filteredProducts.slice(0, 6);

  const getProducts = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/admin/view-products");

      if (res.data.success) {
        const formatted = res.data.allProducts.map((p) => ({
          id: p._id,
          name: p.name,
          category: p.category?.trim(),
          department: p.category?.trim(),
          brand: p.brand,
          image: `${import.meta.env.VITE_API_URL}/uploads/${p.image[0]}`,
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
    <main className="min-h-screen bg-white text-gray-900">
      {/* ======================
          HERO (FULL BACKGROUND IMAGE)
      ====================== */}
      <section className="relative min-h-[80vh] flex items-center">
        <img
          src={bannerImg}
          alt="Textile Machinery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-white">
          <span className="inline-block text-sm font-semibold bg-white/20 px-4 py-1 rounded-full">
            {t("home.badge")}
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl">
            {t("home.heroTitle")}
          </h1>

          <p className="mt-4 text-white/90 max-w-xl">
            <p>{t("home.heroDesc")}</p>
          </p>

          <div className="mt-8 flex gap-4">
            {/* View Products */}
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              {t("home.viewProducts")} <ArrowRight size={18} />
            </button>

            {/* Contact Us */}
            <button
              onClick={() => navigate("/contactus")}
              className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-xl font-semibold hover:bg-white/10"
            >
              {t("home.contactUs")}
            </button>
          </div>
        </div>
      </section>

      {/* ======================
          FILTERS (REAL)
      ====================== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700">
            {t("home.filterTitle")}
          </h2>

          <p className="text-center text-gray-600 mt-2 uppercase text-sm">
            {t("home.filterSub")}{" "}
          </p>

          <div className="mt-10 space-y-4">
            <p className="text-center font-medium">{t("home.searchLabel")}</p>

            <div className="grid md:grid-cols-3 gap-4">
              <FilterSelect
                label={t("home.category")}
                options={categories}
                value={category}
                onChange={setCategory}
              />

              <FilterSelect
                label={t("home.department")}
                options={departments}
                value={department}
                onChange={setDepartment}
              />

              <FilterSelect
                label={t("home.make")}
                options={brands}
                value={brand}
                onChange={setBrand}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("home.searchPlaceholder")}
                className="w-full rounded-xl border px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-700"
              />
              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================
          PRODUCTS GRID (FILTERED)
      ====================== */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {loading && (
              <p className="text-center py-20 text-gray-500">
                Loading products...
              </p>
            )}
            {homeProducts.map((product, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden bg-white hover:shadow-xl transition"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-blue-700">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {homeProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              {t("home.noProducts")}
            </p>
          )}

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
            >
              {t("home.viewAll")}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ======================
          ABOUT
      ====================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("home.aboutTitle")}
            </h2>

            <p className="mt-4 text-gray-600">{t("home.aboutDesc1")}</p>
          </div>

          <div className="rounded-3xl overflow-hidden h-[260px] md:h-[320px]">
            <img
              src={Aboutimg}
              alt="Textile Industry"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ======================
          WHY CHOOSE US
      ====================== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("home.whyTitle")}
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              t("home.why1"),
              t("home.why2"),
              t("home.why3"),
              t("home.why4"),
            ].map((point, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-white p-6 hover:shadow-xl transition"
              >
                <CheckCircle2 className="text-blue-700 mb-3" />
                <p className="font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================
          CTA
      ====================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 md:p-14 text-white">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
              {t("home.ctaTitle")}
            </h2>

            <p className="mt-3 text-white/90 max-w-xl">{t("home.ctaDesc")}</p>

            <button
              onClick={() => navigate("/contactus")}
              className="inline-flex items-center gap-2 mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              {t("home.talkToUs")}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ======================
   FILTER SELECT
====================== */
function FilterSelect({ label, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border px-4 py-3 pr-10 text-gray-600"
      >
        <option value="">{label}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}
