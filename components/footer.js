import { useContext } from "react";
import { ThemeContext } from "@hooks";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer>
      <a
        href="https://twitter.com/ISharify"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="twitter" src="/icons/twitter.svg" alt="Twitter logo" />
        Twitter
      </a>
      <a
        href="https://www.github.com/ItamarShDev"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="/icons/github.svg" alt="github logo" />
        Github
      </a>
      <a
        href="https://medium.com/@itamarsharify"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="medium" src="/icons/medium.svg" alt="Medium logo" />
        Medium
      </a>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          display: flex;
          margin: 5px;
          font-size: 1rem;
          color: ${theme.text};
          justify-content: center;
          align-items: center;
          filter: grayscale(100%) opacity(0.5);
        }
        a:hover {
          color: ${theme.decorations};
          filter: none;
        }
        a img {
          height: 1rem;
          margin: auto 5px;
        }
        a img.medium {
          height: 0.9rem;
        }
        a img.twitter {
          height: 1.5rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
