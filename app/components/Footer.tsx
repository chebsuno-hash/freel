"use client";

import Link from "next/link";
import { HiEnvelope } from "react-icons/hi2";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Plateforme: [
    { label: "Offres Freelance", href: "/offres" },
    { label: "Offres CDI", href: "/offres" },
    { label: "Missions", href: "/offres" },
    { label: "Entreprises", href: "/a-propos" },
  ],
  Ressources: [
    { label: "Blog", href: "/blog" },
    { label: "Guide du Freelance", href: "/guide-freelance" },
    { label: "Calculateur TJM", href: "/calculateur-tjm" },
    { label: "FAQ", href: "/faq" },
  ],
  Entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Communauté", href: "/communaute" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Légal: [
    { label: "CGU", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/mentions-legales" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Cookies", href: "/mentions-legales" },
  ],
};

const socials = [
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1628", color: "#ffffff" }}>
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">Restez informé</h3>
              <p className="text-sm text-gray-400 mt-1">
                Recevez les meilleures offres tech chaque semaine.
              </p>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 sm:w-72"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <HiEnvelope className="w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-full"
                />
              </div>
              <button
                className="px-6 py-2.5 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
                style={{
                  backgroundColor: "#00b8d9",
                  boxShadow: "0 4px 14px rgba(0, 184, 217, 0.25)",
                }}
              >
                S&apos;abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#00b8d9] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Link href="/">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #00b8d9, #00a3c4)",
                  }}
                >
                  <span className="text-white font-black text-xs">FI</span>
                </div>
              </Link>
              <span className="text-sm text-gray-400">
                © 2026 FreelanceIT. Tous droits réservés.
              </span>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00b8d9] transition-all"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(0, 184, 217, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
