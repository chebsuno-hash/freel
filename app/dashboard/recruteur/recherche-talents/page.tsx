"use client";

import Link from "next/link";

import { 
  HiMagnifyingGlass, 
  HiAdjustmentsHorizontal,
  HiOutlineUser,
  HiOutlineCurrencyEuro,
  HiMapPin
} from "react-icons/hi2";

const MOCK_TALENTS = [
  {
    id: 1,
    firstName: "Thomas",
    lastName: "D.",
    title: "Développeur React Senior",
    availability: "Disponible",
    color: "bg-emerald-100 text-emerald-700",
    tags: ["React", "TypeScript", "Node.js"],
    tjm: "600",
    location: "Paris (Remote possible)"
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "C.",
    title: "Data Scientist / Python",
    availability: "Dans 2 semaines",
    color: "bg-amber-100 text-amber-700",
    tags: ["Python", "TensorFlow", "SQL"],
    tjm: "750",
    location: "Lyon"
  },
  {
    id: 3,
    firstName: "Lucas",
    lastName: "M.",
    title: "Ingénieur DevOps Cloud",
    availability: "Disponible",
    color: "bg-emerald-100 text-emerald-700",
    tags: ["AWS", "Kubernetes", "Terraform"],
    tjm: "800",
    location: "100% Remote"
  },
  {
    id: 4,
    firstName: "Marie",
    lastName: "L.",
    title: "Product Manager B2B",
    availability: "À l'écoute",
    color: "bg-blue-100 text-blue-700",
    tags: ["Agile", "Scrum", "Jira"],
    tjm: "550",
    location: "Nantes"
  },
  {
    id: 5,
    firstName: "Youssef",
    lastName: "B.",
    title: "Développeur Fullstack JS",
    availability: "Disponible",
    color: "bg-emerald-100 text-emerald-700",
    tags: ["Vue.js", "Express", "MongoDB"],
    tjm: "450",
    location: "Bordeaux"
  },
  {
    id: 6,
    firstName: "Emma",
    lastName: "P.",
    title: "Architecte Logiciel Java",
    availability: "Dans 1 mois",
    color: "bg-purple-100 text-purple-700",
    tags: ["Java 17", "Spring Boot", "Kafka"],
    tjm: "900",
    location: "Paris"
  }
];

export default function CVthequePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Recherche de profils (CVthèque)</h1>
        <p className="text-sm text-gray-500">Trouvez les meilleurs freelances et candidats pour vos projets tech.</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-2 flex flex-col md:flex-row rounded-3xl shadow-sm border border-gray-100 gap-2">
        {/* Search */}
        <div className="flex-1 flex items-center bg-gray-50 rounded-2xl px-5 py-3 border border-transparent focus-within:border-[#00b8d9]/50 transition-colors">
          <HiMagnifyingGlass className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Métier, compétence, technologie..." 
            className="bg-transparent w-full text-sm text-gray-700 outline-none placeholder-gray-400"
          />
        </div>

        {/* Availability */}
        <div className="flex items-center bg-gray-50 rounded-2xl px-5 py-3 border border-transparent focus-within:border-[#00b8d9]/50 transition-colors md:w-48">
          <select className="bg-transparent w-full text-sm text-gray-700 outline-none cursor-pointer">
            <option value="">Disponibilité</option>
            <option value="immediat">Immédiate</option>
            <option value="1mois">Dans 1 mois</option>
            <option value="ecoute">À l'écoute</option>
          </select>
        </div>

        {/* TJM Max */}
        <div className="flex items-center bg-gray-50 rounded-2xl px-5 py-3 border border-transparent focus-within:border-[#00b8d9]/50 transition-colors md:w-40">
          <HiOutlineCurrencyEuro className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
          <input 
            type="number" 
            placeholder="TJM Max" 
            className="bg-transparent w-full text-sm text-gray-700 outline-none placeholder-gray-400"
          />
        </div>

        {/* Filters & Button */}
        <button className="px-5 flex items-center justify-center text-gray-500 hover:text-[#00b8d9] hover:bg-cyan-50 rounded-2xl transition-colors">
          <HiAdjustmentsHorizontal className="w-5 h-5" />
        </button>
        <button 
          className="px-8 py-3 rounded-2xl text-white font-bold text-sm transition-transform hover:-translate-y-0.5 shadow-md flex-shrink-0"
          style={{ backgroundColor: "#00b8d9" }}
        >
          Rechercher
        </button>
      </div>

      {/* Results Meta */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-gray-700">
          <span className="text-[#00b8d9]">342</span> profils correspondants
        </p>
        <div className="text-sm text-gray-500">
          Trier par : <span className="font-semibold text-gray-800 cursor-pointer">Pertinence ▾</span>
        </div>
      </div>

      {/* Talent Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_TALENTS.map((talent) => (
          <div key={talent.id} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-[#00b8d9]/30 transition-all duration-300 group flex flex-col relative overflow-hidden">
            
            {/* Top: Avatar & Name */}
            <div className="flex flex-col items-center text-center mb-5 relative z-10">
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-md bg-gradient-to-br from-[#0a1628] to-indigo-900">
                  {talent.firstName[0]}{talent.lastName[0]}
                </div>
                {talent.availability === "Disponible" && (
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full"></div>
                )}
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-[#00b8d9] transition-colors">{talent.firstName} {talent.lastName}</h3>
              <span className={`mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide inline-block ${talent.color}`}>
                {talent.availability}
              </span>
            </div>

            {/* Center: Info & Tags */}
            <div className="flex-1 text-center mb-5 relative z-10">
              <p className="font-bold text-[#0a1628] text-sm mb-3">{talent.title}</p>
              
              <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500 mb-4 font-medium">
                <HiMapPin className="w-3.5 h-3.5 text-gray-400" /> {talent.location}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {talent.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-600 border border-gray-100 rounded text-[11px] font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom: TJM & Button */}
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">TJM</span>
                <span className="font-black text-gray-900">{talent.tjm}€</span>
              </div>
              <Link href={`/dashboard/recruteur/recherche-talents/${talent.id}`} className="px-5 py-2 text-xs font-bold text-[#00b8d9] bg-[#00b8d9]/10 hover:bg-[#00b8d9] hover:text-white rounded-xl transition-colors inline-block text-center">
                Voir le profil
              </Link>
            </div>
            
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-8">
        <button className="px-6 py-3 text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all">
          Afficher plus de profils
        </button>
      </div>

    </div>
  );
}
