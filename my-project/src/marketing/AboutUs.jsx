import { Globe2, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white text-gray-900 mt-10">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("about.heroTitle")}
          </h1>
          <p className="max-w-3xl mx-auto text-blue-100 text-lg">
            {t("about.heroDesc")}
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("about.whoTitle")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("about.whoDesc1")}
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {t("about.whoDesc2")}
            </p>
          </div>

          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop"
              alt="company"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t("about.principlesTitle")}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <Award className="mx-auto text-blue-700 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("about.missionTitle")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("about.missionDesc")}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <Globe2 className="mx-auto text-blue-700 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("about.visionTitle")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("about.visionDesc")}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <CheckCircle2 className="mx-auto text-blue-700 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("about.valuesTitle")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("about.valuesDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("about.expTitle")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("about.expDesc")}
            </p>

            <ul className="mt-6 space-y-3">
              {[t("about.exp1"), t("about.exp2"), t("about.exp3"), t("about.exp4")].map(
                (point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-700 mt-1" />
                    <span>{point}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
              alt="factory"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          {t("about.globalTitle")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl font-bold">25+</p>
            <p className="text-blue-100">{t("about.years")}</p>
          </div>
          <div>
            <p className="text-4xl font-bold">40+</p>
            <p className="text-blue-100">{t("about.countries")}</p>
          </div>
          <div>
            <p className="text-4xl font-bold">2800+</p>
            <p className="text-blue-100">{t("about.projects")}</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1200+</p>
            <p className="text-blue-100">{t("about.clients")}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("about.ctaTitle")}
        </h2>
        <p className="text-gray-600 mb-8">{t("about.ctaDesc")}</p>

        <a
          href="/contactus"
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          {t("about.ctaBtn")} <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}