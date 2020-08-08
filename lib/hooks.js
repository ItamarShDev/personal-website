import { useState, useEffect, createContext, useContext } from "react";
import Theme from "@color_scheme";
export const ThemeContext = createContext(Theme.light);

function useSystemTheme(setTheme) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setTheme(e.matches ? "dark" : "light");
    });
}

export function useTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (process.browser) {
      useSystemTheme(setTheme);
    }
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && Theme.hasOwnProperty(savedTheme)) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return {
    theme: Theme[theme],
    toggleTheme,
    ThemeContext,
    isDark: theme == "dark",
  };
}
