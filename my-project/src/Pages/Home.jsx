import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ======================
          HERO SECTION
      ====================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-700" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 text-white">
          <span className="inline-block text-sm font-semibold bg-white/10 px-4 py-1 rounded-full">
            Trusted Textile Partner
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl">
            Reliable Textile Machinery Spare Parts & Electronic Solutions
          </h1>

          <p className="mt-4 text-blue-100 max-w-2xl">
            We supply quality electronic cards, loom spare parts and textile
            machinery components for weaving and spinning industries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
            >
              View Products <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ======================
          ABOUT SECTION
      ====================== */}
      <section className="py-16 md:py-24">
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
              Our focus is on reliability, compatibility and timely support to
              keep your machines running efficiently.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl h-[260px] md:h-[320px] flex items-center justify-center text-gray-400">
            Company / Industry Image
          </div>
        </div>
      </section>

      {/* ======================
          WHY CHOOSE US
      ====================== */}
      <section className="py-16 md:py-24 bg-gray-50">
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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 md:p-14 text-white">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
              Looking for the right textile spare part?
            </h2>

            <p className="mt-3 text-white/90 max-w-xl">
              Get in touch with us for product availability, compatibility and
              expert guidance.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Talk to Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
