"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiEnvelope, HiMapPin, HiPhone, HiPaperAirplane } from "react-icons/hi2";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              Contactez-<span style={{ color: "#00b8d9" }}>nous</span>
            </h1>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">
              Une question ? Un partenariat ? Notre équipe vous répond sous 24h.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: HiEnvelope, label: "Email", value: "contact@freelanceit.fr" },
                { icon: HiPhone, label: "Téléphone", value: "+33 1 23 45 67 89" },
                { icon: HiMapPin, label: "Adresse", value: "42 rue de la Tech, 75009 Paris" },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0,184,217,0.1)" }}>
                      <Icon className="w-5 h-5" style={{ color: "#00b8d9" }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase">{info.label}</p>
                      <p className="text-sm font-bold text-gray-800 mt-0.5">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-lg font-bold text-gray-800 mb-5">Envoyez-nous un message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Prénom</label>
                    <input type="text" placeholder="Jean" className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#00b8d9] focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nom</label>
                    <input type="text" placeholder="Dupont" className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#00b8d9] focus:bg-white transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
                  <input type="email" placeholder="jean@email.com" className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#00b8d9] focus:bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                  <textarea rows={4} placeholder="Votre message..." className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#00b8d9] focus:bg-white transition-all resize-none" />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#00b8d9", boxShadow: "0 4px 14px rgba(0,184,217,0.3)" }}
                >
                  <HiPaperAirplane className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
