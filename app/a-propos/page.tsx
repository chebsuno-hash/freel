"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiOutlineBuildingOffice2, HiOutlineUsers, HiOutlineGlobeAlt, HiOutlineHeart } from "react-icons/hi2";

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <div className="bg-[#0a1628] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
              À propos de <span style={{ color: "#00b8d9" }}>FreelanceIT</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Nous connectons les meilleurs talents tech avec les entreprises qui ont besoin d'eux. Notre mission : rendre le freelancing IT simple, transparent et accessible.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: HiOutlineBuildingOffice2, title: "Notre mission", desc: "Simplifier la mise en relation entre freelances IT et entreprises en France et en Europe." },
              { icon: HiOutlineUsers, title: "Notre équipe", desc: "Une équipe passionnée de tech et de recrutement, basée à Paris, Lyon et en remote." },
              { icon: HiOutlineGlobeAlt, title: "Notre portée", desc: "Plus de 15 000 freelances et 3 000 entreprises nous font confiance au quotidien." },
              { icon: HiOutlineHeart, title: "Nos valeurs", desc: "Transparence, qualité, et respect de l'humain au cœur de chaque interaction." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <item.icon className="w-8 h-8 text-[#00b8d9] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
