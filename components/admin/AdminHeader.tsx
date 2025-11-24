// components/admin/AdminHeader.tsx
import React from 'react';
import { MdNotifications, MdAccountCircle } from 'react-icons/md';

const AdminHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 lg:ml-64 flex justify-between items-center shadow-sm">
      <div className="lg:hidden text-lg font-semibold text-gray-800">
        Admin Panel
      </div>
      <div className="hidden lg:block text-xl font-semibold text-gray-800">
        {/* Dynamic Page Title can be implemented here */}
        Welcome admin!
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-green-600">
          <MdNotifications className="w-6 h-6" />
        </button>
        <MdAccountCircle className="w-8 h-8 text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default AdminHeader;