"use client";

import { HiOutlineHeart } from "react-icons/hi2";

export default function FavorisPage() {
  return (
    <div className="max-w-3xl mx-auto text-center py-20">
      <div className="w-16 h-16 rounded-full bg-[#00b8d9]/10 flex items-center justify-center mx-auto mb-6">
        <HiOutlineHeart className="w-8 h-8 text-[#00b8d9]" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Mes Favoris</h1>
      <p className="text-gray-500 mb-2">Cette page est en cours de construction 🚧</p>
      <p className="text-sm text-gray-400">Retrouvez ici toutes les offres que vous avez sauvegardées.</p>
    </div>
  );
}
