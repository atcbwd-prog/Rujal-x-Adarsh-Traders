import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  ChevronDown,
} from "lucide-react";

import { productsData } from "../data/productData";
import bannerImg from "../assets/Bannerimgss/BannerThree.png";
import Aboutimg from "../assets/Bannerimgss/Aboutus.jpeg";

export default function Home() {
  /* ======================
     PREPARE PRODUCT DATA
  ====================== */
  const allProducts = useMemo(() => {
    return productsData.flatMap((category) =>
      category.products.map((p) => ({
        ...p,
        category: category.category,
        department: category.category, // can refine later
        brand: category.category.split(" ")[0],
      }))
    );
  }, []);

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
    if (
      search &&
      !p.name.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  const homeProducts = filteredProducts.slice(0, 6);

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
            Trusted Textile Partner
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl">
            Reliable Textile Machinery Spare Parts & Electronic Solutions
          </h1>

          <p className="mt-4 text-white/90 max-w-xl">
            We supply quality electronic cards, loom spare parts and textile
            machinery components for weaving and spinning industries.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              View Products <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-xl font-semibold hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ======================
          FILTERS (REAL)
      ====================== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700">
            Pre-Owned & Refurbished Machinery
          </h2>

          <p className="text-center text-gray-600 mt-2 uppercase text-sm">
            Experienced Machinery – Cost Effective Solution to Your Business
          </p>

          <div className="mt-10 space-y-4">
            <p className="text-center font-medium">
              Search your product
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <FilterSelect
                label="Category"
                options={categories}
                value={category}
                onChange={setCategory}
              />

              <FilterSelect
                label="Department"
                options={departments}
                value={department}
                onChange={setDepartment}
              />

              <FilterSelect
                label="Make"
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
                placeholder="Search"
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
              No products found
            </p>
          )}

          <div className="mt-10 text-center">
            <a
              href="/products"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold"
            >
              View All Products <ArrowRight size={18} />
            </a>
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
              About Our Company
            </h2>

            <p className="mt-4 text-gray-600">
              We are engaged in supplying textile machinery spare parts,
              electronic boards, dobby components and loom accessories to
              textile mills across India and abroad.
            </p>

            <p className="mt-3 text-gray-600">
              Our focus is on reliability, compatibility and timely support.
            </p>
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
            Why Choose Us
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Quality-tested spare parts",
              "Wide range of loom components",
              "Industry experience & support",
              "Reliable sourcing & supply",
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
              Looking for the right textile spare part?
            </h2>

            <p className="mt-3 text-white/90 max-w-xl">
              Get in touch with us for product availability and guidance.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Talk to Us <ArrowRight size={18} />
            </a>
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
