import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    return certifications
      .filter((c) => {
        const text = [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
          .join(" ")
          .toLowerCase();
        return text.includes(search.toLowerCase());
      })
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [search]);

  return (
    <>
      <Helmet>
        <title>Certifications — Issam Aboussakkine</title>
        <meta
          name="description"
          content="Certifications : Laravel, Java, JPA/Hibernate, Spring Boot, React."
        />
      </Helmet>
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Certifications</h1>
          <input
            type="text"
            placeholder="Filtrer par titre, compétence, éditeur..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Filtrer les certifications"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((cert) => (
            <CertificationCard
              key={`${cert.title}-${cert.issueDate}`}
              c={cert}
            />
          ))}
        </div>
      </section>
    </>
  );
}
