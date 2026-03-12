import React, { useEffect, useState } from "react";
import axiosInstance from "../../configs/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    location: "",
  });

  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);

  // ⭐ NEW STATES
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newBrand, setNewBrand] = useState("");

  useEffect(() => {
    loadProduct();
    fetchCategories();
    fetchBrands();
  }, []);

  /* ================= FETCH ================= */

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/admin/get-categories");
      if (res.data.success) setCategories(res.data.data);
    } catch {
      toast.error("Category load failed");
    }
  };

  const fetchBrands = async () => {
    try {
      const res = await axiosInstance.get("/admin/get-brands");
      if (res.data.success) setBrands(res.data.data);
    } catch {
      toast.error("Brand load failed");
    }
  };

  const loadProduct = async () => {
    try {
      const res = await axiosInstance.get(`/admin/product/${id}`);
      const p = res.data.product;

      setForm({
        name: p.name,
        description: p.description,
        price: p.price,
        category: p.category,
        brand: p.brand,
        location: p.location,
      });

      if (Array.isArray(p.image)) {
        setOldImages(p.image);
      } else {
        setOldImages([p.image]);
      }
    } catch {
      toast.error("Failed to load product");
    }
  };

  /* ================= CREATE MASTER ================= */

  const createCategory = async () => {
    if (!newCategory) return toast.error("Enter category");

    try {
      const res = await axiosInstance.post("/admin/create-category", {
        name: newCategory,
      });

      if (res.data.success) {
        toast.success("Category added");
        setNewCategory("");
        fetchCategories();
        setForm((f) => ({ ...f, category: newCategory }));
      } else {
        toast.error(res.data.message);
      }
    } catch {
      toast.error("Category create failed");
    }
  };

  const createBrand = async () => {
    if (!newBrand) return toast.error("Enter brand");

    try {
      const res = await axiosInstance.post("/admin/create-brand", {
        name: newBrand,
      });

      if (res.data.success) {
        toast.success("Brand added");
        setNewBrand("");
        fetchBrands();
        setForm((f) => ({ ...f, brand: newBrand }));
      } else {
        toast.error(res.data.message);
      }
    } catch {
      toast.error("Brand create failed");
    }
  };

  /* ================= FORM ================= */

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => setImages([...e.target.files]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.entries(form).forEach(([k, v]) => data.append(k, v));

      images.forEach((img) => {
        data.append("image", img); // ⭐ match multer
      });

      const res = await axiosInstance.put(`/admin/edit-product/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message);
      navigate("/dashboard");
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 mt-20">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8">Edit Product</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OLD IMAGES */}
          {oldImages.length > 0 && (
            <div className="flex gap-4 items-start">
              <span className="w-48 font-semibold pt-2">Current Images</span>

              <div className="flex flex-wrap gap-3">
                {oldImages.map((img, i) => (
                  <img
                    key={i}
                    src={`${import.meta.env.VITE_API_URL}/uploads/${img}`}
                    className="h-24 w-24 object-cover rounded border"
                  />
                ))}
              </div>
            </div>
          )}

          {/* NEW IMAGE */}
          <FormRow label="Change Images">
            <input type="file" multiple onChange={handleImage} />
          </FormRow>

          <FormRow label="Product Name">
            <Input name="name" value={form.name} onChange={handleChange} />
          </FormRow>

          <FormRow label="Description" top>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="input"
            />
          </FormRow>

          <FormRow label="Price">
            <Input name="price" value={form.price} onChange={handleChange} />
          </FormRow>

          {/* ⭐ CATEGORY */}
          <FormRow label="Category">
            <div className="space-y-2">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              <div className="flex gap-2">
                <input
                  placeholder="Add new category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="input"
                />
                <button
                  type="button"
                  onClick={createCategory}
                  className="px-4 bg-black text-white rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </FormRow>

          {/* ⭐ BRAND */}
          <FormRow label="Brand">
            <div className="space-y-2">
              <select
                name="brand"
                value={form.brand}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select Brand</option>
                {brands.map((b) => (
                  <option key={b._id} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>

              <div className="flex gap-2">
                <input
                  placeholder="Add new brand"
                  value={newBrand}
                  onChange={(e) => setNewBrand(e.target.value)}
                  className="input"
                />
                <button
                  type="button"
                  onClick={createBrand}
                  className="px-4 bg-black text-white rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </FormRow>

          <FormRow label="Location">
            <Input
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </FormRow>

          <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 border rounded-lg"
            >
              Cancel
            </button>

            <button className="px-6 py-3 bg-black text-white rounded-lg">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FormRow = ({ label, children, top }) => (
  <div className={`flex flex-col md:flex-row gap-3 ${top && "md:items-start"}`}>
    <label className="md:w-48 font-semibold pt-2">{label}</label>
    <div className="flex-1">{children}</div>
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className="input w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black"
  />
);

export default EditProduct;