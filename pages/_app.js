import PropTypes from "prop-types";
import { useTheme } from "lib/hooks";
import { Header } from "layouts";
import { centered } from "theme/theme";
import Head from "next/head";

function App({ Component, pageProps }) {
    const { theme, toggleTheme, ThemeContext, isDark } = useTheme();
    const title = pageProps.headerTitle;
    const { className: centerClassName, styles: centerStyle } = centered({
        selector: "main",
        isColumns: true,
    });
    const { isCentered } = pageProps;
    const mainClassName = isCentered ? centerClassName : "";
    const _title = title
        ? `Itamar Sharify - ${pageProps.title}`
        : "Itamar Sharify";

    return (
        <div>
            <Head>
                <title>{_title}</title>
            </Head>
            <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
                <Header title={title} />

                <main className={mainClassName}>
                    <Component {...pageProps} />
                    {centerStyle}
                </main>
                <style jsx global>{`
                    html {
                        font-size: 10px;
                    }

                    @font-face {
                        font-family: cascadia;
                        src: url(/fonts/CascadiaCode.woff2);
                    }

                    @font-face {
                        font-family: fira;
                        src: url(/fonts/FiraCode.woff2);
                    }

                    body {
                        transition: all 0.2s linear;
                        background-color: ${theme.bg};
                        color: ${theme.text};
                        padding: 0;
                        margin: 0;
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                            Droid Sans, Helvetica Neue, sans-serif;
                    }

                    * {
                        box-sizing: border-box;
                        border-color: ${theme.decorations};
                    }

                    main {
                        padding: 1rem;
                        max-width: 80rem;
                        margin: 0 auto;
                        display: block;
                        min-height: calc(100vh - 160px);
                        transition: filter 0.5s linear;
                    }

                    a {
                        color: ${theme.link};
                        text-decoration: none;
                        scroll-margin-top: 65px;
                    }

                    h1 {
                        font-size: 4rem;
                    }
                    h2 {
                        font-size: 3rem;
                    }
                    h3 {
                        font-size: 2.5rem;
                    }
                    h4 {
                        font-size: 2rem;
                    }
                    h5 {
                        font-size: 1.8rem;
                    }
                    h6 {
                        font-size: 1.2rem;
                    }

                    .logo {
                        height: 1rem;
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
