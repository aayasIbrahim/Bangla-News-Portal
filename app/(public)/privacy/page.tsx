"use client";

import Privacy from "@/components/Privacy";
import React from "react";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <DynamicTitleFavicon
        title="গোপনীয়তা নীতি"
        faviconUrl="/favicon.ico"
      />
      <Privacy />
    </>
  );
};

export default PrivacyPolicy;
