"use client";

import Link from "next/link";
import {
  HiOutlineEye,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiArrowRight
} from "react-icons/hi2";

export default function CandidatDashboard() {
  const profileCompletion = 70; // Mock data

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome banner */}
      <div className="relative rounded-3xl p-8 overflow-hidden shadow-sm" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a2c4e 100%)" }}>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b8d9] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-[#00b8d9] opacity-10 rounded-full blur-2xl translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
            Bonjour Youssef 👋
          </h1>
          <p className="text-indigo-100 text-sm max-w-xl leading-relaxed">
            Bienvenue sur votre espace candidat. C'est ici que vous gérez vos informations, vos candidatures et que vous découvrez les missions qui matchent avec votre profil.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (8 cols): Progress & Main Stats */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Profile Completion Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex-1 w-full">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-bold text-gray-800 text-lg">Complétion du profil</h3>
                  <span className="text-sm font-extrabold" style={{ color: "#00b8d9" }}>{profileCompletion}%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="h-2.5 rounded-full transition-all duration-1000 ease-out relative" 
                    style={{ width: `${profileCompletion}%`, backgroundColor: "#00b8d9" }}
                  >
                    <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }}></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">Votre profil est presque prêt. Ajoutez vos expériences pour atteindre les 100%.</p>
              </div>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Link 
                  href="/dashboard/candidat/profil"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-white shadow-lg shadow-[#00b8d9]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl inline-flex justify-center items-center gap-2"
                  style={{ backgroundColor: "#00b8d9" }}
                >
                  Compléter mon profil
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineEye className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-[#0a1628] mb-1">24</p>
              <p className="text-sm font-medium text-gray-500">Vues du profil (30j)</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineBriefcase className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-[#0a1628] mb-1">3</p>
              <p className="text-sm font-medium text-gray-500">Candidatures en cours</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#00b8d9]/10 text-[#00b8d9] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineSparkles className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-[#0a1628] mb-1">12</p>
              <p className="text-sm font-medium text-gray-500">Nouvelles offres matchées</p>
            </div>

          </div>

        </div>

        {/* Right Column (4 cols): Secondary info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Matches Preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 text-lg mb-4">Derniers matchs</h3>
            
            <div className="space-y-4">
              {[
                { title: "Lead Dev React", company: "TechCorp", location: "Remote" },
                { title: "Ingénieur Cloud Azure", company: "ConsultIT", location: "Paris" }
              ].map((job, i) => (
                <div key={i} className="group cursor-pointer border border-gray-50 bg-gray-50 rounded-xl p-4 hover:border-[#00b8d9]/30 transition-colors">
                  <h4 className="font-bold text-[#0a1628] text-sm group-hover:text-[#00b8d9] transition-colors">{job.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{job.company} • {job.location}</p>
                </div>
              ))}
            </div>

            <Link href="/dashboard/candidat/offres" className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-[#00b8d9] hover:text-[#0092ad] transition-colors w-full py-2 bg-[#00b8d9]/5 rounded-xl">
              Voir tous les matchs <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
