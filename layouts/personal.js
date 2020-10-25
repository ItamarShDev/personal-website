import React from "react";
import AppLayout from "@layouts/app-layout";
import { AboutMe, SocialRefs, LanguagesList } from "@components";
import { centered } from "theme/theme";

const Personal = () => {
  const { className, styles } = centered({
    isColumns: true,
    gap: 20,
  });
  return (
    <AppLayout>
      <div className={className}>
        <AboutMe />
        <LanguagesList />
        <SocialRefs withTitle={true} />
        {styles}
      </div>
    </AppLayout>
  );
};

export default Personal;
