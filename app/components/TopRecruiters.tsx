"use client";

import { HiBuildingOffice2, HiMapPin } from "react-icons/hi2";

const mockRecruiters = [
  { id: 1, name: "Capgemini", location: "Paris, France", jobs: 124, logo: "CG" },
  { id: 2, name: "Sopra Steria", location: "Lyon, France", jobs: 89, logo: "SS" },
  { id: 3, name: "Thales", location: "Toulouse, France", jobs: 67, logo: "TH" },
  { id: 4, name: "Orange", location: "Remote", jobs: 142, logo: "OR" },
];

export default function TopRecruiters() {
  return (
    <section className="py-12" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Les top <span style={{ color: "#00b8d9" }}>recruteurs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockRecruiters.map((recruiter) => (
            <div 
              key={recruiter.id} 
              className="bg-white rounded-2xl p-5 flex flex-col items-center text-center transition-transform hover:-translate-y-1 cursor-pointer shadow-lg"
            >
              {/* Fake Logo Placeholder */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center font-black text-2xl mb-4 text-white shadow-md"
                style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)" }}
              >
                {recruiter.logo}
              </div>
              
              <h3 className="font-bold text-gray-900 text-lg mb-1">{recruiter.name}</h3>
              
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                <HiMapPin className="w-3.5 h-3.5" />
                {recruiter.location}
              </div>
              
              <div className="mt-auto w-full pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                  <HiBuildingOffice2 className="w-4 h-4 text-gray-400" />
                  {recruiter.jobs} offres
                </span>
                <span className="text-xs font-bold transition-colors" style={{ color: "#00b8d9" }}>
                  Voir →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button 
            className="px-6 py-2.5 text-sm font-bold text-white rounded-full transition-all hover:bg-white/10 border border-white/20"
          >
            Voir toutes les entreprises
          </button>
        </div>

      </div>
    </section>
  );
}
