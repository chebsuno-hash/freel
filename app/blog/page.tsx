"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiOutlineCalendar, HiOutlineClock, HiArrowRight } from "react-icons/hi2";

const MOCK_ARTICLES = [
  {
    id: 1,
    category: "CARRIÈRE",
    title: "Top 6 des formations pour devenir développeur informatique",
    abstract: "Le marché de la tech est en plein boom. Vous voulez vous reconvertir ? Découvrez les 6 meilleures formations intensives pour apprendre à coder et décrocher votre premier poste.",
    date: "24 avril 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    color: "#00b8d9"
  },
  {
    id: 2,
    category: "ENTRETIEN TECHNIQUE",
    title: "La nouvelle question piège en entretien Tech : comment utilisez-vous l'IA ?",
    abstract: "L'IA générative bouleverse notre façon de coder. Les recruteurs veulent savoir si vous l'utilisez intelligemment. Voici comment répondre et marquer des points.",
    date: "22 avril 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
    color: "#8b5cf6"
  },
  {
    id: 3,
    category: "MARCHÉ",
    title: "Les recrutements de cadres IT repartent à la hausse en 2026",
    abstract: "Après une année de stabilisation, les embauches dans le numérique accélèrent à nouveau, portées par les besoins en cybersécurité et en architecture cloud.",
    date: "18 avril 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    color: "#10b981"
  },
  {
    id: 4,
    category: "DÉVELOPPEMENT WEB",
    title: "Le problème n'est pas PHP. C'est le code natif.",
    abstract: "Un retour sur les débats enflammés autour des langages de programmation. Pourquoi l'architecture et les bonnes pratiques comptent plus que la stack elle-même.",
    date: "15 avril 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    color: "#f59e0b"
  },
  {
    id: 5,
    category: "FREELANCE",
    title: "Comment justifier son TJM face à un client qui négocie (trop) ?",
    abstract: "La négociation fait partie du jeu, mais comment défendre sa valeur sans braquer le client ? Nos conseils pour argumenter votre Tarif Journalier Moyen.",
    date: "10 avril 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=600&q=80",
    color: "#ec4899"
  },
  {
    id: 6,
    category: "VIE DE DEV",
    title: "Le syndrome de l'imposteur : pourquoi ce malaise monte au travail",
    abstract: "Vous avez l'impression de ne pas mériter votre poste ? Vous n'êtes pas seul. 70% des devs l'ont déjà ressenti. Comment l'identifier et s'en libérer.",
    date: "8 avril 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80",
    color: "#ef4444"
  }
];

const TOP_ARTICLES = [
  "Salaire IT : les grilles de rémunération 2026",
  "Comment bien chiffrer son projet freelance ?",
  "Les 10 questions incontournables en entretien React",
  "DevOps : pourquoi tout le monde s'arrache ces profils ?",
  "Télétravail : les entreprises qui recrutent 100% remote"
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#f8fafc]">
        
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
              <span>Accueil</span>
              <span className="text-gray-300">/</span>
              <span className="text-[#0a1628]">Actualités et Conseils IT</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
              Plongez au cœur de l'actualité IT, Tech et Digital
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
              Découvrez des articles pointus, des retours d'expérience inspirants, des guides complets et des conseils d'experts. Que vous soyez passionné de technologie, indépendant en quête de clients, ou simplement curieux, cet espace est fait pour vous.
            </p>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Grid (70%) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MOCK_ARTICLES.map((article) => (
                  <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col cursor-pointer">
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span 
                          className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white rounded-md shadow-md"
                          style={{ backgroundColor: article.color }}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-xl font-bold text-[#0a1628] group-hover:text-[#00b8d9] transition-colors leading-tight mb-3">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1">
                        {article.abstract}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs font-semibold text-gray-500 pt-4 border-t border-gray-50">
                        <span className="flex items-center gap-1.5">
                          <HiOutlineCalendar className="w-4 h-4 text-gray-400" /> {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <HiOutlineClock className="w-4 h-4 text-gray-400" /> {article.readTime} lecture
                        </span>
                      </div>
                    </div>

                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0a1628] text-white font-bold shadow-md">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-gray-600 font-bold border border-gray-200 hover:border-[#00b8d9] hover:text-[#00b8d9] transition-colors">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-gray-600 font-bold border border-gray-200 hover:border-[#00b8d9] hover:text-[#00b8d9] transition-colors">3</button>
                  <span className="px-2 text-gray-400">...</span>
                  <button className="px-4 h-10 flex items-center justify-center rounded-lg bg-white text-gray-600 font-bold border border-gray-200 hover:border-[#00b8d9] hover:text-[#00b8d9] transition-colors">
                    Suivant <HiArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar (30%) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Les plus consultés */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00b8d9]/5 rounded-bl-full -z-0"></div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-5 flex items-center gap-2 relative z-10">
                  <span className="w-1.5 h-6 bg-[#00b8d9] rounded-full"></span>
                  Les plus consultés
                </h3>
                <ul className="space-y-4 relative z-10">
                  {TOP_ARTICLES.map((article, i) => (
                    <li key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-[#00b8d9]/10 text-[#00b8d9] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#00b8d9] group-hover:text-white transition-colors">
                        {i + 1}
                      </div>
                      <p className="text-sm font-semibold text-gray-700 group-hover:text-[#00b8d9] transition-colors leading-snug">
                        {article}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inscription Newsletter */}
              <div className="bg-[#0a1628] rounded-2xl p-6 shadow-xl relative overflow-hidden text-center">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00b8d9]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00b8d9]/20 rounded-full blur-2xl"></div>
                
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">
                  Inscription à la newsletter
                </h3>
                <p className="text-sm text-gray-300 mb-6 relative z-10">
                  Une dose d'inspiration dans votre boîte mail, tous les lundis matins.
                </p>
                
                <div className="relative z-10">
                  <input 
                    type="email" 
                    placeholder="votre@email.com" 
                    className="w-full px-4 py-3 text-sm text-gray-900 border-none rounded-xl outline-none focus:ring-2 focus:ring-[#00b8d9] mb-3"
                  />
                  <button className="w-full py-3 text-sm font-extrabold text-white rounded-xl transition-transform hover:-translate-y-0.5 shadow-lg" style={{ backgroundColor: "#00b8d9" }}>
                    S'inscrire
                  </button>
                </div>
              </div>

              {/* Rejoignez-nous (Forum) */}
              <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-bold text-indigo-900 mb-2">
                  Rejoignez-nous !
                </h3>
                <p className="text-sm text-indigo-700/80 mb-5">
                  Vous cherchez un conseil technique, ou vous souhaitez partager votre expertise ? Rejoignez notre espace de discussion.
                </p>
                <button className="px-6 py-2.5 text-sm font-bold text-white rounded-xl shadow-md transition-colors bg-indigo-600 hover:bg-indigo-700">
                  Accéder au forum
                </button>
              </div>

            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
