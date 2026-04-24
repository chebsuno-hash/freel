"use client";

import { HiBriefcase, HiClock, HiCheckCircle, HiXCircle } from "react-icons/hi2";

const mockApplications = [
  { id: 1, title: "Développeur React Senior", company: "TechCorp", date: "22 avr. 2026", status: "pending", tags: ["React", "TypeScript"] },
  { id: 2, title: "Full-Stack Node.js", company: "StartupFlow", date: "18 avr. 2026", status: "accepted", tags: ["Node.js", "MongoDB"] },
  { id: 3, title: "Lead Frontend", company: "DataViz Pro", date: "15 avr. 2026", status: "rejected", tags: ["Vue", "D3.js"] },
  { id: 4, title: "Ingénieur DevOps", company: "CloudScale", date: "10 avr. 2026", status: "pending", tags: ["Docker", "AWS"] },
];

const statusMap: Record<string, { label: string; color: string; bg: string; icon: React.ComponentType<{ className?: string }> }> = {
  pending: { label: "En attente", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", icon: HiClock },
  accepted: { label: "Acceptée", color: "#10b981", bg: "rgba(16,185,129,0.1)", icon: HiCheckCircle },
  rejected: { label: "Refusée", color: "#ef4444", bg: "rgba(239,68,68,0.1)", icon: HiXCircle },
};

export default function CandidaturesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <HiBriefcase className="w-6 h-6" style={{ color: "#00b8d9" }} />
            Mes Candidatures
          </h2>
          <p className="text-sm text-gray-500 mt-1">Suivez l&apos;état de vos candidatures en temps réel.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total", count: 4, color: "#00b8d9" },
          { label: "En attente", count: 2, color: "#f59e0b" },
          { label: "Acceptées", count: 1, color: "#10b981" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm text-center">
            <p className="text-2xl font-black" style={{ color: s.color }}>{s.count}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Applications list */}
      <div className="space-y-3">
        {mockApplications.map((app) => {
          const st = statusMap[app.status];
          const StatusIcon = st.icon;
          return (
            <div key={app.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0a1628, #111d33)" }}>
                <HiBriefcase className="w-5 h-5" style={{ color: "#00b8d9" }} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-800 truncate">{app.title}</h4>
                <p className="text-xs text-gray-500">{app.company} • {app.date}</p>
                <div className="flex gap-1.5 mt-1.5">
                  {app.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-50 text-gray-500 border border-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0" style={{ backgroundColor: st.bg, color: st.color }}>
                <StatusIcon className="w-3.5 h-3.5" />
                {st.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-700">
        <strong>En construction</strong> — Le système de candidature avec suivi en temps réel sera connecté à la base de données prochainement.
      </div>
    </div>
  );
}
