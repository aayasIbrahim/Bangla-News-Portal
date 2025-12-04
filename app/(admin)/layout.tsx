import React from "react";
import AdminSidebar from "@/components/admin/AdminNavbar";
import AdminFooter from "@/components/admin/AdminFooter";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex flex-col flex-grow mt-[100px] ">
        <main className="p-4 sm:p-8  transition-all duration-300 ">
          {children}
        </main>
        <div className="fixed left-0 bottom-0 w-full">
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}
