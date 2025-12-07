"use client";
import React from "react";
import Link from "next/link";

interface SidebarProps {
  activeTab: string;
  tabs: { id: string; label: string; href: string }[];
}

const SettingSidebar: React.FC<SidebarProps> = ({ activeTab, tabs }) => {
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <nav className="flex flex-col gap-2">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.href} className={`text-left px-4 py-2 rounded hover:bg-blue-100 ${activeTab === tab.id ? "bg-blue-200 font-semibold" : ""}`}>
            {tab.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SettingSidebar;
