import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const AppLayout = ({ children, title }) => {
    const _title = title ? `Itamar Sharify - ${title}` : "Itamar Sharify";
    return (
        <>
            <Head>
                <title>{_title}</title>
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
    title: "",
};
export default AppLayout;
