import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Expérience — Issam Aboussakkine</title>
        <meta
          name="description"
          content="Expérience professionnelle : Téléconseiller francophone/anglophone au Callcenter X Marrakech."
        />
      </Helmet>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Expérience</h1>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="border-l-4 border-primary pl-4">
              <h2 className="text-xl font-semibold">{exp.title}</h2>
              <p className="text-muted-foreground">
                {exp.company} | {exp.location}
              </p>
              <p className="text-sm text-muted-foreground">
                {exp.start} - {exp.end}
              </p>
              <ul className="mt-2 list-disc list-inside text-muted-foreground">
                {exp.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
