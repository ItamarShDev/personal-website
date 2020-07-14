import React from "react";
import { footer } from "theme/theme";
import PropTypes from "prop-types";
import { useTheme } from "@hooks";
import Header from "@components/header";
function App({ Component, pageProps }) {
  const { theme, toggleTheme, ThemeContext, isDark } = useTheme();
  const title = pageProps.headerTitle || "Itamar Sharify";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      <div className="container">
        <Header title={title} />
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          <a
            href="https://twitter.com/ISharify"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="twitter"
              src="/icons/twitter.svg"
              alt="Twitter logo"
            />
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
        </footer>
        <style jsx>{footer}</style>
        <style jsx global>{`
          html,
          body {
            background-color: ${theme.bg};
            color: ${theme.text};
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
            border-color: ${theme.decorations};
          }
          .card:hover,
          .card:active {
            color: ${theme.decorations};
            border-color: ${theme.decorations};
          }
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1;
          }

          main {
            padding: 1rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          a {
            color: ${theme.link};
            text-decoration: none;
          }

          .logo {
            height: 1em;
          }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
}

App.propTypes = {
  pageProps: PropTypes.shape({
    headerTitle: PropTypes.string,
  }),
};

export default App;
