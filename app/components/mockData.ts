import { Job } from "./JobCard";

export const freelanceJobs: Job[] = [
  {
    id: 1, title: "Développeur React Senior", company: "Capgemini", location: "Paris", remote: true,
    type: "Freelance", tjm: "550-650€/j", tags: ["React", "TypeScript", "Node.js"], postedAt: "Il y a 2h", logo: "C",
  },
  {
    id: 2, title: "DevOps Engineer AWS", company: "Sopra Steria", location: "Lyon", remote: true,
    type: "Freelance", tjm: "600-700€/j", tags: ["AWS", "Terraform", "Docker"], postedAt: "Il y a 4h", logo: "S",
  },
  {
    id: 3, title: "Data Engineer Python", company: "Dataiku", location: "Paris", remote: false,
    type: "Freelance", tjm: "500-600€/j", tags: ["Python", "Spark", "Airflow"], postedAt: "Il y a 6h", logo: "D",
  },
  {
    id: 4, title: "Architecte Cloud Azure", company: "Atos", location: "Toulouse", remote: true,
    type: "Freelance", tjm: "700-800€/j", tags: ["Azure", "Kubernetes", "CI/CD"], postedAt: "Il y a 1j", logo: "A",
  },
  {
    id: 5, title: "Consultant Cybersécurité", company: "Thales", location: "Paris", remote: false,
    type: "Freelance", tjm: "650-750€/j", tags: ["SIEM", "SOC", "ISO 27001"], postedAt: "Il y a 1j", logo: "T",
  },
  {
    id: 6, title: "Développeur Full-Stack Java", company: "Accenture", location: "Nantes", remote: true,
    type: "Freelance", tjm: "500-600€/j", tags: ["Java", "Spring", "Angular"], postedAt: "Il y a 2j", logo: "A",
  },
];

export const cdiJobs: Job[] = [
  {
    id: 7, title: "Lead Developer React", company: "BlaBlaCar", location: "Paris", remote: true,
    type: "CDI", salary: "65-80K€", tags: ["React", "Node.js", "GraphQL"], postedAt: "Il y a 3h", logo: "B",
  },
  {
    id: 8, title: "SRE / Platform Engineer", company: "OVHcloud", location: "Roubaix", remote: true,
    type: "CDI", salary: "55-70K€", tags: ["Kubernetes", "Go", "Prometheus"], postedAt: "Il y a 5h", logo: "O",
  },
  {
    id: 9, title: "Product Manager Tech", company: "Doctolib", location: "Paris", remote: false,
    type: "CDI", salary: "60-75K€", tags: ["Agile", "B2B SaaS", "Data"], postedAt: "Il y a 8h", logo: "D",
  },
  {
    id: 10, title: "ML Engineer", company: "Criteo", location: "Paris", remote: true,
    type: "CDI", salary: "70-90K€", tags: ["Python", "PyTorch", "MLOps"], postedAt: "Il y a 1j", logo: "C",
  },
  {
    id: 11, title: "Ingénieur QA Automation", company: "Deezer", location: "Paris", remote: true,
    type: "CDI", salary: "45-55K€", tags: ["Selenium", "Cypress", "CI/CD"], postedAt: "Il y a 1j", logo: "D",
  },
  {
    id: 12, title: "DBA PostgreSQL Senior", company: "Scaleway", location: "Paris", remote: true,
    type: "CDI", salary: "60-75K€", tags: ["PostgreSQL", "Linux", "Ansible"], postedAt: "Il y a 2j", logo: "S",
  },
];
