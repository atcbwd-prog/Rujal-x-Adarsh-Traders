import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../data/productData";
import { slugify } from "../utils/slugify";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const SingleProduct = () => {
  const { categorySlug, productSlug } = useParams();
  const navigate = useNavigate();

  // 🔍 Find product
  let product = null;
  let categoryName = "";

  productsData.forEach((cat) => {
    if (slugify(cat.category) === categorySlug) {
      categoryName = cat.category;
      cat.products.forEach((p) => {
        if (slugify(p.name) === productSlug) {
          product = p;
        }
      });
    }
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================= HEADER ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg border hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
          </button>
          <p className="text-sm text-gray-600">{categoryName}</p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[420px] w-auto object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-2 text-sm text-blue-700 font-medium">
            Category: {categoryName}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* ENQUIRY BOX */}
          <div className="mt-8 border-t pt-6">
            <h3 className="font-semibold text-lg mb-4">
              Enquire About This Product
            </h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917021909509"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-medium hover:bg-blue-800"
              >
                <Phone size={18} /> Call Now
              </a>

              <a
                href="mailto:info@example.com"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-medium hover:bg-gray-100"
              >
                <Mail size={18} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
