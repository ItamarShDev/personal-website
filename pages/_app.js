import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@hooks";
import { Header, Footer } from "@components";
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
        <Footer />
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
