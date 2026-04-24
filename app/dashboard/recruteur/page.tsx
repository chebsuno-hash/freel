"use client";

import Link from "next/link";

import {
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineCalendar,
  HiOutlineEye,
} from "react-icons/hi2";

const MOCK_APPLICATIONS = [
  { id: 1, name: "Alice Dupont", job: "Développeur React Senior", date: "24/04/2026", status: "Nouveau", color: "bg-emerald-100 text-emerald-700", avatar: "A" },
  { id: 2, name: "Thomas Martin", job: "Ingénieur DevOps", date: "23/04/2026", status: "En revue", color: "bg-amber-100 text-amber-700", avatar: "T" },
  { id: 3, name: "Sarah Connor", job: "Data Scientist", date: "22/04/2026", status: "Entretien", color: "bg-[#00b8d9]/10 text-[#00b8d9]", avatar: "S" },
  { id: 4, name: "Luc Dubois", job: "Développeur React Senior", date: "20/04/2026", status: "Rejeté", color: "bg-rose-100 text-rose-700", avatar: "L" },
];

export default function RecruteurDashboardHome() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Welcome banner */}
      <div className="relative rounded-3xl p-8 overflow-hidden shadow-sm" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a2c4e 100%)" }}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b8d9] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-[#00b8d9] opacity-10 rounded-full blur-2xl translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
            Bienvenue dans votre espace recrutement 🚀
          </h1>
          <p className="text-indigo-100 text-sm max-w-xl leading-relaxed">
            Suivez l'activité de vos offres, découvrez de nouveaux talents et gérez vos processus de recrutement en un coup d'œil.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <HiOutlineBriefcase className="w-6 h-6" />
          </div>
          <p className="text-3xl font-black text-[#0a1628] mb-1">5</p>
          <p className="text-sm font-medium text-gray-500">Offres actives</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <HiOutlineUserGroup className="w-6 h-6" />
          </div>
          <p className="text-3xl font-black text-[#0a1628] mb-1">12</p>
          <p className="text-sm font-medium text-gray-500">Nouvelles candidatures</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 rounded-xl bg-[#00b8d9]/10 text-[#00b8d9] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <HiOutlineCalendar className="w-6 h-6" />
          </div>
          <p className="text-3xl font-black text-[#0a1628] mb-1">3</p>
          <p className="text-sm font-medium text-gray-500">Entretiens planifiés</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <HiOutlineEye className="w-6 h-6" />
          </div>
          <p className="text-3xl font-black text-[#0a1628] mb-1">842</p>
          <p className="text-sm font-medium text-gray-500">Vues de vos offres</p>
        </div>
      </div>

      {/* Candidatures Récentes (Table) */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Candidatures récentes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Candidat</th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Poste ciblé</th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_APPLICATIONS.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white bg-indigo-500 shadow-sm">
                        {app.avatar}
                      </div>
                      <span className="text-sm font-bold text-gray-900">{app.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                    {app.job}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {app.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-extrabold rounded-full tracking-wide ${app.color}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/dashboard/recruteur/recherche-talents/${app.id}`} className="text-[#00b8d9] hover:underline font-semibold">Voir le profil</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
