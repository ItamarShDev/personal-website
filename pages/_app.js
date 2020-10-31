import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "lib/hooks";
import { Header, Footer } from "layouts";
import { centered, mainContent } from "theme/theme";
function App({ Component, pageProps }) {
  const { theme, toggleTheme, ThemeContext, isDark } = useTheme();
  const title = pageProps.headerTitle;
  const { className: centerClassName, styles: centerStyle } = centered({
    selector: "main",
    isColumns: true,
  });
  const { className: contentClassName, styles: contentStyle } = mainContent({
    selector: "main",
  });
  const { isCentered, isContent } = pageProps;
  let mainClassName = `${isCentered ? centerClassName : ""}  ${
    isContent ? contentClassName : ""
  }`;
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
        <Header title={title} />
        <main className={mainClassName}>
          <Component {...pageProps} />
          {centerStyle}
          {contentStyle}
        </main>
        <Footer />
        <style jsx global>{`
          @font-face {
            font-family: cascadia;
            src: url(/fonts/CascadiaCode.woff2);
          }

          @font-face {
            font-family: fira;
            src: url(/fonts/FiraCode.woff2);
          }
          @font-face {
            font-family: hasklig;
            src: url(/fonts/Hasklig.otf) ormat("opentype");
          }

          body {
            transition: all 0.2s linear;
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

          main {
            width: 100%;
            padding: 1rem;
            display: block;
            min-height: calc(100vh - 160px);
          }

          a {
            color: ${theme.link};
            text-decoration: none;
            scroll-margin-top: 65px;
          }

          .logo {
            height: 1em;
          }
        `}</style>
      </ThemeContext.Provider>
    </div>
  );
}

App.propTypes = {
  pageProps: PropTypes.shape({
    headerTitle: PropTypes.string,
  }),
};

export default App;
