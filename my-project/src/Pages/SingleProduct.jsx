import { useParams, useNavigate } from "react-router-dom";
import { slugify } from "../utils/slugify";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import axiosInstance from "../configs/axiosConfig";

const SingleProduct = () => {
  const { categorySlug, productSlug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/admin/view-products");

      if (res.data.success) {
        const all = res.data.allProducts;

        let found = null;

        all.forEach((p) => {
          if (
            slugify(p.category?.trim()) === categorySlug &&
            slugify(p.name) === productSlug
          ) {
            found = p;
          }
        });

        setProduct(found);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [categorySlug, productSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 mt-20">
      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg border hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
          </button>
          <p className="text-sm text-gray-600">{product.category}</p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-center">
          <img
            src={`${import.meta.env.VITE_API_URL}/uploads/${product.image?.[0]}`}
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
            Category: {product.category}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* ENQUIRY */}
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