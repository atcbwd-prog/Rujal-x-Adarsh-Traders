import {
  ArrowRight,
  CheckCircle2,
  Package,
  Wrench,
  Ship,
  Cog,
  Headphones,
  Truck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "dismantling",
      title: t("services.dismantling"),
      icon: Wrench,
      img:
        "https://images.unsplash.com/photo-1581091014534-8987c1d7c1b9?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Specialists across spinning, weaving, knitting, dyeing, finishing",
        "Methodical tagging, packing, and secure staging",
        "Transport, storage & re-installation options",
      ],
      blurb:
        "Expert textile machinery dismantling with safety-first SOPs and minimal disruption.",
    },
    {
      id: "commissioning",
      title: t("services.commissioning"),
      icon: Cog,
      img:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Precision installation & calibration",
        "Trials, performance verification",
        "Operator training",
      ],
      blurb:
        "Commissioning programs that bring equipment quickly into production.",
    },
    {
      id: "loading-shipping",
      title: t("services.shipping"),
      icon: Ship,
      img:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Heavy lift & rigging supervision",
        "Export packing & logistics",
        "Insurance & transit monitoring",
      ],
      blurb: "Secure global relocation of textile machinery.",
    },
    {
      id: "service-station",
      title: t("services.station"),
      icon: Package,
      img:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Preventive maintenance & overhaul",
        "Refurbishment & parts replacement",
        "Quick repair turnaround",
      ],
      blurb: "Reliable repair and lifecycle support services.",
    },
    {
      id: "after-sales",
      title: t("services.after"),
      icon: Headphones,
      img:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Breakdown troubleshooting",
        "Spare parts supply",
        "Performance audits",
      ],
      blurb: "Responsive technical support for installed machinery.",
    },
    {
      id: "relocation",
      title: t("services.relocation"),
      icon: Truck,
      img:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Factory shifting planning",
        "Phased execution to reduce downtime",
        "Safety compliant relocation",
      ],
      blurb: "Turnkey factory relocation with cost control.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 mt-10">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-700" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("services.heroTitle")}
          </h1>
          <p className="mt-3 text-blue-100 max-w-2xl">
            {t("services.heroDesc")}
          </p>

          {/* Anchor Nav */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/20"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY GRID */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-blue-700">
                    <s.icon className="w-5 h-5" />
                    <span className="text-xs font-semibold">
                      {t("services.summaryLabel")}
                    </span>
                  </div>

                  <h3 className="mt-2 font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {s.blurb}
                  </p>

                  <span className="inline-flex items-center gap-1 mt-4 text-blue-700 font-medium">
                    {t("services.viewDetails")} <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SECTIONS */}
      {services.map((s) => (
        <section key={s.id} id={s.id} className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={s.img}
                alt={s.title}
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{s.title}</h2>
              <p className="text-gray-600 mt-3">{s.blurb}</p>

              <ul className="mt-6 space-y-3">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="text-blue-700 mt-1" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4">
                <a
                  href="/contactus"
                  className="bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  {t("services.getQuote")}
                </a>

                <a
                  href="#top"
                  className="border px-5 py-3 rounded-xl font-semibold"
                >
                  {t("services.backTop")}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("services.ctaTitle")}
            </h2>
            <p className="mt-3 text-white/90 max-w-xl">
              {t("services.ctaDesc")}
            </p>

            <a
              href="/contactus"
              className="inline-flex items-center gap-2 mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold"
            >
              {t("services.speakExpert")} <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}