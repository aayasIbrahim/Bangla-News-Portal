"use client";

import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";
import TermsPolicies from "@/components/TermsPolicies";
import React from "react";

const TermsAndPolicies: React.FC = () => {
  return (
    <>
      <DynamicTitleFavicon
        title="শর্তাবলি ও নীতিমালা"
        faviconUrl="/favicon.ico"
      />
      <TermsPolicies/>
    </>
  );
};

export default TermsAndPolicies;
