import React from "react";
import styles, { footer } from "../theme/theme";
import Link from "next/link";
import PropTypes from "prop-types";
function App({ Component, pageProps }) {
   const title = pageProps.headerTitle || "Itamar Sharify";
   return (
      <div className="container">
         <header>
            <Link href="/">
               <a>{title}</a>
            </Link>
         </header>
         <main>
            <Component {...pageProps} />
         </main>
         <footer>
            <a href="https://twitter.com/ISharify" target="_blank">
               <img
                  className="twitter"
                  src="/icons/twitter.svg"
                  alt="Twitter logo"
               />
               Twitter
            </a>
            <a href="https://www.github.com/ItamarShDev" target="_blank">
               <img src="/icons/github.svg" alt="github logo" />
               Github
            </a>
            <a href="https://medium.com/@itamarsharify" target="_blank">
               <img
                  className="medium"
                  src="/icons/medium.svg"
                  alt="Medium logo"
               />
               Medium
            </a>
         </footer>
         <style jsx>{footer}</style>
         <style jsx>{styles}</style>
         <style jsx global>{`
            html,
            body {
               padding: 0;
               margin: 0;
               font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                  Helvetica Neue, sans-serif;
            }

            * {
               box-sizing: border-box;
            }
         `}</style>
      </div>
   );
}

App.propTypes = {
   pageProps: PropTypes.shape({
      headerTitle: PropTypes.string,
   }),
};

export default App;
