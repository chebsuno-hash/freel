"use client";

import { useState, useRef, useCallback } from "react";
import {
  HiXMark,
  HiDocumentArrowUp,
  HiCheckCircle,
  HiArrowPath,
  HiDocumentText,
  HiCloudArrowUp,
} from "react-icons/hi2";

interface UploadCVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

type UploadPhase = "idle" | "uploading" | "parsing" | "done";

export default function UploadCVModal({
  isOpen,
  onClose,
  onSuccess,
}: UploadCVModalProps) {
  const [phase, setPhase] = useState<UploadPhase>("idle");
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setPhase("idle");
    setFileName("");
    setDragOver(false);
    onClose();
  };

  const simulateUpload = useCallback((name: string) => {
    setFileName(name);
    setPhase("uploading");

    // Phase 1: Uploading (0.8s)
    setTimeout(() => {
      setPhase("parsing");
      // Phase 2: Parsing (1.2s)
      setTimeout(() => {
        setPhase("done");
      }, 1200);
    }, 800);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload(file.name);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) simulateUpload(file.name);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleFinish = () => {
    handleClose();
    onSuccess?.();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(10,22,40,0.7)",
        backdropFilter: "blur(8px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && phase === "idle") handleClose();
      }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        style={{ animation: "modalSlideIn 0.3s ease-out" }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 text-center relative"
          style={{
            background: "linear-gradient(135deg, #0a1628, #111d33)",
          }}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <HiXMark className="w-5 h-5" />
          </button>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
            style={{
              background: "linear-gradient(135deg, #00b8d9, #00a3c4)",
              boxShadow: "0 4px 14px rgba(0,184,217,0.3)",
            }}
          >
            <HiDocumentArrowUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-white font-bold text-lg">Importer mon CV</h2>
          <p className="text-gray-400 text-sm mt-1">
            Déposez votre CV pour être visible par les recruteurs
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* ── Idle: Drop Zone ── */}
          {phase === "idle" && (
            <>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer rounded-2xl p-8 text-center transition-all duration-300"
                style={{
                  border: dragOver
                    ? "2px dashed #00b8d9"
                    : "2px dashed #e2e8f0",
                  backgroundColor: dragOver
                    ? "rgba(0,184,217,0.04)"
                    : "#fafbfc",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300"
                  style={{
                    backgroundColor: dragOver
                      ? "rgba(0,184,217,0.12)"
                      : "rgba(0,184,217,0.08)",
                    transform: dragOver ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <HiCloudArrowUp
                    className="w-8 h-8 transition-colors"
                    style={{ color: dragOver ? "#00b8d9" : "#94a3b8" }}
                  />
                </div>
                <p className="text-sm font-bold text-gray-700 mb-1">
                  {dragOver
                    ? "Déposez votre fichier ici"
                    : "Glissez-déposez votre CV"}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  ou cliquez pour parcourir vos fichiers
                </p>
                <div className="flex items-center justify-center gap-2">
                  {["PDF", "DOC", "DOCX"].map((ext) => (
                    <span
                      key={ext}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gray-100 text-gray-500"
                    >
                      .{ext}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-2">
                  Taille max : 10 Mo
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
              />
            </>
          )}

          {/* ── Uploading Phase ── */}
          {phase === "uploading" && (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 relative">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "conic-gradient(#00b8d9 0deg, transparent 0deg)",
                    animation: "uploadSpin 1s linear infinite",
                  }}
                />
                <div className="absolute inset-[3px] rounded-[13px] bg-white flex items-center justify-center">
                  <HiDocumentArrowUp className="w-7 h-7 text-[#00b8d9]" />
                </div>
              </div>
              <p className="text-sm font-bold text-gray-700 mb-1">
                Téléchargement en cours…
              </p>
              <p className="text-xs text-gray-400">{fileName}</p>
              <div className="mt-4 w-48 mx-auto h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: "#00b8d9",
                    animation: "progressBar 0.8s ease-out forwards",
                  }}
                />
              </div>
            </div>
          )}

          {/* ── Parsing Phase ── */}
          {phase === "parsing" && (
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "rgba(0,184,217,0.08)" }}
              >
                <HiArrowPath className="w-7 h-7 text-[#00b8d9] animate-spin" />
              </div>
              <p className="text-sm font-bold text-gray-700 mb-1">
                Analyse du CV en cours…
              </p>
              <p className="text-xs text-gray-400">
                Extraction des compétences et de l&apos;expérience
              </p>
              <div className="mt-5 space-y-2 max-w-xs mx-auto">
                {["Informations personnelles", "Expérience professionnelle", "Compétences techniques"].map(
                  (step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-2 text-xs"
                      style={{
                        animation: `fadeInStep 0.4s ease-out ${i * 0.3}s both`,
                      }}
                    >
                      <HiCheckCircle className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                      <span className="text-gray-600">{step}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* ── Done Phase ── */}
          {phase === "done" && (
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: "rgba(16,185,129,0.1)",
                  animation: "scaleIn 0.4s ease-out",
                }}
              >
                <HiCheckCircle className="w-8 h-8" style={{ color: "#10b981" }} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                CV importé avec succès ! 🎉
              </h3>
              <p className="text-sm text-gray-500 mb-1 leading-relaxed">
                <strong className="text-gray-700">{fileName}</strong> a été
                analysé et votre profil est prêt.
              </p>
              <p className="text-xs text-gray-400 mb-6">
                Les recruteurs peuvent maintenant vous trouver.
              </p>

              {/* Parsed info preview */}
              <div
                className="rounded-xl p-4 text-left mb-6 space-y-2"
                style={{
                  backgroundColor: "rgba(0,184,217,0.04)",
                  border: "1px solid rgba(0,184,217,0.12)",
                }}
              >
                <div className="flex items-center gap-2">
                  <HiDocumentText className="w-4 h-4 text-[#00b8d9]" />
                  <span className="text-xs font-semibold text-gray-700">
                    Résumé détecté
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["React", "TypeScript", "Node.js", "3 ans XP"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white text-[#00b8d9] border border-[#00b8d9]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full py-3.5 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: "#10b981",
                  boxShadow: "0 4px 14px rgba(16,185,129,0.3)",
                }}
              >
                Terminer
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes uploadSpin {
          to { background: conic-gradient(#00b8d9 360deg, transparent 0deg); }
        }
        @keyframes progressBar {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeInStep {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
