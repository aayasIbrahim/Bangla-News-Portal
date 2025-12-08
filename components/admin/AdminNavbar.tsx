"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
// import Image from "next/image";
import Link from "next/link";

import {
  MdDashboard,
  MdArticle,
  MdCategory,
  MdPeople,
  MdLogout,
  MdMenu,
  MdClose,
  // MdHome,
  MdSettings,
  MdAdsClick,
  MdKeyboardArrowDown,
  MdVideoLibrary,
} from "react-icons/md";
import Logo from "@/components/ui/Logo";

interface NavLinkItem {
  id: number;
  label: string;
  icon: React.ElementType;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { id: 1, label: "Dashboard", icon: MdDashboard, href: "/dashboard" },
  { id: 2, label: "Add News", icon: MdArticle, href: "/addnews" },
  { id: 3, label: "News list", icon: MdCategory, href: "/newslist" },
  { id: 4, label: "Videos", icon: MdVideoLibrary, href: "/videos" },
  { id: 5, label: "ADS", icon: MdAdsClick, href: "/ads" },
  { id: 6, label: "User", icon: MdPeople, href: "/users" },
  { id: 7, label: "Settings", icon: MdSettings, href: "/settings" },
  { id: 8, label: "addCategory", icon: MdSettings, href: "/addCategory" },
];

const AdminNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adminMenu, setAdminMenu] = useState(false);
  // const currentPath = usePathname();

  const LinkItem: React.FC<{ link: NavLinkItem }> = ({ link }) => {
    // const isActive = currentPath.startsWith(link.href);
    const Icon = link.icon;

    return (
      <a
        href={link.href}
        className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition duration-200 whitespace-nowrap`}
      >
        <Icon className="w-5 h-5" />
        <span>{link.label}</span>
      </a>
    );
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/">
            <Logo width={100} height={95} />
          </Link>
        </div>

        {/* Center Menu Only for Desktop */}
        <nav className="hidden lg:flex items-center space-x-3">
          {NAV_LINKS.map((link) => (
            <LinkItem key={link.id} link={link} />
          ))}
        </nav>

        {/* Admin Button Right */}
        <div className="hidden lg:block relative">
          <button
            onClick={() => setAdminMenu(!adminMenu)}
            className="flex items-center space-x-1 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            <span className="font-medium">Admin</span>
            <MdKeyboardArrowDown />
          </button>

          {/* Dropdown */}
          {adminMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border py-2">
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center space-x-2 w-full px-4 py-2 text-red-500 hover:bg-red-100"
              >
                <MdLogout className="w-5 h-5" />
                <span>লগ আউট</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdClose className="w-6 h-6" />
          ) : (
            <MdMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <LinkItem key={link.id} link={link} />
            ))}

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-100 rounded-md"
            >
              <MdLogout className="w-5 h-5" />
              <span>লগ আউট</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;
