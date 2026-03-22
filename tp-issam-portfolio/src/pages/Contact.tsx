import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xqapgvkw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      
      if (response.ok) {
        setFormStatus("✅ Message envoyé avec succès !");
        e.currentTarget.reset();
      } else {
        setFormStatus("❌ Erreur, veuillez réessayer.");
      }
    } catch {
      setFormStatus("❌ Erreur réseau, vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — {profile.name}</title>
        <meta name="description" content="Contactez-moi pour un stage ou une opportunité professionnelle." />
      </Helmet>
      
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Me Contacter</h1>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Votre nom"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="votre@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Votre message..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>
          
          {formStatus && (
            <p className={`text-center mt-4 ${formStatus.includes("✅") ? "text-green-600" : "text-red-600"}`}>
              {formStatus}
            </p>
          )}
        </form>
        
        <div className="border-t mt-10 pt-8 space-y-3 text-center">
          <p className="text-muted-foreground">📧 {profile.email}</p>
          <p className="text-muted-foreground">📞 {profile.phone}</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href={profile.socials.find(s => s.label === "GitHub")?.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub
            </a>
            <a href={profile.socials.find(s => s.label === "LinkedIn")?.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}