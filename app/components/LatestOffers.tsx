"use client";

import { useState } from "react";
import Link from "next/link";
import JobCard from "./JobCard";
import { freelanceJobs, cdiJobs } from "./mockData";

const tabs = [
  { key: "freelance", label: "Freelance", count: freelanceJobs.length },
  { key: "cdi", label: "CDI", count: cdiJobs.length },
];

export default function LatestOffers() {
  const [active, setActive] = useState("freelance");
  const jobs = active === "freelance" ? freelanceJobs : cdiJobs;

  return (
    <section id="offres" className="py-16 sm:py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
            Dernières <span style={{ color: "#00b8d9" }}>offres</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Découvrez les opportunités les plus récentes dans la tech française.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1.5 border border-gray-100 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className="px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer"
                style={
                  active === tab.key
                    ? {
                        backgroundColor: "#00b8d9",
                        color: "#ffffff",
                        boxShadow: "0 4px 14px rgba(0, 184, 217, 0.25)",
                      }
                    : {
                        color: "#64748b",
                      }
                }
              >
                {tab.label}
                <span
                  className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold"
                  style={
                    active === tab.key
                      ? { backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }
                      : { backgroundColor: "#f1f5f9", color: "#94a3b8" }
                  }
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/offres"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: "#00b8d9",
              border: "2px solid rgba(0, 184, 217, 0.2)",
            }}
          >
            Voir toutes les offres →
          </Link>
        </div>
      </div>
    </section>
  );
}
