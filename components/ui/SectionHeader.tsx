"use client";

import React from "react";

interface SectionHeaderProps {
  title: string;
  className?: string; // optional extra classes
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = "" }) => {
  return (
    <h2
      className={`text-2xl font-bold text-gray-900 border-b-2 border-gray-600 pb-2 mb-6 flex items-center ${className}`}
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 ml-2 text-red-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </h2>
  );
};

export default SectionHeader;
