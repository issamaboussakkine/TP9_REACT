import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme-mode");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme-mode", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme-mode", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative inline-flex h-9 w-16 items-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 p-1 transition-colors hover:opacity-90"
      aria-label="Changer le thème"
    >
      <span
        className={`inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-transform ${
          darkMode ? "translate-x-7" : "translate-x-0"
        }`}
      />
      <span className="absolute left-1.5 text-xs">☀️</span>
      <span className="absolute right-1.5 text-xs">🌙</span>
    </button>
  );
}