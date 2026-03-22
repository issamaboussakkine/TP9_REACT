import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function formatDate(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "border rounded-2xl p-4 hover:shadow-lg transition hover:-translate-y-1",
        isExpired && "opacity-70",
      )}
      aria-label={`Certification ${c.title}`}
    >
      {c.image && (
        <div className="flex justify-center mb-3">
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={80}
            height={80}
            loading="lazy"
            className="w-20 h-20 object-contain rounded-lg"
          />
        </div>
      )}

      <h3 className="font-semibold leading-snug text-lg">{c.title}</h3>
      <p className="text-sm text-muted-foreground">
        {c.issuer} • {formatDate(c.issueDate)}
        {c.expiryDate ? ` → ${formatDate(c.expiryDate)}` : ""}
        {c.credentialId ? ` • ID ${c.credentialId}` : ""}
      </p>

      {c.skills?.length ? (
        <div className="mt-2 flex flex-wrap gap-1">
          {c.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-secondary px-2 py-0.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-3 flex items-center gap-3 text-sm">
        {c.credentialUrl && (
          <a
            className="text-primary hover:underline"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Voir le certificat →
          </a>
        )}
        {isExpired && <span className="text-amber-500">Expirée</span>}
        {c.status === "revoked" && (
          <span className="text-red-500">Révoquée</span>
        )}
      </div>
    </article>
  );
}
