"use client";
import { createContext, useContext, useEffect, useState } from "react";
import themes from "@/app/assets/themes.json";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("__theme");
    const isValid = themes.some((t) => t.name === saved);
    setTheme(isValid ? saved : themes[0].name);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themes.find((t) => t.name === theme);
    if (!currentTheme) return;

    localStorage.setItem("__theme", theme);

    Object.entries(currentTheme.theme).forEach(([key, val]) => {
      root.style.setProperty(`--${key}`, val);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        list: themes.map((t) => t.name),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within ThemeProvider");
  return ctx;
};