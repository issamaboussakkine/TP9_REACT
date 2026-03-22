export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques - Marrakech (FSTG)",
    degree: "Licence",
    field: "Computer Science",
    location: "Marrakech",
    start: "2023",
    end: "2026",
    courses: [
      "Java", "JDBC", "Java Swing", "Spring Boot", "Hibernate", "JEE",
      "React", "TypeScript", "Tailwind", "JavaScript",
      "MySQL", "Git", "Linux", "Réseaux", "Système d'exploitation",
      "Laravel", "PHP", "Développement Web", "Base de données",
      "Génie Logiciel", "Algorithmes", "Programmation Orientée Objet"
    ],
    highlights: ["Projets pratiques", "TPs en Java, React, Laravel"]
  }
];
