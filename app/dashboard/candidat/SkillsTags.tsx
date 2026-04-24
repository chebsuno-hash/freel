"use client";

import { useState } from "react";
import { HiXMark, HiPlus } from "react-icons/hi2";

const SUGGESTED_SKILLS = [
  "React", "Vue", "Angular", "TypeScript", "JavaScript", "Node.js",
  "Python", "Java", "Go", "PHP", "C#", "Ruby", "Rust",
  "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform",
  "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST",
  "Git", "CI/CD", "Linux", "Agile", "Scrum",
  "Machine Learning", "Data Science", "Cybersécurité",
  "Next.js", "Tailwind CSS", "Figma", "Spark", "Ansible",
];

interface SkillsTagsProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillsTags({ skills, onChange }: SkillsTagsProps) {
  const [input, setInput] = useState("");

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onChange([...skills, trimmed]);
    }
    setInput("");
  };

  const removeSkill = (skill: string) => {
    onChange(skills.filter((s) => s !== skill));
  };

  const suggestions = input.length >= 2
    ? SUGGESTED_SKILLS.filter((s) => s.toLowerCase().includes(input.toLowerCase()) && !skills.includes(s)).slice(0, 6)
    : [];

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Compétences techniques
      </label>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border"
            style={{ backgroundColor: "rgba(0,184,217,0.08)", color: "#00b8d9", borderColor: "rgba(0,184,217,0.2)" }}
          >
            {skill}
            <button onClick={() => removeSkill(skill)} className="hover:text-red-500 cursor-pointer transition-colors">
              <HiXMark className="w-3.5 h-3.5" />
            </button>
          </span>
        ))}
      </div>

      {/* Input */}
      <div className="relative">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-[#00b8d9] focus-within:bg-white transition-all">
          <HiPlus className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Ajouter une compétence..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSkill(input); } }}
            className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-gray-100 shadow-xl z-10 py-1 overflow-hidden">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => addSkill(s)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#00b8d9]/5 hover:text-[#00b8d9] transition-colors cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Quick add */}
      {skills.length < 5 && (
        <div className="mt-3">
          <p className="text-xs text-gray-400 mb-2">Suggestions :</p>
          <div className="flex flex-wrap gap-1.5">
            {SUGGESTED_SKILLS.filter((s) => !skills.includes(s)).slice(0, 8).map((s) => (
              <button
                key={s}
                onClick={() => addSkill(s)}
                className="px-2.5 py-1 rounded-lg text-xs text-gray-500 bg-gray-100 border border-gray-200 hover:border-[#00b8d9]/30 hover:text-[#00b8d9] hover:bg-[#00b8d9]/5 transition-all cursor-pointer"
              >
                + {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
