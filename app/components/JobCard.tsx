"use client";

import Link from "next/link";
import { HiMapPin, HiClock, HiCurrencyEuro, HiBuildingOffice2 } from "react-icons/hi2";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  type: string;
  tjm?: string;
  salary?: string;
  tags: string[];
  postedAt: string;
  logo: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0, 184, 217, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-11 h-11 rounded-xl border border-gray-100 flex items-center justify-center flex-shrink-0 text-lg font-bold"
            style={{
              background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
              color: "rgba(10, 22, 40, 0.6)",
            }}
          >
            {job.logo}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-800 text-[15px] leading-tight group-hover:text-[#00b8d9] transition-colors truncate">
              {job.title}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5 text-xs text-gray-400">
              <HiBuildingOffice2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{job.company}</span>
            </div>
          </div>
        </div>
        <span
          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold flex-shrink-0"
          style={{
            backgroundColor: job.type === "Freelance" ? "rgba(0, 184, 217, 0.1)" : "rgba(99, 102, 241, 0.1)",
            color: job.type === "Freelance" ? "#00b8d9" : "#6366f1",
          }}
        >
          {job.type}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.remote && (
          <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-600 text-[11px] font-medium border border-emerald-100">
            🏠 Remote
          </span>
        )}
        {job.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-0.5 rounded-lg bg-gray-50 text-gray-500 text-[11px] font-medium border border-gray-100">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-gray-50 text-xs text-gray-400">
        <span className="flex items-center gap-1"><HiMapPin className="w-3.5 h-3.5" />{job.location}</span>
        {(job.tjm || job.salary) && (
          <span className="flex items-center gap-1 font-medium text-gray-600"><HiCurrencyEuro className="w-3.5 h-3.5" />{job.tjm || job.salary}</span>
        )}
        <span className="flex items-center gap-1"><HiClock className="w-3.5 h-3.5" />{job.postedAt}</span>
      </div>

      <Link
        href={`/offres/${job.id}`}
        className="mt-4 w-full py-2.5 text-sm font-semibold rounded-xl border transition-all duration-200 cursor-pointer block text-center"
        style={{
          color: "#00b8d9",
          backgroundColor: "rgba(0, 184, 217, 0.05)",
          borderColor: "rgba(0, 184, 217, 0.2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#00b8d9";
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.borderColor = "#00b8d9";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0, 184, 217, 0.05)";
          e.currentTarget.style.color = "#00b8d9";
          e.currentTarget.style.borderColor = "rgba(0, 184, 217, 0.2)";
        }}
      >
        Découvrir →
      </Link>
    </div>
  );
}
