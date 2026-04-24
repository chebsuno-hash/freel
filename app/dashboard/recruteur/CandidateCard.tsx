"use client";

import {
  HiMapPin,
  HiClock,
  HiBookmark,
  HiEnvelope,
  HiStar,
} from "react-icons/hi2";

interface Candidate {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  title: string | null;
  skills: string[];
  yearsOfExperience: number | null;
  availability: string;
  tjm: number | null;
  location: string | null;
  avatarUrl: string | null;
}

interface CandidateCardProps {
  candidate: Candidate;
  matchScore?: number; // 0-100
  onSave?: (id: string) => void;
  onContact?: (id: string) => void;
}

const availabilityMap: Record<string, { label: string; color: string; bg: string }> = {
  DISPONIBLE: { label: "Disponible", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
  BIENTOT_DISPONIBLE: { label: "Bientôt dispo", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  EN_MISSION: { label: "En mission", color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
};

export default function CandidateCard({ candidate, matchScore, onSave, onContact }: CandidateCardProps) {
  const avail = availabilityMap[candidate.availability] || availabilityMap.DISPONIBLE;
  const initials = `${candidate.firstName?.[0] || ""}${candidate.lastName?.[0] || ""}`.toUpperCase();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative">
      {/* Match score badge */}
      {matchScore != null && matchScore > 0 && (
        <div
          className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg border-2 border-white"
          style={{
            background: matchScore >= 70 ? "linear-gradient(135deg, #10b981, #059669)"
              : matchScore >= 40 ? "linear-gradient(135deg, #f59e0b, #d97706)"
              : "linear-gradient(135deg, #ef4444, #dc2626)",
          }}
        >
          {matchScore}%
        </div>
      )}
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #00b8d9, #0a1628)" }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-gray-800 truncate">
            {candidate.firstName} {candidate.lastName}
          </h4>
          <p className="text-xs text-gray-500 truncate">{candidate.title || "Candidat"}</p>
        </div>
        <span
          className="px-2 py-1 rounded-full text-[10px] font-bold flex-shrink-0"
          style={{ backgroundColor: avail.bg, color: avail.color }}
        >
          {avail.label}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {candidate.skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100"
          >
            {skill}
          </span>
        ))}
        {candidate.skills.length > 4 && (
          <span className="px-2 py-0.5 rounded-md text-[11px] font-medium text-gray-400">
            +{candidate.skills.length - 4}
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
        {candidate.yearsOfExperience != null && (
          <span className="flex items-center gap-1">
            <HiStar className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
            {candidate.yearsOfExperience} ans
          </span>
        )}
        {candidate.location && (
          <span className="flex items-center gap-1">
            <HiMapPin className="w-3.5 h-3.5" />
            {candidate.location}
          </span>
        )}
        {candidate.tjm != null && candidate.tjm > 0 && (
          <span className="flex items-center gap-1 font-semibold" style={{ color: "#00b8d9" }}>
            {candidate.tjm}€/j
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onContact?.(candidate.id)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-white rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer"
          style={{ backgroundColor: "#00b8d9" }}
        >
          <HiEnvelope className="w-3.5 h-3.5" />
          Contacter
        </button>
        <button
          onClick={() => onSave?.(candidate.id)}
          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border border-gray-200 text-gray-600 hover:border-[#00b8d9] hover:text-[#00b8d9] hover:bg-[#00b8d9]/5 transition-all cursor-pointer"
        >
          <HiBookmark className="w-3.5 h-3.5" />
          Sauvegarder
        </button>
      </div>
    </div>
  );
}
