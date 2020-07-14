import { useContext } from "react";
import { ThemeContext } from "@hooks";
import Link from "next/link";

const Header = (props) => {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);
  const { title } = props;
  return (
    <header>
      <div></div>
      <Link href="/">
        <a className="title">{title}</a>
      </Link>
      <i
        onClick={toggleTheme}
        className={`icon ${isDark ? "dark-icon" : "light-icon"}`}
        title="Toggle dark mode"
      ></i>
      <style jsx>{`
        header {
          height: 60px;
          width: 100vw;
          display: grid;
          grid-template-columns: 50px 1fr 50px;
          text-align: center;
          align-items: center;
          border-bottom: 1px solid #eaeaea;
          position: sticky;
          top: 0;
          z-index: 10;
          background-color: ${theme.header};
        }
        a.title {
          color: ${theme.headerText};
        }

        i.icon:after {
          font-size: 1.2em;
          font-style: normal;
        }
        .dark-icon:after {
          content: "☼";
        }
        .light-icon:after {
          content: "☾";
        }
        .dark-icon:hover {
          color: #fbd46d;
        }
        .dark-icon:hover:after {
          content: "☀";
        }
      `}</style>
    </header>
  );
};

export default Header;
