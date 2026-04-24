"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiBriefcase,
  HiUserGroup,
  HiBuildingOffice2,
  HiGlobeAlt,
} from "react-icons/hi2";

const stats = [
  { icon: HiBriefcase, value: 20000, suffix: "+", label: "Offres actives" },
  { icon: HiUserGroup, value: 7000, suffix: "+", label: "Freelances inscrits" },
  { icon: HiBuildingOffice2, value: 1500, suffix: "+", label: "Entreprises partenaires" },
  { icon: HiGlobeAlt, value: 98, suffix: "%", label: "Taux de satisfaction" },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return count;
}

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  isVisible,
  delay,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div
      className="flex flex-col items-center text-center group"
      style={{
        animation: isVisible ? `countUp 0.6s ease-out ${delay}ms both` : "none",
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <Icon className="w-7 h-7" style={{ color: "#00b8d9" }} />
      </div>
      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {count.toLocaleString("fr-FR")}
        <span style={{ color: "#00b8d9" }}>{suffix}</span>
      </span>
      <span className="mt-1 text-sm text-gray-400 font-medium">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0a1628" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(0, 184, 217, 0.3), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(0, 184, 217, 0.3), transparent)",
          }}
        />
        <div
          className="absolute -top-24 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(0, 184, 217, 0.05)" }}
        />
        <div
          className="absolute -bottom-24 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(0, 184, 217, 0.05)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <StatItem key={stat.label} {...stat} isVisible={visible} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
