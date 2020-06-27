import React from "react";
import PropTypes from "prop-types";
import styles, { footer } from "../theme/theme";

import Head from "next/head";
import Link from "next/link";

const AppLayout = ({ children, title, favicon, header }) => {
   return (
      <div className="container">
         <Head>
            <title>{title}</title>
            <link rel="icon" href={favicon} />
         </Head>
         <header>
            <Link href="/">{header}</Link>
         </header>
         <main>{children}</main>
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
};

AppLayout.propTypes = {
   children: PropTypes.node,
   title: PropTypes.string,
   favicon: PropTypes.string,
   header: PropTypes.string,
};

AppLayout.defaultProps = {
   title: "Itamar Sharify",
   favicon: "/favicon.ico",
   header: "Itamar Sharify's website",
};
export default AppLayout;
