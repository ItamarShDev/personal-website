import { useContext } from "react";
import { ThemeContext } from "@hooks";
import Link from "next/link";
import { ThemedIcon } from "./ThemedIcon";

const Header = (props) => {
  const { theme } = useContext(ThemeContext);
  const { title } = props;
  return (
    <nav>
      <div></div>
      <Link href="/">
        <a className="title" title="Click to go home">
          {title}
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
        a.title {
          font-size: 1.4rem;
          font-family: cascadia;
          color: ${theme.header};
        }
      `}</style>
    </nav>
  );
};

export default Header;
