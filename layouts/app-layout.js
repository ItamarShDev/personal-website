import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const AppLayout = ({ children, title, favicon, header }) => {
   return (
      <>
         <Head>
            <title>{title}</title>
            <link rel="icon" href={favicon} />
         </Head>
         {children}
      </>
   );
};

AppLayout.propTypes = {
   children: PropTypes.node,
   title: PropTypes.string,
   favicon: PropTypes.string,
};

AppLayout.defaultProps = {
   title: "Itamar Sharify",
   favicon: "/favicon.ico",
};
export default AppLayout;
