"use client";

import { useState, useCallback } from "react";
import { HiCloudArrowUp, HiDocumentText, HiXMark } from "react-icons/hi2";
import { apiRequest } from "../../lib/api";

interface ParsedData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
  yearsOfExperience: number;
  title: string;
  location: string;
  linkedIn: string;
}

interface CvUploadProps {
  onParsed: (data: ParsedData) => void;
}

export default function CvUpload({ onParsed }: CvUploadProps) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(async (file: File) => {
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      setError("Seuls les fichiers PDF et Word sont acceptés.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Le fichier ne doit pas dépasser 10 Mo.");
      return;
    }

    setError(null);
    setUploading(true);
    setFileName(file.name);

    try {
      const formData = new FormData();
      formData.append("cv", file);

      const res = await apiRequest<{ parsed: ParsedData }>("/cv/upload", {
        method: "POST",
        body: formData,
      });

      if (res.success && res.data) {
        onParsed(res.data.parsed);
      } else {
        setError(res.message || "Erreur lors de l'analyse du CV.");
      }
    } catch {
      setError("Erreur réseau. Vérifiez votre connexion.");
    } finally {
      setUploading(false);
    }
  }, [onParsed]);

  return (
    <div
      className={`relative rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
        dragging ? "border-[#00b8d9] bg-[#00b8d9]/5" : "border-gray-200 bg-white hover:border-gray-300"
      }`}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => { e.preventDefault(); setDragging(false); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
    >
      {uploading ? (
        <div className="flex flex-col items-center gap-3 py-4">
          <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-[#00b8d9] animate-spin" />
          <p className="text-sm font-medium text-gray-600">Analyse de votre CV en cours...</p>
          <p className="text-xs text-gray-400">{fileName}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,184,217,0.1)" }}>
            <HiCloudArrowUp className="w-8 h-8" style={{ color: "#00b8d9" }} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Glissez-déposez votre CV ici
            </p>
            <p className="text-xs text-gray-400 mt-1">PDF ou Word • Max 10 Mo</p>
          </div>
          <label
            className="px-5 py-2 text-sm font-semibold text-white rounded-lg cursor-pointer transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "#00b8d9", boxShadow: "0 4px 14px rgba(0,184,217,0.25)" }}
          >
            Parcourir les fichiers
            <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} />
          </label>
        </div>
      )}

      {fileName && !uploading && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <HiDocumentText className="w-4 h-4" />
          <span>{fileName}</span>
          <button onClick={() => setFileName(null)} className="text-gray-400 hover:text-red-500 cursor-pointer"><HiXMark className="w-4 h-4" /></button>
        </div>
      )}

      {error && (
        <div className="mt-3 px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm border border-red-100">
          {error}
        </div>
      )}
    </div>
  );
}
