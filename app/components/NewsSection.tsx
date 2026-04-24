"use client";

import Link from "next/link";
import { HiClock, HiArrowRight, HiChatBubbleLeftRight, HiHeart } from "react-icons/hi2";

const NEWS = [
  {
    id: 1,
    type: "article",
    category: "Tendances",
    title: "IA Générative : comment les freelances peuvent en tirer parti",
    excerpt: "L'IA générative transforme le marché IT. Voici comment vous positionner...",
    date: "22 avril 2026",
    readTime: "5 min",
    color: "#00b8d9",
  },
  {
    id: 2,
    type: "article",
    category: "Guide",
    title: "Négocier son TJM : les 5 erreurs à éviter absolument",
    excerpt: "De nombreux freelances sous-évaluent leur tarif. Découvrez les pièges...",
    date: "20 avril 2026",
    readTime: "7 min",
    color: "#10b981",
  },
  {
    id: 3,
    type: "forum",
    category: "Discussion",
    title: "Portage salarial vs micro-entreprise en 2026",
    excerpt: "Le débat fait rage dans la communauté. 42 réponses déjà...",
    date: "19 avril 2026",
    replies: 42,
    likes: 18,
    color: "#8b5cf6",
  },
  {
    id: 4,
    type: "article",
    category: "Tech",
    title: "Next.js 16 : les nouveautés qui changent la donne",
    excerpt: "Le framework React le plus populaire continue d'innover avec...",
    date: "17 avril 2026",
    readTime: "6 min",
    color: "#f59e0b",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
            Dernières <span style={{ color: "#00b8d9" }}>news</span> & Communauté
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Articles, guides et discussions pour rester à la pointe du marché IT freelance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEWS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#00b8d9]/20 transition-all duration-300 group flex flex-col"
            >
              {/* Color top bar */}
              <div className="h-1" style={{ backgroundColor: item.color }} />

              <div className="p-5 flex-1 flex flex-col">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    {item.category}
                  </span>
                  {item.type === "forum" && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-500">
                      Forum
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-[#00b8d9] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                  {item.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  {item.type === "article" ? (
                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <HiClock className="w-3 h-3" />
                      {item.readTime} • {item.date}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 text-[11px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <HiChatBubbleLeftRight className="w-3 h-3" />
                        {item.replies}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiHeart className="w-3 h-3" />
                        {item.likes}
                      </span>
                    </div>
                  )}
                  <Link
                    href={item.type === "article" ? "/blog" : "/communaute"}
                    className="text-[11px] font-semibold flex items-center gap-0.5 transition-colors"
                    style={{ color: "#00b8d9" }}
                  >
                    Lire <HiArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: "#00b8d9",
              border: "2px solid rgba(0, 184, 217, 0.2)",
            }}
          >
            Tous les articles →
          </Link>
          <Link
            href="/communaute"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-white"
            style={{
              backgroundColor: "#0a1628",
              boxShadow: "0 4px 14px rgba(10,22,40,0.2)",
            }}
          >
            Rejoindre la communauté →
          </Link>
        </div>
      </div>
    </section>
  );
}
