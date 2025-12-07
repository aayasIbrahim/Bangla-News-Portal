"use client";
import React from "react";
import Sidebar from "@/components/admin/settings/SettingSidebar";
import MobileSidebar from "@/components/admin/settings/MobileSidebar";
import { usePathname } from "next/navigation";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const pathname = usePathname();

  const tabs = [
    { id: "password", label: "Change Password", href: "/settings/password" },
    { id: "logo", label: "Change Logo", href: "/settings/logo" },
  ];

  const activeTab =
    tabs.find((tab) => pathname.includes(tab.id))?.id || "logo";

  return (
    <div className="min-h-screen  flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar activeTab={activeTab} tabs={tabs} />
      </div>

      {/* Mobile Top Dropdown */}
      <div className="md:hidden w-full">
        <MobileSidebar activeTab={activeTab} tabs={tabs} />
      </div>

      {/* Main Content */}
      <main
        className="
          flex-1 
          p-4 md:p-6 
          max-w-full 
          bg-gray-50 
          min-h-screen
        "
      >
        <div className="w-full mx-auto">{children}</div>
      </main>
    </div>
  );
}
