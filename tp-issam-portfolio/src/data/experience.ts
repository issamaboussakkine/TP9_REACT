export type Experience = {
  title: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    title: "Téléconseiller Francophone / Anglophone",
    company: "Concentrix Marrakech",
    location: "Marrakech",
    start: "Juin 2024",
    end: "Octobre 2024",
    description: [
      "Gestion des appels entrants et sortants en français et anglais",
      "Assistance client et résolution de problèmes",
      "Traitement des demandes et suivi des dossiers",
    ],
  },
];
