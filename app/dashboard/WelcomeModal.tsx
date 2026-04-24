"use client";

import { useState } from "react";
import {
  HiInformationCircle,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

interface WelcomeModalProps {
  isOpen: boolean;
  onSave: (data: { civility: string; firstName: string; lastName: string; pseudo: string }) => void;
  onLogout: () => void;
}

export default function WelcomeModal({ isOpen, onSave, onLogout }: WelcomeModalProps) {
  const [civility, setCivility] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!civility) errs.civility = "Veuillez sélectionner votre civilité.";
    if (!firstName.trim() || firstName.trim().length < 2) errs.firstName = "Minimum 2 caractères.";
    if (!lastName.trim() || lastName.trim().length < 2) errs.lastName = "Minimum 2 caractères.";
    if (!pseudo.trim() || pseudo.trim().length < 3) errs.pseudo = "Minimum 3 caractères.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSaving(true);
    await onSave({ civility, firstName: firstName.trim(), lastName: lastName.trim(), pseudo: pseudo.trim() });
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.7)", backdropFilter: "blur(8px)" }} />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: "welcomeIn 0.4s cubic-bezier(0.16,1,0.3,1)" }}
      >
        {/* Top accent bar */}
        <div className="h-1.5" style={{ background: "linear-gradient(90deg, #00b8d9, #0a1628, #00b8d9)" }} />

        {/* Content */}
        <div className="px-7 pt-7 pb-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "linear-gradient(135deg, rgba(0,184,217,0.15), rgba(10,22,40,0.08))" }}
            >
              <span className="text-3xl">👋</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Bienvenue !</h2>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
              Veuillez compléter les informations suivantes<br />pour une meilleure expérience.
            </p>
          </div>

          {/* Civility */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Civilité</label>
            <div className="flex gap-3">
              {[
                { value: "M", label: "M." },
                { value: "Mme", label: "Mme" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => { setCivility(opt.value); setErrors((e) => ({ ...e, civility: "" })); }}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 cursor-pointer"
                  style={
                    civility === opt.value
                      ? { borderColor: "#00b8d9", backgroundColor: "rgba(0,184,217,0.06)", color: "#00b8d9" }
                      : { borderColor: "#e5e7eb", backgroundColor: "white", color: "#6b7280" }
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {errors.civility && <p className="text-xs text-red-500 mt-1">{errors.civility}</p>}
          </div>

          {/* Name row */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Prénom</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value); setErrors((er) => ({ ...er, firstName: "" })); }}
                placeholder="Jean"
                className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border text-sm text-gray-700 placeholder-gray-400 outline-none focus:bg-white transition-all"
                style={{ borderColor: errors.firstName ? "#ef4444" : "#e5e7eb" }}
              />
              {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => { setLastName(e.target.value); setErrors((er) => ({ ...er, lastName: "" })); }}
                placeholder="Dupont"
                className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border text-sm text-gray-700 placeholder-gray-400 outline-none focus:bg-white transition-all"
                style={{ borderColor: errors.lastName ? "#ef4444" : "#e5e7eb" }}
              />
              {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Pseudo */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Pseudo sur les forums</label>
            <input
              type="text"
              value={pseudo}
              onChange={(e) => { setPseudo(e.target.value); setErrors((er) => ({ ...er, pseudo: "" })); }}
              placeholder="jean_dev"
              className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border text-sm text-gray-700 placeholder-gray-400 outline-none focus:bg-white transition-all"
              style={{ borderColor: errors.pseudo ? "#ef4444" : "#e5e7eb" }}
            />
            {errors.pseudo && <p className="text-xs text-red-500 mt-1">{errors.pseudo}</p>}
            <p className="text-[11px] text-gray-400 mt-1.5">
              Vous pourrez modifier ce pseudo depuis les paramètres de votre compte.
            </p>
          </div>

          {/* Info alert */}
          <div
            className="flex items-start gap-2.5 px-4 py-3 rounded-xl mb-6 text-sm"
            style={{ backgroundColor: "rgba(0,184,217,0.06)", border: "1px solid rgba(0,184,217,0.15)" }}
          >
            <HiInformationCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00b8d9" }} />
            <p className="text-gray-600 leading-relaxed">
              Votre nom est utilisé <strong>uniquement</strong> lors de vos candidatures. Il ne sera pas affiché publiquement.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-2.5">
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="w-full py-3 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer"
              style={{ backgroundColor: "#0a1628", boxShadow: "0 4px 14px rgba(10,22,40,0.25)" }}
            >
              {saving ? "Enregistrement..." : "Enregistrer"}
            </button>
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl border transition-all hover:bg-gray-50 cursor-pointer"
              style={{ borderColor: "#d1d5db", color: "#6b7280" }}
            >
              <HiArrowRightOnRectangle className="w-4 h-4" />
              Se déconnecter
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes welcomeIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
