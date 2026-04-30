"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HiOutlineHeart,
  HiHeart,
  HiMapPin,
  HiCurrencyEuro,
  HiOutlineBriefcase,
  HiTrash,
} from "react-icons/hi2";

interface SavedOffer {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tjm: string;
  logo: string;
  tags: string[];
}

export default function FavorisPage() {
  const [offers, setOffers] = useState<SavedOffer[]>([]);

  useEffect(() => {
    try {
      const ids: string[] = JSON.parse(
        localStorage.getItem("freelanceit_savedOffers") || "[]"
      );
      const data: Record<string, SavedOffer> = JSON.parse(
        localStorage.getItem("freelanceit_savedOffersData") || "{}"
      );
      const loaded = ids
        .map((id) => data[id])
        .filter(Boolean) as SavedOffer[];
      setOffers(loaded);
    } catch {
      // ignore
    }
  }, []);

  const handleRemove = (offerId: string) => {
    try {
      // Remove from IDs
      const ids: string[] = JSON.parse(
        localStorage.getItem("freelanceit_savedOffers") || "[]"
      );
      const updatedIds = ids.filter((id) => id !== offerId);
      localStorage.setItem(
        "freelanceit_savedOffers",
        JSON.stringify(updatedIds)
      );

      // Remove from data
      const data: Record<string, SavedOffer> = JSON.parse(
        localStorage.getItem("freelanceit_savedOffersData") || "{}"
      );
      delete data[offerId];
      localStorage.setItem(
        "freelanceit_savedOffersData",
        JSON.stringify(data)
      );

      // Update state
      setOffers((prev) => prev.filter((o) => o.id !== offerId));
    } catch {
      // ignore
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <HiHeart className="w-6 h-6" style={{ color: "#00b8d9" }} />
          Mes Favoris
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Retrouvez ici toutes les offres que vous avez sauvegardées.
        </p>
      </div>

      {/* Saved offers list */}
      {offers.length > 0 ? (
        <div className="space-y-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
            >
              {/* Logo */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black text-white flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #0a1628, #111d33)",
                }}
              >
                {offer.logo}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link
                  href={`/offres/${offer.id}`}
                  className="text-sm font-bold text-gray-800 hover:text-[#00b8d9] transition-colors truncate block"
                >
                  {offer.title}
                </Link>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <HiOutlineBriefcase className="w-3.5 h-3.5" />
                    {offer.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiMapPin className="w-3.5 h-3.5" />
                    {offer.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiCurrencyEuro className="w-3.5 h-3.5" />
                    {offer.tjm}
                  </span>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {offer.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-50 text-gray-500 border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                  {offer.tags.length > 3 && (
                    <span className="text-[10px] text-gray-400 font-medium self-center">
                      +{offer.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Badge + Remove */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(0,184,217,0.1)",
                    color: "#00b8d9",
                  }}
                >
                  {offer.type}
                </span>
                <button
                  onClick={() => handleRemove(offer.id)}
                  className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                  title="Retirer des favoris"
                >
                  <HiTrash className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full bg-[#00b8d9]/10 flex items-center justify-center mx-auto mb-6">
            <HiOutlineHeart className="w-8 h-8 text-[#00b8d9]" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Aucune offre sauvegardée
          </h3>
          <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
            Parcourez les offres et cliquez sur le bouton &quot;Sauvegarder&quot;
            pour les retrouver ici.
          </p>
          <Link
            href="/offres"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "#00b8d9",
              boxShadow: "0 6px 16px rgba(0,184,217,0.3)",
            }}
          >
            Voir les offres
          </Link>
        </div>
      )}
    </div>
  );
}
