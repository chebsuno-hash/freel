"use client";

import { useState } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineEye,
  HiOutlineDocumentText,
  HiOutlineCog6Tooth,
  HiOutlineCheckCircle,
  HiOutlineStar,
} from "react-icons/hi2";

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: "offer",
    icon: HiOutlineBriefcase,
    iconBg: "bg-[#00b8d9]/10",
    iconColor: "text-[#00b8d9]",
    title: "Nouvelle offre : Développeur React Senior — Qonto",
    description: "Cette mission Freelance à Paris correspond à 95% de votre profil. TJM : 650€/j.",
    time: "Il y a 5 minutes",
    read: false,
  },
  {
    id: 2,
    type: "view",
    icon: HiOutlineEye,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    title: "L'entreprise Datadog a consulté votre profil",
    description: "Un recruteur de Datadog a passé 2 minutes sur votre CV et vos compétences.",
    time: "Il y a 2 heures",
    read: false,
  },
  {
    id: 3,
    type: "offer",
    icon: HiOutlineBriefcase,
    iconBg: "bg-[#00b8d9]/10",
    iconColor: "text-[#00b8d9]",
    title: "3 nouvelles missions en React / TypeScript cette semaine",
    description: "Consultez les dernières opportunités qui matchent vos compétences clés.",
    time: "Il y a 6 heures",
    read: false,
  },
  {
    id: 4,
    type: "cv",
    icon: HiOutlineDocumentText,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    title: "Rappel : Complétez votre section « Expériences »",
    description: "Les profils avec au moins 2 expériences détaillées reçoivent 3x plus de contacts.",
    time: "Hier",
    read: true,
  },
  {
    id: 5,
    type: "candidature",
    icon: HiOutlineCheckCircle,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "Votre candidature chez BlaBlaCar est passée en « En revue »",
    description: "Le recruteur a avancé votre dossier pour le poste de Lead Dev Node.js.",
    time: "Hier",
    read: true,
  },
  {
    id: 6,
    type: "system",
    icon: HiOutlineStar,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    title: "Bienvenue sur FreelanceIT !",
    description: "Commencez par compléter votre profil pour recevoir des offres personnalisées.",
    time: "Il y a 3 jours",
    read: true,
  },
  {
    id: 7,
    type: "system",
    icon: HiOutlineCog6Tooth,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-500",
    title: "Vos préférences de notifications ont été mises à jour",
    description: "Vous recevrez désormais les alertes par email et dans l'application.",
    time: "Il y a 5 jours",
    read: true,
  },
];

export default function CandidatAlertesPage() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Centre de Notifications</h1>
          <p className="text-sm text-gray-500 mt-1">
            {unreadCount > 0
              ? `Vous avez ${unreadCount} notification${unreadCount > 1 ? "s" : ""} non lue${unreadCount > 1 ? "s" : ""}`
              : "Toutes vos notifications sont lues ✓"}
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="px-4 py-2 text-xs font-bold text-[#00b8d9] bg-[#00b8d9]/10 hover:bg-[#00b8d9] hover:text-white rounded-lg transition-colors"
          >
            Tout marquer comme lu
          </button>
        )}
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {notifications.map((notif) => {
          const Icon = notif.icon;
          return (
            <div
              key={notif.id}
              onClick={() => toggleRead(notif.id)}
              className={`flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer group ${
                notif.read
                  ? "bg-white border-gray-100 hover:shadow-sm"
                  : "bg-blue-50/60 border-blue-100 hover:bg-blue-50 shadow-sm"
              }`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${notif.iconBg}`}>
                <Icon className={`w-5 h-5 ${notif.iconColor}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className={`text-sm leading-tight ${notif.read ? "font-medium text-gray-700" : "font-bold text-gray-900"}`}>
                    {notif.title}
                  </h3>
                  {!notif.read && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00b8d9] flex-shrink-0 mt-1"></span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{notif.description}</p>
                <p className="text-[11px] text-gray-400 mt-2 font-medium">{notif.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
