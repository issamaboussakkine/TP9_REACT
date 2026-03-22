import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: profile.email,
  jobTitle: profile.role,
  alumniOf: education.map(e => ({
    "@type": "CollegeOrUniversity",
    name: e.school,
    location: e.location
  })),
  knowsAbout: profile.skills,
  hasCredential: certifications.map(c => ({
    "@type": "EducationalOccupationalCredential",
    name: c.title,
    recognizedBy: { "@type": "Organization", name: c.issuer },
    validFrom: c.issueDate,
    url: c.credentialUrl
  }))
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content="Portfolio étudiant : Développement Web, Java, React, Spring Boot" />
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <section className="grid gap-6 md:grid-cols-2 items-center min-h-[80vh]">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <p className="mt-2 text-xl text-muted-foreground">{profile.role}</p>
          <p className="mt-4 text-muted-foreground">{profile.about}</p>

          <div className="mt-6 flex gap-3">
            <Link to="/projects" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition">
              Voir les projets
            </Link>
            <Link to="/contact" className="px-4 py-2 border rounded-md hover:bg-secondary transition">
              Contact
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1.5 bg-emerald-500 text-white rounded-full font-semibold shadow-md">
              📍 À la recherche d'un stage PFE
            </span>
            <span className="px-3 py-1.5 bg-amber-500 text-white rounded-full font-semibold shadow-md">
              📅 Avril - Juin 2026
            </span>
          </div>
        </div>

  <div className="max-w-xs mx-auto rounded-2xl border overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
  <img 
    src="/profile.jpg" 
    alt={profile.name}
    className="w-full h-full object-contain"
  />
</div>
      </section>
    </>
  );
}