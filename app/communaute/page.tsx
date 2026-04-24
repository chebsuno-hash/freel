import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiUserGroup, HiChatBubbleLeftRight, HiGlobeAlt, HiRocketLaunch } from "react-icons/hi2";

export default function CommunautePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, rgba(0,184,217,0.15), rgba(16,185,129,0.1))" }}>
            <HiUserGroup className="w-10 h-10" style={{ color: "#00b8d9" }} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            La Communauté <span style={{ color: "#00b8d9" }}>FreelanceIT</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            Rejoignez des milliers de freelances et recruteurs IT pour échanger, partager et grandir ensemble.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: HiChatBubbleLeftRight, title: "Forum d'entraide", desc: "Posez vos questions, partagez vos expériences" },
              { icon: HiGlobeAlt, title: "Événements", desc: "Meetups, webinars et conférences tech" },
              { icon: HiRocketLaunch, title: "Mentorat", desc: "Connectez-vous avec des experts du secteur" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#00b8d9]/20 transition-all">
                  <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: "#00b8d9" }} />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 text-sm text-amber-700 inline-block">
            <strong>En construction</strong> — Le forum et les événements arrivent bientôt !
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
