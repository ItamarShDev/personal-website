import { useContext } from "react";
import { ThemeContext } from "@hooks";
export function getIconClassAndAction(isDark) {
  if (isDark) {
    return "dark-icon";
  } else {
    return "light-icon";
  }
}
export const ThemedIcon = (props) => {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);
  const iconClass = getIconClassAndAction(isDark);
  return (
    <a
      onClick={toggleTheme}
      className={`icon ${iconClass}`}
      title="Toggle dark mode"
    >
      <style jsx>{`
        a.icon {
          height: 60px;
          width: 60px;
          font-size: 1.2em;
          font-style: normal;
          color: ${theme.decorations};
          background-size: 20px;
          background-position: 10px center;
          background-repeat: no-repeat;
        }
        .dark-icon {
          fill: ${theme.header};
          background-image: url(/icons/sun.svg);
        }
        .dark-icon:hover {
          background-image: url(/icons/sun-filled.svg);
        }
        .light-icon {
          background-image: url(/icons/moon.svg);
        }
        .light-icon:hover {
          fill: ${theme.header};
          background-image: url(/icons/moon-filled.svg);
        }
      `}</style>
    </a>
  );
};
