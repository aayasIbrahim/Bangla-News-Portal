"use client";

import React, { useState } from "react";
import AuthSection from "./Nav/AuthSection";
import SocialIcons from "./Nav/SocialIcon";
import { useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  name: string;
  href: string;
  isAdmin?: boolean;
}

interface NavMenuProps {
  items: MenuItem[];
  specialItem: MenuItem;
  isMobile?: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ items, specialItem, isMobile = false }) => (
  <ul className={`flex ${isMobile ? "flex-col space-y-3" : "flex-row space-x-6"} items-center`}>
    {items.map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          className={`text-black hover:text-red-600 transition font-medium sm:text-[18px] p-2 ${
            isMobile ? "block text-center w-full" : ""
          }`}
        >
          {item.name}
        </Link>
      </li>
    ))}
    <li>
      <a
        href={specialItem.href}
        className={`text-red-600 hover:text-red-700 transition font-bold text-sm border-b-2 border-red-600 ${
          isMobile ? "block text-center w-full" : ""
        }`}
      >
        {specialItem.name}
      </a>
    </li>
  </ul>
);

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const role = session?.user?.role;
  const isAdmin = role === "admin";

  // Dynamically create menu items based on role
  const menuItems: MenuItem[] = [
    { name: "সর্বশেষ", href: "/" },
    { name: "রাজনীতি", href: "/politics" },
    { name: "জাতীয়", href: "/national" },
    { name: "বাংলাদেশ", href: "/bangladesh" },
    { name: "বিশ্ব", href: "/world" },
    { name: "বাণিজ্য", href: "/business" },
    { name: "খেলা", href: "/sports" },
    ...(isAdmin ? [{ name: "Add News", href: "/addnews", isAdmin: true }] : []),
  ];

  const specialLink: MenuItem = { name: "ই-পেপার", href: "/" };

  const bengaliFont: React.CSSProperties = {
    fontFamily: `"Noto Sans Bengali", "Inter", sans-serif`,
  };

  return (
    <div className="bg-gray-50" style={bengaliFont}>
      <nav className="sticky top-0 z-50">
        {/* TOP BAR */}
        <div className="bg-white px-4 sm:py-3 border-b-[1px] border-black">
          <div className="flex justify-between items-center container mx-auto w-full">
            {/* Horizontal scroll menu on small screens */}
            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 sm:hidden">
              <ul className="flex space-x-6 whitespace-nowrap py-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-red-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-red-600 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 w-full justify-between">
              <NavMenu items={menuItems} specialItem={specialLink} />
              <div className="flex items-center space-x-6">
                <SocialIcons />
                <AuthSection isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-white shadow-lg p-4`}
        >
          <div className="flex flex-col space-y-4" onClick={() => setIsOpen(false)}>
            <NavMenu items={menuItems} specialItem={specialLink} isMobile />
            <div className="w-full h-px bg-gray-200" />
            <SocialIcons />
            <div className="pt-2 flex justify-center">
              <AuthSection isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
