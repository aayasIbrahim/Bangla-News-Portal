"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Next.js App Router Hook for current path
import {
  MdDashboard,
  MdArticle,
  MdCategory,
  MdPeople,
  MdLogout,
  MdMenu,
  MdClose,
} from 'react-icons/md';

// 1. Sidebar Link Data Structure (TypeScript)
interface SidebarLink {
  id: number;
  label: string;
  icon: React.ElementType;
  href: string;
}

const SIDEBAR_LINKS: SidebarLink[] = [
  { id: 1, label: 'ড্যাশবোর্ড', icon: MdDashboard, href: '/dashboard' },
  { id: 2, label: 'Add News', icon: MdArticle, href: '/addnews' },
  { id: 3, label: 'News list', icon: MdCategory, href: '/newslist' },
  { id: 4, label: 'ব্যবহারকারী', icon: MdPeople, href: '/users' },
];

const AdminSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile view
  const currentPath = usePathname(); // Get the current URL path

  // Reusable Link Component
  const NavLink: React.FC<{ link: SidebarLink }> = ({ link }) => {
    // Check if the current path starts with the link's href (useful for nested routes like /articles/create)
    const isActive = currentPath.startsWith(link.href);
    const Icon = link.icon;

    return (
      <a
        href={link.href}
        className={`flex items-center space-x-3 rtl:space-x-reverse p-3 text-sm font-medium transition duration-200 rounded-lg ${
          isActive
            ? 'bg-green-600 text-white shadow-md'
            : 'text-gray-300 hover:bg-gray-700'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span>{link.label}</span>
      </a>
    );
  };

  return (
    <>
      {/* --- Mobile Menu Button (Visible on small screens) --- */}
      {/* এটি মেইন কন্টেন্ট এর ওপর ভাসমান থাকবে */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 text-white bg-gray-800 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
      </button>

      {/* --- Overlay (Mobile Only) --- */}
      {/* সাইডবার খোলা থাকলে বাকি স্ক্রিনকে আবৃত করবে */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* --- Sidebar Container (Fixed Position) --- */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 space-y-8 z-50 shadow-2xl transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0' // Responsive visibility logic
        }`}
      >
        {/* Logo/Title */}
        <div className="flex items-center space-x-2 text-2xl font-bold border-b border-gray-700 pb-4">
          <MdArticle className="text-green-500 w-7 h-7" />
          <span>অ্যাডমিন প্যানেল</span>
        </div>

        {/* Main Navigation Links */}
        <nav className="space-y-2">
          {SIDEBAR_LINKS.map((link) => (
            <NavLink key={link.id} link={link} />
          ))}
        </nav>

        {/* Settings and Logout (Fixed at the bottom) */}
        <div className="absolute bottom-5 w-[calc(100%-40px)] space-y-2 border-t border-gray-700 pt-4">
          {/* <NavLink link={{ id: 99, label: 'সেটিংস', icon: MdSettings, href: '/admin/settings' }} /> */}
          <button
            onClick={() => console.log('Logging out...')}
            className="w-full flex items-center space-x-3 rtl:space-x-reverse p-3 text-sm font-medium text-red-400 hover:bg-red-900/40 rounded-lg transition duration-200"
          >
            <MdLogout className="w-5 h-5" />
            <span>লগ আউট</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;