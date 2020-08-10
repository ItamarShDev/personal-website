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
    <i
      onClick={toggleTheme}
      className={`icon ${iconClass}`}
      title="Toggle dark mode"
    >
      <style jsx>{`
        i.icon:after {
          font-size: 1.2em;
          font-style: normal;
          color: ${theme.headerText};
        }
        .dark-icon:after {
          content: "☼";
        }
        .dark-icon:hover:after {
          content: "☀";
        }
        .light-icon:after {
          content: "☾";
        }
        .light-icon:hover:after {
          color: #fbd46d;
        }
      `}</style>
    </i>
  );
};

const Header = (props) => {
  const { theme } = useContext(ThemeContext);
  const { title } = props;
  return (
    <header>
      <div></div>
      <Link href="/">
        <a className="title">{title}</a>
      </Link>
      <ThemedIcon />
      <style jsx>{`
        header {
          position: sticky;
          height: 60px;
          width: 100vw;
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
