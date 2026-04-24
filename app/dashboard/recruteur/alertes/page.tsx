"use client";

import { useState } from "react";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineCheckCircle,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: "candidature",
    icon: HiOutlineUserGroup,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "Nouvelle candidature sur « Ingénieur Cloud AWS Senior »",
    description: "Thomas D. (React, TypeScript, 5 ans d'exp.) a postulé. Score de match : 92%.",
    time: "Il y a 10 minutes",
    read: false,
  },
  {
    id: 2,
    type: "candidature",
    icon: HiOutlineUserGroup,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "2 nouvelles candidatures sur « Développeur Fullstack React / Node »",
    description: "Sarah C. et Lucas M. ont soumis leur profil. Consultez-les depuis votre espace offres.",
    time: "Il y a 1 heure",
    read: false,
  },
  {
    id: 3,
    type: "entretien",
    icon: HiOutlineCalendarDays,
    iconBg: "bg-[#00b8d9]/10",
    iconColor: "text-[#00b8d9]",
    title: "Rappel : Planifiez un entretien avec Alice D.",
    description: "La candidature d'Alice D. pour le poste Tech Lead Data est en attente d'entretien depuis 3 jours.",
    time: "Il y a 3 heures",
    read: false,
  },
  {
    id: 4,
    type: "offre",
    icon: HiOutlineBriefcase,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    title: "Votre offre « Product Manager B2B » arrive à expiration",
    description: "Cette annonce sera automatiquement archivée dans 5 jours. Pensez à la renouveler si le poste est toujours ouvert.",
    time: "Hier",
    read: true,
  },
  {
    id: 5,
    type: "message",
    icon: HiOutlineChatBubbleLeftRight,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    title: "Nouveau message de Youssef B.",
    description: "« Bonjour, je suis très intéressé par la mission Cloud. Serait-il possible d'échanger rapidement ? »",
    time: "Hier",
    read: true,
  },
  {
    id: 6,
    type: "system",
    icon: HiOutlineCheckCircle,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    title: "Votre offre « Tech Lead Data Engineer » a été publiée",
    description: "Elle est maintenant visible par tous les candidats de la plateforme.",
    time: "Il y a 2 jours",
    read: true,
  },
  {
    id: 7,
    type: "system",
    icon: HiOutlineCog6Tooth,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-500",
    title: "Bienvenue dans votre espace recruteur !",
    description: "Publiez votre première offre pour commencer à recevoir des candidatures qualifiées.",
    time: "Il y a 5 jours",
    read: true,
  },
];

export default function RecruteurAlertesPage() {
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
