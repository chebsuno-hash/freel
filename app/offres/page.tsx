"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HiMagnifyingGlass,
  HiMapPin,
  HiBriefcase,
  HiClock,
  HiCurrencyEuro,
  HiArrowPath,
  HiBellAlert,
  HiChevronRight,
  HiOutlineBuildingOffice2
} from "react-icons/hi2";

const MOCK_JOBS = [
  {
    id: 1,
    title: "Ingénieur Cybersécurité Cloud (H/F)",
    company: "THALES",
    logo: "T",
    location: "Vélizy-Villacoublay, France • Hybride",
    type: "CDI",
    date: "Il y a 30 minutes",
    abstract: "Vous rejoignez l'équipe Cloud Security pour concevoir et déployer des architectures sécurisées sur AWS et Azure. Vous serez garant de la conformité SecNumCloud.",
    salary: "60k - 75k",
    tags: ["AWS", "Azure", "Cybersécurité", "SecNumCloud"]
  },
  {
    id: 2,
    title: "Développeur Fullstack React / Node.js Senior",
    company: "Qonto",
    logo: "Q",
    location: "Paris, France • Remote possible",
    type: "Freelance",
    date: "Il y a 2 heures",
    abstract: "Mission longue durée pour renforcer la squad Core Banking. Stack: React, TypeScript, Node.js, PostgreSQL. Méthodologie agile stricte.",
    tjm: "650",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Data Engineer Confirmé - GCP",
    company: "LVMH Tech",
    logo: "L",
    location: "Paris, France • Sur site",
    type: "Freelance",
    date: "Il y a 5 heures",
    abstract: "Création de pipelines de données complexes sur Google Cloud Platform (BigQuery, Dataflow). Migration des anciens systèmes on-premise vers le cloud.",
    tjm: "700",
    tags: ["GCP", "Python", "BigQuery", "Airflow"]
  },
  {
    id: 4,
    title: "Product Manager B2B SaaS",
    company: "Doctolib",
    logo: "D",
    location: "Nantes, France • Hybride",
    type: "CDI",
    date: "Il y a 1 jour",
    abstract: "En tant que PM, vous prendrez en charge la roadmap du produit destiné aux professionnels de santé. Forte composante analytique et UX attendue.",
    salary: "55k - 70k",
    tags: ["Product Management", "SaaS", "Agile", "UX"]
  },
  {
    id: 5,
    title: "Architecte Logiciel Java/Spring",
    company: "Société Générale",
    logo: "SG",
    location: "La Défense, France • Hybride",
    type: "Freelance",
    date: "Il y a 1 jour",
    abstract: "Design et implémentation de microservices critiques pour le système de trading. Fortes contraintes de latence et de haute disponibilité.",
    tjm: "850",
    tags: ["Java 17", "Spring Boot", "Microservices", "Kafka"]
  }
];

const POPULAR_MISSIONS = [
  "Développeur Python", "Chef de projet IT", "Data Analyst", "DevOps Engineer", "Consultant SAP"
];

const TOP_CITIES = [
  "Paris (1 432 offres)", "Lyon (450 offres)", "Nantes (320 offres)", "Bordeaux (280 offres)", "Toulouse (210 offres)", "100% Remote (850 offres)"
];

