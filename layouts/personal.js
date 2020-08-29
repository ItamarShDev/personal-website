import React from "react";
import AppLayout from "@layouts/app-layout";
import { Avatar, AboutMe, SocialRefs } from "@components";

const Personal = (props) => {
  return (
    <AppLayout>
      <Avatar />
      <AboutMe />
      <SocialRefs withTitle={true} />
    </AppLayout>
  );
};

export default Personal;
