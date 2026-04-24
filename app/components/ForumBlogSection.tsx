"use client";

import Link from "next/link";
import { HiChatBubbleLeftRight, HiArrowRight } from "react-icons/hi2";

const MOCK_FORUM_POSTS = [
  { id: 1, title: "TJM Développeur Fullstack React/Node en 2026 ?", category: "TJM & Tarifs", replies: 15, time: "Il y a 2h" },
  { id: 2, title: "Avis sur le portage salarial avec XYZ ?", category: "Statuts", replies: 8, time: "Il y a 4h" },
  { id: 3, title: "Comment justifier une hausse de tarif à un client historique ?", category: "Négociation", replies: 32, time: "Il y a 1j" },
  { id: 4, title: "Meilleurs outils pour gérer sa compta en indép ?", category: "Outils", replies: 12, time: "Il y a 2j" },
];

const MOCK_BLOG_POSTS = [
  { id: 1, title: "Top 5 des langages les plus rémunérateurs", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80", tag: "Tendances" },
  { id: 2, title: "L'impact de l'IA sur le code au quotidien", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80", tag: "Tech" },
  { id: 3, title: "Réussir son premier entretien client", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80", tag: "Conseils" },
  { id: 4, title: "Nomadisme numérique : guide complet", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80", tag: "Lifestyle" },
];

export default function ForumBlogSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Colonne Gauche : Forum */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Derniers posts du <span style={{ color: "#00b8d9" }}>forum</span>
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                La communauté FreelanceIT s'entraide au quotidien.
              </p>
            </div>

            <div className="flex-1 space-y-4">
              {MOCK_FORUM_POSTS.map((post) => (
                <Link key={post.id} href="/communaute" className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0,184,217,0.15)" }}>
                      <HiChatBubbleLeftRight className="w-4 h-4" style={{ color: "#00b8d9" }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors leading-tight mb-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[11px] font-medium">
                        <span className="px-2 py-0.5 rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#cbd5e1" }}>
                          {post.category}
                        </span>
                        <span className="text-gray-500">{post.replies} réponses</span>
                        <span className="text-gray-500">• {post.time}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/communaute" className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: "#00b8d9" }}>
              Rejoindre les discussions <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Colonne Droite : Blog */}
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Le <span style={{ color: "#00b8d9" }}>Blog</span>
                </h2>
                <p className="text-gray-400 mt-2 text-sm">
                  Dernières actualités et ressources pour les freelances.
                </p>
              </div>
              <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: "#00b8d9" }}>
                Voir tous les articles <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MOCK_BLOG_POSTS.map((article) => (
                <div key={article.id} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] flex flex-col justify-end p-6">
                  {/* Image de fond */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                  {/* Overlay dégradé sombre pour lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
                  
                  {/* Contenu */}
                  <div className="relative z-10 mt-auto">
                    <span className="inline-block px-2.5 py-1 mb-3 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#00b8d9] text-[#0a1628]">
                      {article.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight mb-4 group-hover:text-[#00b8d9] transition-colors">
                      {article.title}
                    </h3>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white transition-colors">
                      Lire l'article <HiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/blog" className="mt-6 sm:hidden inline-flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: "#00b8d9" }}>
              Voir tous les articles <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
