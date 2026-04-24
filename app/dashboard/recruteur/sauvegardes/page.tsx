"use client";

import { HiUser, HiBookmark } from "react-icons/hi2";

export default function SauvegardesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <HiBookmark className="w-6 h-6" style={{ color: "#00b8d9" }} />
          Candidats Sauvegardés
        </h2>
        <p className="text-sm text-gray-500 mt-1">Retrouvez les profils que vous avez mis de côté.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
        <HiUser className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-gray-700">Aucun candidat sauvegardé</h3>
        <p className="text-sm text-gray-400 mt-1">Sauvegardez des profils depuis la page de recherche pour les retrouver ici.</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-700">
        <strong>En construction</strong> — La liste des candidats sauvegardés sera connectée à la base de données prochainement.
      </div>
    </div>
  );
}
