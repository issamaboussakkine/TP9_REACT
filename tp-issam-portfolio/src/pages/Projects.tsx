import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projets — Issam Aboussakkine</title>
        <meta
          name="description"
          content="Découvrez mes projets : Plateforme d'événements, Salle de sport, Blog Laravel, Spring Boot, React."
        />
      </Helmet>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Mes Projets</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">
                {project.period}
              </p>
              <p className="mb-4">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Voir sur GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
