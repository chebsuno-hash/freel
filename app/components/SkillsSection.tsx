"use client";

import Link from "next/link";
import { HiStar } from "react-icons/hi2";

const techSkills = [
  "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "TypeScript",
  "Java", "Spring Boot", "Angular", "Vue.js", "Terraform", "PostgreSQL",
  "GraphQL", "Go", "C#", "Azure", "CI/CD", "Next.js", "Elasticsearch"
];

const softSkills = [
  "Agile / Scrum", "Communication", "Résolution de problèmes", "Esprit d'équipe",
  "Autonomie", "Adaptabilité", "Gestion du temps", "Leadership",
  "Pensée critique", "Empathie"
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Bloc Tech Skills */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-extrabold text-gray-800 mb-6">
              Compétences <span style={{ color: "#00b8d9" }}>Tech</span> les plus recherchées
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {techSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:border-[#00b8d9] hover:text-[#00b8d9] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bloc Soft Skills */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-extrabold text-gray-800">
                Compétences <span style={{ color: "#00b8d9" }}>Soft</span> les plus recherchées
              </h3>
              <Link href="/offres" className="text-sm font-bold transition-colors" style={{ color: "#00b8d9" }}>
                Voir toutes →
              </Link>
            </div>
            
            <div className="flex flex-col gap-3">
              {softSkills.map((skill) => (
                <div key={skill} className="flex justify-between items-center py-2 border-b border-gray-200/60 last:border-0">
                  <span className="text-sm font-bold text-gray-700">{skill}</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <HiStar key={star} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
