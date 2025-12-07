"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface MobileSidebarProps {
  activeTab: string;
  tabs: { id: string; label: string; href: string }[];
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ tabs }) => {
  const router = useRouter();
  const pathname = usePathname(); 

  return (
    <aside className="md:hidden bg-white border-b p-4 sticky top-0 z-30 shadow-sm pb-5">
      <div className="w-full">
        <label className="text-sm font-medium mb-2 block text-gray-600">
          Settings Menu
        </label>

        <select
          value={pathname} // FIXED: select matches current url
          onChange={(e) => router.push(e.target.value)}
          className="
            w-full border p-3 rounded-xl bg-gray-50 
            text-gray-800 shadow-sm
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition-all duration-200 ease-out
          "
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.href}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default MobileSidebar;
