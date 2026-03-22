export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Master Full-Stack Web Development with Laravel & PHP",
    issuer: "Coursera",
    issueDate: "2026-02",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/1QZWU5HCXWH2",
    image: "/certs/Laravel-cert.png",
    imageAlt: "Badge Laravel",
    skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "API REST",
      "Data Validation",
      "Eloquent ORM",
    ],
    tags: ["Backend", "PHP", "Full Stack"],
    status: "active",
  },
  {
    title: "Java Programming: Solving Problems with Software",
    issuer: "Coursera / Duke University",
    issueDate: "2026-01",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/MH9CLU6UXECY",
    image: "/certs/java-cert.png",
    imageAlt: "Badge Java",
    skills: ["Java", "Algorithmes", "Debugging", "Data Processing"],
    tags: ["Java", "Programmation"],
    status: "active",
  },
  {
    title: "JPA / Hibernate (Java Persistence API)",
    issuer: "MLIAEdu",
    issueDate: "2026",
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/28-479a52d9-f230-4afd-aecb-badbeb4d80f7-469747",
    image: "/certs/jpa-hibernate.png",
    imageAlt: "Badge JPA Hibernate",
    skills: ["JPA", "Hibernate", "ORM", "Java EE", "Base de données"],
    tags: ["Java", "ORM", "Backend"],
    status: "active",
  },
  {
    title: "Spring Boot (En cours)",
    issuer: "MLIAEdu",
    issueDate: "2026",
    image: "/certs/spring-boot.png",
    imageAlt: "Badge Spring Boot",
    skills: ["Spring Boot", "REST API", "Spring MVC", "Spring Data"],
    tags: ["Java", "Spring", "Backend"],
    status: "active",
  },
  {
    title: "React - Frontend Development (En cours)",
    issuer: "MLIAEdu",
    issueDate: "2026",
    image: "/certs/react-cert.png",
    imageAlt: "Badge React",
    skills: ["React", "TypeScript", "Hooks", "Tailwind"],
    tags: ["Frontend", "React"],
    status: "active",
  },
];
