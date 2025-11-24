// app/(admin)/layout.tsx (Admin Layout)

import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar'; 
import AdminHeader from '@/components/admin/AdminHeader'; 
// *** Notice: No import of Header or NewsFooter ***

export default function AdminLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex flex-col flex-grow">
        <AdminHeader /> 
        <main className="p-4 sm:p-8 lg:ml-64 transition-all duration-300">
          {children} 
        </main>
        {/* Footer is intentionally omitted */}
      </div>
    </div>
  );
}