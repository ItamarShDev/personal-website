import { centered, grid, gridItem } from "theme/theme";
import { ThemeContext } from "@lib/hooks";
import { useContext } from "react";

function LanguagesList() {
  const { className, styles } = grid(3, 3, 20);
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="languages">
      <h5>Uses</h5>
      <div className={`${className} size-restrict`}>
        <img
          src="https://www.python.org/static/community_logos/python-logo-generic.svg"
          className="item"
        />
        <img src="logos/react-logo.png" className="item" />
        <img src="https://mobx.js.org/assets/mobx.png" className="item" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/414px-Nextjs-logo.svg.png"
          className="item inverted-on-dark"
        />
        <img
          src="https://raw.githubusercontent.com/cljs/logo/master/cljs.png"
          className="item"
        />
        <img src="logos/vscode.svg" className="item" />

        {styles}
        <style jsx>{gridItem}</style>
        <style jsx>
          {`
            .size-restrict {
              max-width: 300px;
              margin: 0 auto;
            }
            .inverted-on-dark {
              filter: invert(${isDark ? 1 : 0});
            }
          `}
        </style>
      </div>
    </div>
  );
}

function AboutMe(props) {
  const { className, styles } = centered(true, true);
  return (
    <div className={className}>
      <h4>Full Stack web developer</h4>
      <i>
        <a
          href="https://maps.google.com/?q=Jerusalem"
          target="_blank"
          rel="noreferrer noopener"
        >
          Jerusalem, Israel
        </a>
      </i>
      <p>Have a strong passion for anything code related, especially web.</p>
      <LanguagesList />
      {styles}
      <style jsx>{`
        h4 {
          letter-spacing: 0.1em;
          margin-block-end: 0;
        }
        p {
          padding: 0 0.5em;
        }
      `}</style>
    </div>
  );
}

export default AboutMe;
