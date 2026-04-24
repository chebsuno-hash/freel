import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./lib/Providers";

export const metadata: Metadata = {
  title: "FreelanceIT – La plateforme freelance IT en France",
  description:
    "Trouvez les meilleures missions freelance IT, CDI et CDD tech en France. +20 000 offres, +7 000 freelances. Rejoignez la communauté tech #1.",
  keywords:
    "freelance IT, missions freelance, développeur freelance, consultant IT, offres tech, CDI tech, France",
  openGraph: {
    title: "FreelanceIT – Connecting Tech-Talent",
    description:
      "La plateforme de référence pour les freelances et consultants IT en France.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

