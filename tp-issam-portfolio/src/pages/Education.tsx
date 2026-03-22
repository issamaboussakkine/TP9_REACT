import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Formations — Issam Aboussakkine</title>
        <meta
          name="description"
          content="Formations : Licence Computer Science à la FSTG Marrakech, cours en développement web, Java, React, Laravel."
        />
      </Helmet>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Formations</h1>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.school} className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold">{edu.school}</h2>
              <p className="text-muted-foreground">
                {edu.degree} - {edu.field}
              </p>
              <p className="text-sm text-muted-foreground">
                {edu.start} - {edu.end}
              </p>
              <p className="mt-2">{edu.location}</p>
              {edu.courses && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-1 bg-secondary rounded-full text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
