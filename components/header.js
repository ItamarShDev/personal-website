import { useContext } from "react";
import { ThemeContext } from "@hooks";
import Link from "next/link";
function getIconClassAndAction(isDark) {
  if (isDark) {
    return "dark-icon";
  } else {
    return "light-icon";
  }
}

const ThemedIcon = (props) => {
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
          color: ${theme.headerText};
          background-size: 20px;
          background-position: 10px center;
          background-repeat: no-repeat;
        }
        .dark-icon {
          background-image: url(/icons/sun.svg);
        }
        .dark-icon:hover {
          background-image: url(/icons/sun-filled.svg);
        }
        .light-icon {
          fill: ${theme.headerText};
          background-image: url(/icons/moon.svg);
        }
        .light-icon:hover {
          fill: ${theme.headerText};
          background-image: url(/icons/moon-filled.svg);
        }
      `}</style>
    </a>
  );
};

const Header = (props) => {
  const { theme } = useContext(ThemeContext);
  const { title } = props;
  return (
    <header>
      <div></div>
      <Link href="/">
        <a className="title" title="Click to go home">
          {title}
        </a>
      </Link>
      <ThemedIcon />
      <style jsx>{`
        header {
          height: 60px;
          width: 100%;
          display: grid;
          grid-template-columns: 50px 1fr 50px;
          text-align: center;
          align-items: center;
          border-bottom: 1px solid ${theme.decorations};
          position: sticky;
          top: 0;
          z-index: 10;
          background-color: ${theme.header};
        }
        a.title {
          font-size: 1.4rem;
          font-family: cascadia;
          color: ${theme.headerText};
        }
      `}</style>
    </header>
  );
};

export default Header;
