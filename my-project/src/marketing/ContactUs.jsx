import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: t("contact.subjects.general"),
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus({ state: "loading", msg: t("contact.sending") });

      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus({ state: "success", msg: t("contact.success") });

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: t("contact.subjects.general"),
        message: "",
        consent: false,
      });
    } catch {
      setStatus({ state: "error", msg: t("contact.error") });
    }
  };

  return (
    <main className="min-h-screen bg-white mt-10">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white text-center py-28">
        <h1 className="text-5xl font-bold">{t("contact.heroTitle")}</h1>
        <p className="mt-4 text-blue-100 max-w-xl mx-auto">
          {t("contact.heroDesc")}
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10">
        {/* INFO */}
        <aside className="md:col-span-4 space-y-6">
          <InfoCard icon={MapPin} title={t("contact.headOffice")}>
            <p>Adarsh Trading Company</p>
            <p>Bhiwandi, Maharashtra, India</p>
          </InfoCard>

          <InfoCard icon={Phone} title={t("contact.phone")}>
            <p>9860680435</p>
          </InfoCard>

          <InfoCard icon={Mail} title={t("contact.email")}>
            <p>info@adarshtradingcompany.com</p>
          </InfoCard>
        </aside>

        {/* FORM */}
        <div className="md:col-span-8 border rounded-3xl p-8 shadow">
          <h2 className="text-2xl font-bold">{t("contact.formTitle")}</h2>
          <p className="text-gray-600">{t("contact.formDesc")}</p>

          {status.state !== "idle" && (
            <div className="mt-4 flex items-center gap-2 text-sm">
              {status.state === "success" && <CheckCircle2 />}
              {status.state === "error" && <AlertCircle />}
              {status.state === "loading" && <Send />}
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
            <Field label={t("contact.fullName")} required>
              <input name="name" value={form.name} onChange={onChange} className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700" />
            </Field>

            <Field label={t("contact.emailField")} required>
              <input name="email" value={form.email} onChange={onChange} className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700" />
            </Field>

            <Field label={t("contact.phoneField")}>
              <input name="phone" value={form.phone} onChange={onChange} className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700" />
            </Field>

            <Field label={t("contact.company")}>
              <input name="company" value={form.company} onChange={onChange} className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700" />
            </Field>

            <Field label={t("contact.subject")}>
              <select name="subject" value={form.subject} onChange={onChange} className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700">
                <option>{t("contact.subjects.general")}</option>
                <option>{t("contact.subjects.sourcing")}</option>
                <option>{t("contact.subjects.spares")}</option>
                <option>{t("contact.subjects.relocation")}</option>
                <option>{t("contact.subjects.consulting")}</option>
              </select>
            </Field>

            <Field label={t("contact.message")} full>
              <textarea name="message" value={form.message} onChange={onChange} rows={5} className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-700" />
            </Field>

            <div className="md:col-span-2 flex gap-3">
              <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} />
              <span className="text-sm">{t("contact.consent")}</span>
            </div>

            <button className="md:col-span-2 bg-blue-700 text-white py-3 rounded-xl font-semibold">
              {status.state === "loading" ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">{t("contact.quickQuote")}</h2>
        <p className="text-gray-600 mt-2">{t("contact.quickQuoteDesc")}</p>
        <a href="#top" className="inline-block mt-6 border px-6 py-3 rounded-xl">
          {t("contact.backTop")}
        </a>
      </section>
    </main>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="border rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="text-blue-700" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Field({ label, required, full, children }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-sm font-medium">
        {label} {required && "*"}
      </span>
      {children}
    </label>
  );
}