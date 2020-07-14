import { useState, useEffect } from "react";
import Theme from "../theme/scheme";

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

   return [Theme[theme], toggleTheme];
}
