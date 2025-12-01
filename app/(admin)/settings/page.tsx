"use client";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";

export default function AdminPage() {
  return (
    <div className="container mx-auto">
      

      {/* Forms container */}
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
        {/* Change Password Form */}     
          <ChangePasswordForm />
      </div>

     
    </div>
  );
}
