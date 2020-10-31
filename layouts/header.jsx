import { useContext } from "react";
import { ThemeContext } from "lib/hooks";
import Link from "next/link";
import { ThemedIcon } from "../components/themed-icon";

const Header = (props) => {
  const { theme } = useContext(ThemeContext);
  const { title } = props;
  return (
    <nav>
      <div></div>
      <Link href="/">
        <a title="Click to go home">
          <span className="name">Itamar Sharify</span>
          {title && (
            <span className="divider"> &nbsp;&nbsp;›&nbsp;&nbsp; </span>
          )}
          <span className="title">{title}</span>
        </a>
      </Link>
      <ThemedIcon />
      <style jsx>{`
        nav {
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
          background-color: ${theme.bg};
          transition: all 0.2s linear;
        }
        .divider {
          color: ${theme.header};
        }
        .name {
          font-size: 1.6rem;
          font-weight: bold;
          color: ${theme.header};
        }
        .title {
          font-size: 1.4rem;
          font-family: cascadia;
          color: ${theme.headerText};
          font-style: italic;
        }
      `}</style>
    </nav>
  );
};

export default Header;
