


"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load the saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const darkMode = savedTheme === "dark";

    setIsDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  // Switch between dark and light mode
  function toggleTheme() {
    const newTheme = !isDark;

    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  // Navigation links
  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Certificates", "#certificates"],
  ];

  // Close menu after clicking a link
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4">

        {/* Top navigation */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3 text-xl font-bold text-black dark:text-white"
          >
           
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            {navLinks.map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="px-4 py-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              >
                {label}
              </a>
            ))}

            <a
              href="#contacts"
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition duration-300"
            >
              Contact ↗
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="ml-2 w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-xl text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-3">

            {/* Theme button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-lg"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700"
            >
              {menuOpen ? (
                <span className="text-2xl leading-none">×</span>
              ) : (
                <>
                  <span className="w-5 h-0.5 bg-black dark:bg-white rounded-full"></span>
                  <span className="w-5 h-0.5 bg-black dark:bg-white rounded-full"></span>
                  <span className="w-5 h-0.5 bg-black dark:bg-white rounded-full"></span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-5 pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-2">

            {navLinks.map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
              >
                {label}
              </a>
            ))}

            <a
              href="#contacts"
              onClick={closeMenu}
              className="mt-2 px-5 py-3 rounded-full text-center bg-black dark:bg-white text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 transition duration-300"
            >
              Contact ↗
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
