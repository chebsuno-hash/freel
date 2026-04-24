"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiOutlineWrench } from "react-icons/hi2";

export default function GuideFreelancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-[#00b8d9]/10 flex items-center justify-center mx-auto mb-6">
            <HiOutlineWrench className="w-8 h-8 text-[#00b8d9]" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Guide du Freelance</h1>
          <p className="text-gray-500 mb-2">Cette page est en cours de construction 🚧</p>
          <p className="text-sm text-gray-400">Un guide complet pour bien démarrer en freelance IT arrive bientôt.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
