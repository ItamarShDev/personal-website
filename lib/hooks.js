import { useState, useEffect, createContext, useContext } from "react";
import Theme from "@color_scheme";
export const ThemeContext = createContext(Theme.light);

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
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
