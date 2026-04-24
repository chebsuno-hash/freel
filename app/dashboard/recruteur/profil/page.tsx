"use client";

import { useState } from "react";
import {
  HiOutlineBuildingOffice2,
  HiOutlineCamera,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export default function RecruteurProfilPage() {
  const [toast, setToast] = useState(false);

  // Mock form state — pre-filled for demo
  const [companyName, setCompanyName] = useState("Qonto Technologies");
  const [sector, setSector] = useState("Tech & Logiciels SaaS");
  const [size, setSize] = useState("50-200");
  const [website, setWebsite] = useState("https://qonto.com");
  const [location, setLocation] = useState("Paris, France");
  const [description, setDescription] = useState(
    "Qonto Technologies est une fintech européenne qui simplifie la gestion financière des PME et des indépendants. Notre mission : créer l'outil de gestion financière le plus simple et le plus efficace pour les professionnels.\n\nNos valeurs :\n• Ambition — Nous visons l'excellence dans chaque produit que nous construisons.\n• Teamplay — L'intelligence collective est au cœur de notre ADN.\n• Mastery — Nous encourageons l'apprentissage continu et le développement personnel.\n• Integrity — La transparence et l'honnêteté guident toutes nos décisions."
  );

  const handleSave = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-[100] bg-[#0a1628] text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-bold flex items-center gap-2 animate-in slide-in-from-top-4 fade-in">
          <HiOutlineCheckCircle className="w-5 h-5 text-[#00b8d9]" />
          Modifications enregistrées avec succès
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profil de l&apos;entreprise</h1>
        <p className="text-sm text-gray-500 mt-1">
          Complétez votre profil pour attirer les meilleurs talents. Un profil complet reçoit 3× plus de candidatures.
        </p>
      </div>

      {/* Section 1: Logo & Identity */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <h2 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-6">
          <HiOutlineBuildingOffice2 className="w-5 h-5 text-[#00b8d9]" />
          Logo et identité
        </h2>

        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Logo Upload */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a2c4e] flex items-center justify-center text-white font-black text-2xl shadow-lg relative group cursor-pointer">
              QT
              <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <HiOutlineCamera className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-2 text-center">Modifier le logo</p>
          </div>

          {/* Name + Sector */}
          <div className="flex-1 w-full space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 mb-1.5 block">Nom de l&apos;entreprise</label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#00b8d9]/30 focus:border-[#00b8d9] transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 mb-1.5 block">Secteur d&apos;activité</label>
              <input
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#00b8d9]/30 focus:border-[#00b8d9] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: General Info */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <h2 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-6">
          <HiOutlineGlobeAlt className="w-5 h-5 text-[#00b8d9]" />
          Informations générales
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-bold text-gray-700 mb-1.5 block">
              <span className="flex items-center gap-1.5"><HiOutlineUserGroup className="w-4 h-4 text-gray-400" /> Taille de l&apos;entreprise</span>
            </label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#00b8d9]/30 focus:border-[#00b8d9] transition-all bg-white appearance-none"
            >
              <option value="1-10">1 — 10 employés</option>
              <option value="11-50">11 — 50 employés</option>
              <option value="50-200">50 — 200 employés</option>
              <option value="200-500">200 — 500 employés</option>
              <option value="500+">500+ employés</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 mb-1.5 block">
              <span className="flex items-center gap-1.5"><HiOutlineGlobeAlt className="w-4 h-4 text-gray-400" /> Site web</span>
            </label>
            <input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#00b8d9]/30 focus:border-[#00b8d9] transition-all"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-bold text-gray-700 mb-1.5 block">
              <span className="flex items-center gap-1.5"><HiOutlineMapPin className="w-4 h-4 text-gray-400" /> Localisation du siège</span>
            </label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#00b8d9]/30 focus:border-[#00b8d9] transition-all"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Description */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <h2 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-6">
          <HiOutlineBuildingOffice2 className="w-5 h-5 text-[#00b8d9]" />
          Présentation de l&apos;entreprise
        </h2>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={10}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#00b8d9]/30 focus:border-[#00b8d9] transition-all resize-none"
        />
        <p className="text-[11px] text-gray-400 mt-2">
          Décrivez votre entreprise, sa mission, ses valeurs et sa culture. Un bon texte attire les candidats qui vous ressemblent.
        </p>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pb-6">
        <button
          onClick={handleSave}
          className="px-8 py-3.5 text-sm font-bold text-white rounded-xl shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          style={{ backgroundColor: "#00b8d9", boxShadow: "0 4px 14px rgba(0,184,217,0.3)" }}
        >
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
}
