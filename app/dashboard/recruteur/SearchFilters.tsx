"use client";

import { useState } from "react";
import { HiXMark, HiPlus, HiMagnifyingGlass } from "react-icons/hi2";

const SKILL_OPTIONS = [
  "React", "Vue", "Angular", "TypeScript", "JavaScript", "Node.js",
  "Python", "Java", "Go", "PHP", "C#", "Docker", "Kubernetes",
  "AWS", "Azure", "GCP", "PostgreSQL", "MongoDB", "Redis",
  "GraphQL", "REST", "Git", "CI/CD", "Terraform", "Ansible",
  "Machine Learning", "Spark", "Next.js", "Tailwind CSS",
  "Cybersécurité", "Linux", "Agile",
];

const CITIES = [
  "Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux",
  "Lille", "Nantes", "Strasbourg", "Rennes", "Nice",
  "Remote",
];

interface Filters {
  skills: string[];
  minExperience: number;
  maxExperience: number;
  availability: string[];
  location: string;
  search: string;
}

interface SearchFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onSearch: () => void;
  resultCount: number;
}

export default function SearchFilters({ filters, onChange, onSearch, resultCount }: SearchFiltersProps) {
  const [skillInput, setSkillInput] = useState("");

  const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onChange({ ...filters, [key]: value });
  };

  const addSkill = (skill: string) => {
    if (skill && !filters.skills.includes(skill)) {
      update("skills", [...filters.skills, skill]);
    }
    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    update("skills", filters.skills.filter((s) => s !== skill));
  };

  const toggleAvailability = (value: string) => {
    update(
      "availability",
      filters.availability.includes(value)
        ? filters.availability.filter((a) => a !== value)
        : [...filters.availability, value]
    );
  };

  const suggestions = skillInput.length >= 1
    ? SKILL_OPTIONS.filter((s) => s.toLowerCase().includes(skillInput.toLowerCase()) && !filters.skills.includes(s)).slice(0, 5)
    : [];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100" style={{ background: "linear-gradient(135deg, #0a1628, #111d33)" }}>
        <h3 className="text-white font-bold text-sm flex items-center gap-2">
          <HiMagnifyingGlass className="w-4 h-4" style={{ color: "#00b8d9" }} />
          Filtres de recherche
        </h3>
        <p className="text-gray-400 text-xs mt-1">{resultCount} candidat{resultCount !== 1 ? "s" : ""} trouvé{resultCount !== 1 ? "s" : ""}</p>
      </div>

      <div className="p-5 space-y-5">
        {/* Text search */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Recherche</label>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-[#00b8d9] focus-within:bg-white transition-all">
            <HiMagnifyingGlass className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => update("search", e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch()}
              placeholder="Nom, titre, mot-clé..."
              className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Compétences</label>
          {filters.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {filters.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium" style={{ backgroundColor: "rgba(0,184,217,0.1)", color: "#00b8d9" }}>
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="hover:text-red-500 cursor-pointer"><HiXMark className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          )}
          <div className="relative">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-[#00b8d9] transition-all">
              <HiPlus className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && skillInput) { e.preventDefault(); addSkill(skillInput); }}}
                placeholder="React, Python..."
                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-gray-100 shadow-lg z-10 py-1">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => addSkill(s)} className="w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-[#00b8d9]/5 hover:text-[#00b8d9] cursor-pointer">{s}</button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Expérience : {filters.minExperience} – {filters.maxExperience} ans
          </label>
          <div className="flex items-center gap-3">
            <input type="range" min="0" max="20" value={filters.minExperience} onChange={(e) => update("minExperience", parseInt(e.target.value))} className="w-full accent-[#00b8d9]" />
            <input type="range" min="0" max="20" value={filters.maxExperience} onChange={(e) => update("maxExperience", parseInt(e.target.value))} className="w-full accent-[#00b8d9]" />
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 mt-1"><span>0 ans</span><span>20 ans</span></div>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Disponibilité</label>
          {[
            { value: "DISPONIBLE", label: "Disponible", color: "#10b981" },
            { value: "BIENTOT_DISPONIBLE", label: "Bientôt disponible", color: "#f59e0b" },
            { value: "EN_MISSION", label: "En mission", color: "#ef4444" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.availability.includes(opt.value)}
                onChange={() => toggleAvailability(opt.value)}
                className="w-4 h-4 rounded border-gray-300 accent-[#00b8d9]"
              />
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: opt.color }} />
              <span className="text-sm text-gray-600 group-hover:text-gray-800">{opt.label}</span>
            </label>
          ))}
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Localisation</label>
          <select
            value={filters.location}
            onChange={(e) => update("location", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-[#00b8d9] transition-all cursor-pointer"
          >
            <option value="">Toutes les villes</option>
            {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Search button */}
        <button
          onClick={onSearch}
          className="w-full py-2.5 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer"
          style={{ backgroundColor: "#00b8d9", boxShadow: "0 4px 14px rgba(0,184,217,0.3)" }}
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}
