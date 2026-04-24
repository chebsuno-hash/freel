"use client";

import Link from "next/link";
import {
  HiOutlineArrowLeft,
  HiOutlineEnvelope,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";

const MOCK_CANDIDATS = [
  { id: 1, name: "Alice Dupont", title: "Développeuse React Senior", exp: "5 ans", status: "Nouveau", avatar: "A", color: "bg-indigo-500", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: 2, name: "Thomas Martin", title: "Ingénieur DevOps", exp: "8 ans", status: "En revue", avatar: "T", color: "bg-[#00b8d9]", statusColor: "bg-amber-100 text-amber-700" },
  { id: 3, name: "Sarah Connor", title: "Fullstack Node.js / React", exp: "4 ans", status: "Entretien", avatar: "S", color: "bg-purple-500", statusColor: "bg-[#00b8d9]/10 text-[#00b8d9]" },
  { id: 4, name: "Luc Dubois", title: "Architecte Cloud AWS", exp: "10 ans", status: "Nouveau", avatar: "L", color: "bg-emerald-500", statusColor: "bg-emerald-100 text-emerald-700" },
];

export default function OffreCandidatsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back link */}
      <Link
        href="/dashboard/recruteur/offres"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#00b8d9] transition-colors"
      >
        <HiOutlineArrowLeft className="w-4 h-4" /> Retour aux offres
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Candidats pour cette offre</h1>
        <p className="text-sm text-gray-500">{MOCK_CANDIDATS.length} candidatures reçues</p>
      </div>

      {/* Candidates List */}
      <div className="space-y-3">
        {MOCK_CANDIDATS.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-5"
          >
            {/* Avatar */}
            <div className={`w-11 h-11 rounded-full ${c.color} flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0`}>
              {c.avatar}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-gray-900">{c.name}</h3>
              <p className="text-xs text-gray-500">{c.title} • {c.exp} d&apos;expérience</p>
            </div>

            {/* Status */}
            <span className={`px-3 py-1 text-[11px] font-extrabold rounded-full tracking-wide ${c.statusColor} flex-shrink-0`}>
              {c.status}
            </span>

            {/* Actions */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <Link
                href={`/dashboard/recruteur/recherche-talents/${c.id}`}
                className="p-2 text-gray-400 hover:text-[#00b8d9] hover:bg-cyan-50 rounded-lg transition-colors"
                title="Voir le profil"
              >
                <HiOutlineEnvelope className="w-5 h-5" />
              </Link>
              <button className="p-2 text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer" title="Accepter">
                <HiOutlineCheckCircle className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" title="Rejeter">
                <HiOutlineXCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
