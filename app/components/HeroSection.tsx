"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HiCheck, HiMagnifyingGlass, HiMapPin } from "react-icons/hi2";

export default function HeroSection() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("search", keyword.trim());
    if (location.trim()) params.set("location", location.trim());
    router.push(`/offres${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
      {/* Photo-realistic background placeholder */}
      <div 
        className="absolute inset-0 opacity-20 bg-center bg-cover mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80')" }}
      />
      
      {/* Gradient overlay to ensure text readability */}
      <div 
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.8) 0%, rgba(10,22,40,1) 100%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center">
        
        {/* Badge / Subtitle */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ backgroundColor: "rgba(0,184,217,0.1)", border: "1px solid rgba(0,184,217,0.2)" }}>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#00b8d9" }} />
          <span className="text-[10px] font-bold text-[#00b8d9] uppercase tracking-wider">PLATEFORME #1 EN FRANCE</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Connecting <br />
          <span style={{ color: "#00b8d9" }}>Tech-Talent</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg text-gray-300 max-w-2xl mb-12">
          Trouvez votre prochaine mission freelance ou votre prochain talent IT parmi des milliers d&apos;opportunités vérifiées.
        </p>

        {/* Checkmarks */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-14">
          {[
            { title: "Des missions de qualité", subtitle: "Sélectionnées pour vous" },
            { title: "Matching intelligent", subtitle: "L'IA à votre service" },
            { title: "Paiement sécurisé", subtitle: "Garantie de règlement" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-left max-w-[200px]">
              <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0,184,217,0.2)" }}>
                <HiCheck className="w-3.5 h-3.5" style={{ color: "#00b8d9" }} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white p-2 rounded-full flex flex-col md:flex-row gap-2 shadow-2xl mb-12">
          <div className="flex-1 flex items-center bg-gray-50 rounded-full px-5 py-3 border border-gray-100 focus-within:border-[#00b8d9] transition-colors">
            <HiMagnifyingGlass className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Métier, mot-clé, technologie..." 
              className="bg-transparent w-full text-sm text-gray-700 outline-none placeholder-gray-400"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="flex-1 flex items-center bg-gray-50 rounded-full px-5 py-3 border border-gray-100 focus-within:border-[#00b8d9] transition-colors md:max-w-[250px]">
            <HiMapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Paris, Lyon, Remote..." 
              className="bg-transparent w-full text-sm text-gray-700 outline-none placeholder-gray-400"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button 
            onClick={handleSearch}
            className="px-8 py-3 rounded-full text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex-shrink-0"
            style={{ backgroundColor: "#00b8d9" }}
          >
            Rechercher
          </button>
        </div>

        {/* Discover Button */}
        <Link 
          href="/offres"
          className="px-8 py-4 rounded-full text-white font-extrabold text-sm transition-all hover:-translate-y-1 shadow-2xl inline-block"
          style={{ backgroundColor: "#00b8d9", boxShadow: "0 10px 25px rgba(0,184,217,0.3)" }}
        >
          Découvrir FreelanceIT
        </Link>

      </div>
    </section>
  );
}
