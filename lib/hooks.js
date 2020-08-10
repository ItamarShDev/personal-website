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
  const sysTheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (sysTheme.addListener) {
    sysTheme.addListener((e) => {
      setTheme(e.matches ? "dark" : "light");
    });
  } else if (sysTheme.addEventListener) {
    sysTheme.addEventListener("change", (e) => {
      setTheme(e.matches ? "dark" : "light");
    });
  }
}

export function useTheme(currentTheme = "light") {
  const [theme, setTheme] = useState(currentTheme);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && Theme.hasOwnProperty(savedTheme)) {
      setTheme(savedTheme);
    } else {
      if (process.browser) {
        useSystemTheme(setTheme);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const setSystemTheme = () => {
    localStorage.removeItem("theme");
    setTheme(null);
    if (process.browser) {
      useSystemTheme(setTheme);
    }
  };

  return {
    theme: Theme[theme],
    ThemeContext,
    toggleTheme,
    setSystemTheme,
    isDark: theme == "dark",
    isSystemTheme: theme === null,
  };
}
