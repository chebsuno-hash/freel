"use client";

import { useState } from "react";
import { 
  HiOutlineUser, 
  HiOutlineBriefcase, 
  HiOutlineAcademicCap, 
  HiOutlineSparkles,
  HiCheck
} from "react-icons/hi2";

const STEPS = [
  { id: "personal", label: "Informations personnelles", icon: HiOutlineUser },
  { id: "experience", label: "Expériences", icon: HiOutlineBriefcase },
  { id: "education", label: "Formations", icon: HiOutlineAcademicCap },
  { id: "skills", label: "Compétences", icon: HiOutlineSparkles },
];

export default function ProfilStepper() {
  const [activeStep, setActiveStep] = useState("personal");

  return (
    <div className="max-w-6xl mx-auto">
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Compléter mon profil</h1>
        <p className="text-sm text-gray-500 mt-1">
          Remplissez ces informations pour générer un CV de qualité et attirer les recruteurs.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Vertical Stepper (25%) */}
        <div className="w-full lg:w-1/4 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-24">
            <nav className="space-y-2">
              {STEPS.map((step) => {
                const isActive = activeStep === step.id;
                const Icon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? "bg-[#00b8d9]/10 text-[#00b8d9] font-bold" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#00b8d9]" : "text-gray-400"}`} />
                    {step.label}
                    {isActive && (
                      <div className="ml-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00b8d9]"></div>
                      </div>
                    )}
                  </button>
                );
              })}
            </nav>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Astuce</h4>
              <p className="text-xs text-gray-500">
                Les profils avec une photo professionnelle et une description détaillée reçoivent 3x plus d'offres.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Content (75%) */}
        <div className="w-full lg:w-3/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            
            {/* Step: Personal Info */}
            {activeStep === "personal" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2 mb-6">Informations personnelles</h2>
                </div>

                {/* Avatar / Photo */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                    <HiOutlineUser className="w-8 h-8" />
                  </div>
                  <div>
                    <button className="px-4 py-2 text-sm font-semibold text-[#0a1628] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Ajouter une photo
                    </button>
                    <p className="text-xs text-gray-500 mt-2">Format JPG ou PNG. Max 5MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Prénom</label>
                    <input type="text" placeholder="Jean" className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#00b8d9]/50 focus:border-[#00b8d9] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom</label>
                    <input type="text" placeholder="Dupont" className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#00b8d9]/50 focus:border-[#00b8d9] transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Titre professionnel</label>
                  <input type="text" placeholder="Ex: Développeur React Senior" className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#00b8d9]/50 focus:border-[#00b8d9] transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ma petite bio</label>
                  <textarea rows={4} placeholder="Décrivez votre parcours, vos aspirations..." className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#00b8d9]/50 focus:border-[#00b8d9] transition-all resize-none"></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Localisation</label>
                    <input type="text" placeholder="Paris, France" className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#00b8d9]/50 focus:border-[#00b8d9] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Disponibilité</label>
                    <select className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#00b8d9]/50 focus:border-[#00b8d9] transition-all cursor-pointer">
                      <option>Immédiate</option>
                      <option>Dans 1 mois</option>
                      <option>Dans 3 mois</option>
                      <option>À l'écoute du marché</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end pt-4">
                  <button onClick={() => setActiveStep("experience")} className="px-6 py-2.5 text-sm font-bold text-white rounded-lg transition-transform hover:-translate-y-0.5 shadow-md" style={{ backgroundColor: "#00b8d9" }}>
                    Enregistrer et Suivant
                  </button>
                </div>
              </div>
            )}

            {/* Step: Experience (Mock empty state) */}
            {activeStep === "experience" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Expériences professionnelles</h2>
                  <button className="text-sm font-bold text-[#00b8d9] hover:underline">+ Ajouter</button>
                </div>

                <div className="p-8 text-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                  <HiOutlineBriefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-gray-700 mb-1">Aucune expérience ajoutée</h3>
                  <p className="text-xs text-gray-500 mb-4">Mettez en valeur votre parcours pour rassurer les recruteurs.</p>
                  <button className="px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-[#00b8d9] hover:text-[#00b8d9] transition-colors shadow-sm">
                    Ajouter ma première expérience
                  </button>
                </div>

                <div className="flex justify-between pt-4">
                  <button onClick={() => setActiveStep("personal")} className="px-6 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Retour</button>
                  <button onClick={() => setActiveStep("education")} className="px-6 py-2.5 text-sm font-bold text-white rounded-lg transition-transform hover:-translate-y-0.5 shadow-md" style={{ backgroundColor: "#00b8d9" }}>
                    Suivant
                  </button>
                </div>
              </div>
            )}

            {/* Step: Education */}
            {activeStep === "education" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Formations & Diplômes</h2>
                  <button className="text-sm font-bold text-[#00b8d9] hover:underline">+ Ajouter</button>
                </div>
                <div className="p-8 text-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                  <HiOutlineAcademicCap className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-gray-700 mb-1">Aucune formation ajoutée</h3>
                  <button className="px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-[#00b8d9] hover:text-[#00b8d9] transition-colors shadow-sm">
                    Ajouter une formation
                  </button>
                </div>
                <div className="flex justify-between pt-4">
                  <button onClick={() => setActiveStep("experience")} className="px-6 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Retour</button>
                  <button onClick={() => setActiveStep("skills")} className="px-6 py-2.5 text-sm font-bold text-white rounded-lg transition-transform hover:-translate-y-0.5 shadow-md" style={{ backgroundColor: "#00b8d9" }}>
                    Suivant
                  </button>
                </div>
              </div>
            )}

            {/* Step: Skills */}
            {activeStep === "skills" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2 mb-6">Compétences techniques</h2>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ajouter une compétence</label>
                  <input type="text" placeholder="Ex: React, Node.js, AWS..." className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#00b8d9]/50 focus:border-[#00b8d9] transition-all" />
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1.5 bg-[#00b8d9]/10 text-[#00b8d9] text-sm font-bold rounded-lg border border-[#00b8d9]/20 flex items-center gap-1 cursor-pointer hover:bg-[#00b8d9] hover:text-white transition-colors">
                    React <span className="ml-1 opacity-60 text-xs">×</span>
                  </span>
                  <span className="px-3 py-1.5 bg-[#00b8d9]/10 text-[#00b8d9] text-sm font-bold rounded-lg border border-[#00b8d9]/20 flex items-center gap-1 cursor-pointer hover:bg-[#00b8d9] hover:text-white transition-colors">
                    TypeScript <span className="ml-1 opacity-60 text-xs">×</span>
                  </span>
                  <span className="px-3 py-1.5 bg-[#00b8d9]/10 text-[#00b8d9] text-sm font-bold rounded-lg border border-[#00b8d9]/20 flex items-center gap-1 cursor-pointer hover:bg-[#00b8d9] hover:text-white transition-colors">
                    Tailwind CSS <span className="ml-1 opacity-60 text-xs">×</span>
                  </span>
                </div>

                <div className="flex justify-between pt-8 border-t border-gray-100 mt-8">
                  <button onClick={() => setActiveStep("education")} className="px-6 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Retour</button>
                  <button className="flex items-center gap-2 px-8 py-2.5 text-sm font-bold text-white rounded-lg transition-transform hover:-translate-y-0.5 shadow-md" style={{ backgroundColor: "#10b981" }}>
                    <HiCheck className="w-5 h-5" /> Terminer mon profil
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