function OffresContent() {
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [contractTypeInput, setContractTypeInput] = useState("Tous");

  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
        
        {/* Header Search */}
        <div className="bg-[#0a1628] py-8 px-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full flex items-center bg-white rounded-xl px-4 py-3 shadow-inner">
              <HiMagnifyingGlass className="w-5 h-5 text-gray-400 mr-3" />
              <input 
                type="text" 
                placeholder="Métier, mot-clé ou entreprise" 
                className="bg-transparent w-full text-sm text-gray-700 outline-none"
              />
            </div>
            <div className="flex-1 w-full flex items-center bg-white rounded-xl px-4 py-3 shadow-inner">
              <HiMapPin className="w-5 h-5 text-gray-400 mr-3" />
              <input 
                type="text" 
                placeholder="Où ?" 
                className="bg-transparent w-full text-sm text-gray-700 outline-none"
              />
            </div>
            <div className="w-full md:w-48 bg-white rounded-xl px-4 py-3 shadow-inner">
              <select className="bg-transparent w-full text-sm text-gray-700 outline-none cursor-pointer">
                <option value="Tous">Type de contrat</option>
                <option value="Freelance">Freelance</option>
                <option value="CDI">CDI</option>
              </select>
            </div>
            <button className="w-full md:w-auto px-8 py-3 rounded-xl text-white font-bold text-sm shadow-lg" style={{ backgroundColor: "#00b8d9" }}>
              Rechercher
            </button>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Job Cards (70%) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-800">
                  Trouvez votre prochaine mission <span className="text-gray-400 font-normal text-sm ml-2">5 offres</span>
                </h1>
                <div className="text-sm text-gray-500">
                  Trier par : <span className="font-semibold text-gray-800 cursor-pointer">Pertinence ▾</span>
                </div>
              </div>

              {MOCK_JOBS.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer flex flex-col sm:flex-row gap-5">
                  
                  {/* Logo Placeholder */}
                  <div className="hidden sm:flex w-16 h-16 rounded-xl flex-shrink-0 items-center justify-center font-bold text-2xl text-white shadow-sm" style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)" }}>
                    {job.logo}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${job.type === 'Freelance' ? 'bg-[#00b8d9]/10 text-[#00b8d9]' : 'bg-indigo-100 text-indigo-600'}`}>
                          {job.type}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <HiClock className="w-3.5 h-3.5" /> {job.date}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-lg font-bold text-[#0a1628] hover:text-[#00b8d9] transition-colors leading-tight mb-2">
                      {job.title}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-600 mb-3">
                      <span className="flex items-center gap-1 text-gray-900 font-bold">
                        <HiOutlineBuildingOffice2 className="w-4 h-4 text-gray-400" /> {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiMapPin className="w-4 h-4 text-gray-400" /> {job.location}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                      {job.abstract}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded text-[11px] font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        {job.tjm ? (
                          <span className="text-sm font-bold text-gray-800">{job.tjm}€ <span className="text-xs text-gray-500 font-normal">/jour</span></span>
                        ) : (
                          <span className="text-sm font-bold text-gray-800">{job.salary} <span className="text-xs text-gray-500 font-normal">/an</span></span>
                        )}
                        <Link href={`/offres/${job.id}`} className="px-4 py-2 text-sm font-bold text-white rounded-lg shadow-sm inline-block" style={{ backgroundColor: "#00b8d9" }}>
                          Voir l'offre
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Sidebar (30%) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Alerte Email */}
              <div className="bg-white rounded-xl border-l-4 p-5 shadow-sm" style={{ borderLeftColor: "#00b8d9", borderTop: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                <div className="flex items-center gap-3 mb-2">
                  <HiBellAlert className="w-6 h-6" style={{ color: "#00b8d9" }} />
                  <h3 className="font-bold text-gray-900">Créer une alerte e-mail</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Soyez le premier informé des nouvelles missions correspondant à vos critères.
                </p>
                <input type="email" placeholder="votre@email.com" className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg mb-2 outline-none focus:border-[#00b8d9]" />
                <button className="w-full py-2 text-sm font-bold text-white rounded-lg transition-colors hover:bg-opacity-90" style={{ backgroundColor: "#0a1628" }}>
                  M'alerter
                </button>
              </div>

              {/* Missions les plus consultées */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Missions les plus consultées
                </h3>
                <ul className="space-y-3">
                  {POPULAR_MISSIONS.map((mission, i) => (
                    <li key={i} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-sm text-gray-600 group-hover:text-[#00b8d9] transition-colors">{mission}</span>
                      <HiChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#00b8d9]" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Offres par ville */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Offres par ville
                </h3>
                <ul className="space-y-3">
                  {TOP_CITIES.map((city, i) => (
                    <li key={i} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-sm text-gray-600 group-hover:text-[#00b8d9] transition-colors">{city}</span>
                      <HiChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#00b8d9]" />
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function OffresPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <HiArrowPath className="w-8 h-8 animate-spin" style={{ color: "#00b8d9" }} />
      </div>
    }>
      <OffresContent />
    </Suspense>
  );
}
