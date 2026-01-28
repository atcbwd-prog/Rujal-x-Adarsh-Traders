// src/pages/Contact.jsx
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Building2, Send, CheckCircle2, AlertCircle } from "lucide-react";
// Optional: EmailJS sending (npm i @emailjs/browser)
// import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Enquiry",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | loading | success | error

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  // simple validations
  const isEmail = (v) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(v);
  const isPhone = (v) => /^[0-9()+\-\s]{7,15}$/.test(v);

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!isEmail(form.email)) return "Please enter a valid email";
    if (form.phone && !isPhone(form.phone)) return "Please enter a valid phone number";
    if (!form.message.trim()) return "Please write a short message";
    if (!form.consent) return "Please agree to the terms";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ state: "error", msg: err });
      return;
    }

    try {
      setStatus({ state: "loading", msg: "Sending..." });

      // ----- Enable if using EmailJS -----
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   {
      //     from_name: form.name,
      //     from_email: form.email,
      //     phone: form.phone,
      //     company: form.company,
      //     subject: form.subject,
      //     message: form.message,
      //   },
      //   "YOUR_PUBLIC_KEY"
      // );

      // Simulate success for now
      await new Promise((res) => setTimeout(res, 800));

      setStatus({ state: "success", msg: "Thanks! We'll get back to you soon." });
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "General Enquiry",
        message: "",
        consent: false,
      });
    } catch (_) {
      setStatus({ state: "error", msg: "Could not send your message. Please try again." });
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-900" />

  {/* Content */}
  <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 mt-10 text-center text-white">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
      Contact Us
    </h1>

    <p className="mt-5 text-base md:text-lg text-blue-100 leading-relaxed">
      Speak with our team about machinery sourcing, audits,
      relocations, or after-sales support.
    </p>
  </div>
</section>
  
      {/* Info + Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-10">
          {/* Info cards */}
          <aside className="md:col-span-4 space-y-6">
            <InfoCard icon={MapPin} title="Head Office">
              <p>Adarsh Trading Company</p>
              <p>Ground floor, S.No.222, Gala No.B-4 Raj Rajeshwari Compound, Sonale</p>
              <p>Bhiwandi, Maharashtra India (India)421302</p>
            </InfoCard>
            <InfoCard icon={Phone} title="Phone">
              <a className="hover:text-blue-700" href="tel:+6567456893">9860680435</a> <br/>
              <a className="hover:text-blue-700" href="tel:+6567456893">025-22299435</a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a className="hover:text-blue-700" href="mailto:info@texcoms.com">info@adarshtradingcompany.com</a> <br/>
              <a className="hover:text-blue-700" href="mailto:info@texcoms.com">kumarjay2050@gmail.com</a>
            </InfoCard>
            
          </aside>

          {/* Form */}
          <div className="md:col-span-8">
            <div className="rounded-3xl border bg-white shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="text-gray-600 mt-1">We'll respond within 1–2 business days.</p>

              {/* status bar */}
              {status.state !== "idle" && (
                <div
                  className={`mt-4 flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                    status.state === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : status.state === "error"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  {status.state === "success" ? (
                    <CheckCircle2 size={16} />
                  ) : status.state === "error" ? (
                    <AlertCircle size={16} />
                  ) : (
                    <Send size={16} />
                  )}
                  <span>{status.msg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Full Name" required>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="example@email.com"
                    className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </Field>

                <Field label="Phone">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+65 1234 5678"
                    className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </Field>

                <Field label="Company">
                  <input
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Your Company Name"
                    className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </Field>

                <Field label="Subject">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    <option>General Enquiry</option>
                    <option>Machinery Sourcing</option>
                    <option>After-Sales / Spares</option>
                    <option>Relocation / Dismantling</option>
                    <option>Consulting / Audit</option>
                  </select>
                </Field>

                <Field label="Message" full>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={6}
                    placeholder="Tell us a bit about your requirement..."
                    className="w-full rounded-2xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </Field>

                <div className="md:col-span-2 flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={onChange}
                    className="mt-1 accent-blue-700"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I agree to the processing of my information according to the{" "}
                    <a href="#" className="text-blue-700 underline">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <div className="md:col-span-2 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status.state === "loading"}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl disabled:opacity-60"
                  >
                    <Send size={18} /> {status.state === "loading" ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-xs text-gray-500">We'll never share your info.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl overflow-hidden border shadow">
            <iframe
              title="Adarsh Trading Company HQ Map"
              src="https://www.google.com/search?q=adarsh+trading+company+bhiwandi&sca_esv=28031dd5f30059e8&udm=1&biw=1536&bih=730&aic=0&sz=16&cs=0&ei=3VVfadaGFs36g8UP5_PguAY&oq=adarsh+trading+company+bhiwandi&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLWxvY2FsIh9hZGFyc2ggdHJhZGluZyBjb21wYW55IGJoaXdhbmRpKgIIADIFEAAYgAQyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIEMggQABiABBiiBEjODFAAWABwAXgAkAEAmAEAoAEAqgEAuAEByAEAmAIBoAIEmAMAiAYBkgcBMaAHALIHALgHAMIHAzAuMcgHAoAIAQ&sclient=gws-wiz-modeless-local#rlimm=16792955302890501369https://www.google.com/search?q=adarsh+trading+company+bhiwandi&sca_esv=28031dd5f30059e8&udm=1&biw=1536&bih=730&aic=0&sz=16&cs=0&ei=3VVfadaGFs36g8UP5_PguAY&oq=adarsh+trading+company+bhiwandi&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLWxvY2FsIh9hZGFyc2ggdHJhZGluZyBjb21wYW55IGJoaXdhbmRpKgIIADIFEAAYgAQyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIEMggQABiABBiiBEjODFAAWABwAXgAkAEAmAEAoAEAqgEAuAEByAEAmAIBoAIEmAMAiAYBkgcBMaAHALIHALgHAMIHAzAuMcgHAoAIAQ&sclient=gws-wiz-modeless-local"
              className="w-full h-[360px] md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10 md:p-14 shadow-2xl">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle at 20% 10%, white 2px, transparent 2px)" }}
            />
            <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Need a quick quote?</h2>
                <p className="mt-3 text-white/90 max-w-xl">
                  Share your requirement—brand, year, configuration and location—and we'll respond with availability.
                </p>
              </div>
              <div className="md:text-right">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold shadow-lg hover:shadow-xl"
                >
                  Back to Top
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border p-5 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="text-blue-700 w-5 h-5" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-gray-700 space-y-0.5">{children}</div>
    </div>
  );
}

function Field({ label, required, full, children }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}
