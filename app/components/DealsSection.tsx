"use client";

import { FaSlack, FaGithub, FaAws, FaJira, FaConfluence, FaDigitalOcean } from "react-icons/fa";

export default function DealsSection() {
  return (
    <section className="py-20 border-t border-white/5" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Les meilleurs <span style={{ color: "#00b8d9" }}>deals</span> pour les meilleurs outils
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Profitez de réductions exclusives sur les outils indispensables à votre activité de freelance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <button 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-extrabold text-xs transition-all hover:-translate-y-0.5 uppercase tracking-wide shadow-lg"
            style={{ backgroundColor: "#00b8d9" }}
          >
            Voir tous les deals
          </button>
          <button 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-extrabold text-xs transition-all hover:-translate-y-0.5 uppercase tracking-wide border border-white/20 hover:bg-white/5"
          >
            Publier un deal
          </button>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2 text-white hover:text-[#4A154B] transition-colors cursor-pointer">
            <FaSlack className="w-8 h-8" />
            <span className="text-[10px] font-bold tracking-wider">SLACK</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white hover:text-white transition-colors cursor-pointer">
            <FaGithub className="w-8 h-8" />
            <span className="text-[10px] font-bold tracking-wider">GITHUB</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white hover:text-[#FF9900] transition-colors cursor-pointer">
            <FaAws className="w-8 h-8" />
            <span className="text-[10px] font-bold tracking-wider">AWS</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white hover:text-[#0052CC] transition-colors cursor-pointer">
            <FaJira className="w-8 h-8" />
            <span className="text-[10px] font-bold tracking-wider">JIRA</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white hover:text-[#0052CC] transition-colors cursor-pointer">
            <FaConfluence className="w-8 h-8" />
            <span className="text-[10px] font-bold tracking-wider">CONFLUENCE</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white hover:text-[#0080FF] transition-colors cursor-pointer">
            <FaDigitalOcean className="w-8 h-8" />
            <span className="text-[10px] font-bold tracking-wider">DIGITALOCEAN</span>
          </div>
        </div>

      </div>
    </section>
  );
}
