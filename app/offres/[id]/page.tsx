"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { 
  HiMapPin, 
  HiOutlineBriefcase, 
  HiCurrencyEuro, 
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiHeart,
  HiCheckCircle,
  HiShare
} from "react-icons/hi2";

export default function OffreDetailsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50 pb-20">
        
        {/* Hero Section */}
        <div className="bg-[#0a1628] pt-12 pb-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b8d9] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 text-3xl font-black text-[#0a1628]">
              Q
            </div>
            
            <div className="flex-1 text-white">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight">
                Développeur Fullstack React / Node.js Senior
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <HiOutlineBriefcase className="w-4 h-4 text-[#00b8d9]" /> Qonto
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <HiMapPin className="w-4 h-4 text-[#00b8d9]" /> Paris / Hybride
                </span>
                <span className="flex items-center gap-1.5 bg-[#00b8d9]/20 px-3 py-1.5 rounded-lg border border-[#00b8d9]/30 text-[#00b8d9] font-bold">
                  Freelance
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <HiCurrencyEuro className="w-4 h-4 text-[#00b8d9]" /> 650€ - 750€/j
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Content (70%) */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#00b8d9] rounded-full"></span> À propos de l'entreprise
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  Qonto est la solution de gestion financière leader en Europe pour les PME et les indépendants. Fondée en 2016, l'entreprise a pour mission de simplifier le quotidien bancaire et comptable de ses clients.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Notre équipe Tech est composée de 300 passionnés répartis dans plusieurs squads agiles. Nous valorisons la qualité du code, l'entraide et l'innovation continue.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#00b8d9] rounded-full"></span> Vos missions
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  En tant que Développeur Fullstack Senior, vous intégrerez la squad "Core Banking" et interviendrez sur des projets critiques :
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-[#00b8d9] flex-shrink-0 mt-0.5" />
                    <span>Conception et développement de nouvelles features métiers en React et Node.js.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-[#00b8d9] flex-shrink-0 mt-0.5" />
                    <span>Optimisation des performances et refactoring de l'architecture micro-services existante.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-[#00b8d9] flex-shrink-0 mt-0.5" />
                    <span>Mentorat des développeurs plus juniors et participation active aux code reviews.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-[#00b8d9] flex-shrink-0 mt-0.5" />
                    <span>Garantir la sécurité et la scalabilité des applications (plus de 300 000 clients actifs).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#00b8d9] rounded-full"></span> Profil recherché
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  Nous recherchons un profil expérimenté, autonome et moteur au sein de son équipe :
                </p>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2"></span>
                    <span>Au moins 5 ans d'expérience significative en développement web, idéalement en environnement produit/SaaS.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2"></span>
                    <span>Excellente maîtrise de React, TypeScript et Node.js.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2"></span>
                    <span>Bonnes connaissances en bases de données relationnelles (PostgreSQL).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2"></span>
                    <span>Sensibilité aux bonnes pratiques (Clean Code, TDD, CI/CD).</span>
                  </li>
                </ul>
                
                <h3 className="font-bold text-gray-800 mb-3 text-sm">Stack Technique</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "PostgreSQL", "Kafka", "Kubernetes"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sidebar (30%) */}
            <div className="lg:col-span-4 relative">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 sticky top-24">
                
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                      <HiOutlineCalendarDays className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Début de mission</p>
                      <p className="text-sm font-bold text-gray-900">ASAP / Dans le mois</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                      <HiOutlineClock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Durée estimée</p>
                      <p className="text-sm font-bold text-gray-900">6 mois (renouvelable)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-4 text-sm font-extrabold text-white rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-2" style={{ backgroundColor: "#00b8d9", boxShadow: "0 8px 20px rgba(0,184,217,0.3)" }}>
                    Postuler à cette mission
                  </button>
                  
                  <div className="flex items-center justify-between gap-3">
                    <button className="flex-1 py-3 text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <HiHeart className="w-5 h-5 text-gray-400" /> Sauvegarder
                    </button>
                    <button className="p-3 text-gray-500 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-center" title="Partager">
                      <HiShare className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <p className="text-[11px] text-center text-gray-400 mt-4">
                  Référence : QONTO-FE-2026-04
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
