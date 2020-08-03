import { useContext } from "react";
import { ThemeContext } from "@hooks";
import Link from "next/link";
const ThemedIcon = (props) => {
  const { toggleTheme, isDark } = props;
  return (
    <i
      onClick={toggleTheme}
      className={`icon ${isDark ? "dark-icon" : "light-icon"}`}
      title="Toggle dark mode"
    >
      <style jsx>{`
        i.icon:after {
          font-size: 1.2em;
          font-style: normal;
        }
        .dark-icon:after {
          color: black;
          content: "☼";
        }
        .light-icon:after {
          content: "☾";
          color: white;
        }
        .light-icon:hover:after {
          color: #fbd46d;
        }
        .dark-icon:hover:after {
          content: "☀";
        }
      `}</style>
    </i>
  );
};

const Header = (props) => {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);
  const { title } = props;
  return (
    <header>
      <div></div>
      <Link href="/">
        <a className="title">{title}</a>
      </Link>
      <ThemedIcon isDark={isDark} toggleTheme={toggleTheme} />
      <style jsx>{`
        header {
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
