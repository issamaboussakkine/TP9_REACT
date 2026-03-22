import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur bg-background/80">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-xl">
            Issam Portfolio
          </NavLink>
          <div className="flex items-center gap-4">
            <NavLink to="/projects" className="hover:text-primary transition">
              Projets
            </NavLink>
            <NavLink to="/experience" className="hover:text-primary transition">
              Parcours
            </NavLink>
            <NavLink to="/education" className="hover:text-primary transition">
              Formations
            </NavLink>
            <NavLink
              to="/certifications"
              className="hover:text-primary transition"
            >
              Certifications
            </NavLink>
            <NavLink to="/contact" className="hover:text-primary transition">
              Contact
            </NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Issam Aboussakkine
      </footer>
    </div>
  );
}