export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Plateforme d'organisation d'événements",
    period: "2025",
    tags: ["MySQL", "Modélisation SGBD", "Travail en équipe"],
    summary:
      "Projet de base de données : conception et modélisation d'une plateforme pour organiser des événements.",
  },
  {
    title: "Plateforme de salle de sport",
    period: "2026",
    tags: ["Java", "JDBC", "MySQL", "Java Swing"],
    summary:
      "Application desktop pour gérer les abonnements, les séances et les adhérents d'une salle de sport.",
    repo: "https://github.com/issamaboussakkine",
  },
  {
    title: "Blog Sécurité multi-utilisateur",
    period: "2025",
    tags: ["Laravel", "PHP", "MySQL"],
    summary:
      "Développement d'un blog avec authentification et gestion des rôles (admin, éditeur, utilisateur).",
  },
  {
    title: "Mini-site web dynamique",
    period: "2025",
    tags: ["Laravel", "PHP", "MySQL"],
    summary:
      "Création d'un site dynamique avec gestion de contenu et base de données.",
  },
  {
    title: "Projet Spring Boot (en cours)",
    period: "2026",
    tags: ["Spring Boot", "Hibernate", "React", "TypeScript"],
    summary:
      "Application full-stack avec backend Spring Boot et frontend React.",
  },
];
