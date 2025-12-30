// src/pages/About.jsx
import { Globe2, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Adarsh Trading Company</h1>
          <p className="max-w-3xl mx-auto text-blue-100 text-lg">
            Delivering global textile expertise through innovation, experience, and excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
            Established in the year 2009 at Bhiwandi, Maharashtra, We Adarsh Trading Company are engaged in offering a wide range of second hand weaving looms. These used weaving looms are sourced from the most trusted vendors of the market. All the machines supplied by us are highly efficient and used in various textile industries for weaving processes. Furthermore, we will check all the spare parts and functions of the looms to ensure only trouble free machines are delivered to the customer end. The used weaving looms can be acquired from us at a comparatively low rate.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our mission is to empower textile enterprises with sustainable technologies,
              cost-effective sourcing, and measurable performance improvements — driving
              long-term growth and global competitiveness.
            </p>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop"
                alt="Texcoms office team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Guiding Principles</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-xl transition">
              <Award className="mx-auto text-blue-700 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                To deliver sustainable textile growth by combining technology, expertise, and
                operational excellence — ensuring long-term value for every client.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-xl transition">
              <Globe2 className="mx-auto text-blue-700 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                To be the global leader in textile machinery trading and consulting, known for
                innovation, reliability, and transformative mill solutions.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-xl transition">
              <CheckCircle2 className="mx-auto text-blue-700 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600 text-sm">
                Integrity, transparency, and customer focus form the foundation of every
                partnership we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Experience</h2>
            <p className="text-gray-600 leading-relaxed">
              Our core strength lies in our team of textile professionals with over 25 years of
              hands-on industry experience. We’ve successfully completed more than 2800 projects
              across 40+ countries — from greenfield setups to modernization programs.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                "Comprehensive project consulting and audits",
                "End-to-end machinery sourcing and installation",
                "Lean manufacturing and productivity improvements",
                "After-sales support and technical training",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-700 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="Factory machinery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Global Presence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold">25+</p>
              <p className="text-blue-100 text-sm mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">40+</p>
              <p className="text-blue-100 text-sm mt-1">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold">2800+</p>
              <p className="text-blue-100 text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold">1200+</p>
              <p className="text-blue-100 text-sm mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Partner with Adarsh Trading to Elevate Your Mill’s Performance
        </h2>
        <p className="text-gray-600 mb-8">
          Connect with our experts today for machinery sourcing, audits, or digital upgrades.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
        >
          Get in Touch <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
