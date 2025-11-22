"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Facebook,
  Youtube,
  Instagram,
  MessageCircle,
} from "lucide-react";

// ----------------------
// ⭐ Types
// ----------------------
interface MenuItem {
  name: string;
  href: string;
}

interface NavMenuProps {
  items: MenuItem[];
  specialItem: MenuItem;
  isMobile?: boolean;
}

// ----------------------
// ⭐ Menu Links Data
// ----------------------
const menuItems: MenuItem[] = [
  { name: "সর্বশেষ", href: "#latest" },
  { name: "রাজনীতি", href: "#politics" },
  { name: "জাতীয়", href: "#national" },
  { name: "অপরাধ", href: "#crime" },
  { name: "বিশ্ব", href: "#world" },
  { name: "বাণিজ্য", href: "#business" },
  { name: "মতামত", href: "#opinion" },
  { name: "খেলা", href: "#sports" },
  { name: "বিজ্ঞান", href: "#science" },
  { name: "চাকরি", href: "#jobs" },
  { name: "জীবনযাপন", href: "#lifestyle" },
  { name: "বিচিত্র", href: "#variety" },

];

const specialLink: MenuItem = { name: "ই-পেপার", href: "#epaper" };

// ----------------------
// ⭐ UL Menu Component
// ----------------------

const NavMenu: React.FC<NavMenuProps> = ({
  items,
  specialItem,
  isMobile = false,
}) => (
  <ul
    className={`flex items-center ${
      isMobile ? "flex-col space-y-3" : "flex-row space-x-6"
    }`}
  >
    {items.map((item) => (
      <li key={item.name}>
        <a
          href={item.href}
          className={`text-black hover:text-red-600 transition font-medium sm:text-[18px] p-2 ${
            isMobile ? "block text-center w-full" : ""
          }`}
        >
          {item.name}
        </a>
      </li>
    ))}

    <li>
      <a
        href={specialItem.href}
        className={`text-red-600 hover:text-red-700 transition font-bold text-sm border-b-2 border-red-600 ${
          isMobile ? "block text-center w-full " : ""
        }`}
      >
        {specialItem.name}
      </a>
    </li>
  </ul>
);

// ----------------------
// ⭐ Social Icons
// ----------------------

const SocialIcons: React.FC = () => (
  <div className="flex items-center justify-center space-x-3 text-gray-500">
    <a
      href="#"
      aria-label="Facebook"
      className="hover:text-blue-600 transition"
    >
      <Facebook size={18} />
    </a>
    <a
      href="#"
      aria-label="WhatsApp"
      className="hover:text-green-500 transition"
    >
      <MessageCircle size={18} />
    </a>
    <a href="#" aria-label="YouTube" className="hover:text-red-500 transition">
      <Youtube size={18} />
    </a>
    <a
      href="#"
      aria-label="Instagram"
      className="hover:text-pink-600 transition"
    >
      <Instagram size={18} />
    </a>
  </div>
);

// ----------------------
// ⭐ Auth Section
// ----------------------

const AuthSection: React.FC = () => (
  <div className="flex space-x-0 ml-4">
    <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition rounded-l-lg">
      Eng
    </button>
    <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition rounded-r-lg">
      Login
    </button>
  </div>
);

// ----------------------
// ⭐ Main Navbar
// ----------------------

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bengaliFont: React.CSSProperties = {
    fontFamily: `"Noto Sans Bengali", "Inter", sans-serif`,
  };

  return (
    <div className="bg-gray-50" style={bengaliFont}>
      <nav className="sticky top-0 z-50 ">
        {/* TOP BAR */}
        <div className="bg-white px-4 sm:py-3 border-b-[1px] border-black">
          <div className="flex justify-between items-center container mx-auto w-full">
            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 sm:hidden">
              <ul className="flex space-x-6 whitespace-nowrap py-2">
                <li>
                  <a href="#" className="hover:text-red-600">
                    সর্বশেষ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    রাজনীতি
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    বাংলাদেশ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    অপরাধ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    বিশ্ব
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    বাণিজ্য
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    মতামত
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    খেলা
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    বিজ্ঞান
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    চাকরি
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    জীবনযাপন
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    বিচিত্র
                  </a>
                </li>
              </ul>
            </div>

            {/* No Logo — Removed */}

            {/* Mobile Menu Button */}
            <button
              className=" md:hidden p-2 text-gray-600 hover:text-red-600 transition "
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
                <AuthSection />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-white  shadow-lg p-4`}
        >
          <div className="flex flex-col space-y-4">
            <NavMenu items={menuItems} specialItem={specialLink} isMobile />
            <div className="w-full h-px bg-gray-200" />
            <SocialIcons />
            <div className="pt-2 flex justify-center">
              <AuthSection />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
