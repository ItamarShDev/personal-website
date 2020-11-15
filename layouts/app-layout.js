import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const AppLayout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>

                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content="Itamar Sharify" />
                <meta
                    name="description"
                    content="Itamar Sharify's personal website"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://itamar.tech/" />
                <meta property="og:title" content="Itamar Sharify" />
                <meta
                    property="og:description"
                    content="Itamar Sharify's personal website"
                />
                <meta
                    property="og:image"
                    content="https://itamar.tech/images/meta-image.png"
                />
                <meta
                    property="og:site_name"
                    content="Itamar Sharify's personal website"
                />
                <meta
                    name="twitter:image:alt"
                    content="Itamar Sharify's personal websitee"
                />

                <meta property="twitter:card" content="website" />
                <meta property="twitter:title" content="Itamar Sharify" />
                <meta property="twitter:url" content="https://itamar.tech/" />
                <meta
                    property="twitter:description"
                    content="Itamar Sharify's personal website"
                />
                <meta
                    property="twitter:image"
                    content="https://itamar.tech/images/meta-image.png"
                />
            </Head>
            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};

AppLayout.defaultProps = {
    title: "Itamar Sharify",
};
export default AppLayout;
