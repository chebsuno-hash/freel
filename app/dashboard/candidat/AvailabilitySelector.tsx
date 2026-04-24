"use client";

interface AvailabilitySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  {
    value: "DISPONIBLE",
    label: "Disponible immédiatement",
    emoji: "🟢",
    desc: "Je suis libre et prêt pour une nouvelle mission.",
  },
  {
    value: "BIENTOT_DISPONIBLE",
    label: "Bientôt disponible",
    emoji: "🟡",
    desc: "Je serai disponible dans quelques semaines.",
  },
  {
    value: "EN_MISSION",
    label: "En mission",
    emoji: "🔴",
    desc: "Je suis actuellement en mission.",
  },
];

export default function AvailabilitySelector({ value, onChange }: AvailabilitySelectorProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        Disponibilité
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map((opt) => {
          const isActive = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? "border-[#00b8d9] bg-[#00b8d9]/5 shadow-md"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{opt.emoji}</span>
                <span className={`text-sm font-semibold ${isActive ? "text-[#00b8d9]" : "text-gray-700"}`}>
                  {opt.label}
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{opt.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
