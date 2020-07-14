import React from "react";
import PropTypes from "prop-types";
import AppLayout from "../layouts/app-layout";

const personal = (props) => {
  return (
    <AppLayout>
      <main>About me</main>
    </AppLayout>
  );
};
export async function getStaticProps() {
  return {
    props: {
      headerTitle: "About Me",
    },
  };
}

export default personal;
