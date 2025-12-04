"use client";

import React from "react";
// 1. deleteUserMutation import করা হয়েছে (ধরে নেওয়া হলো এটি userApi-তে ডিফাইন করা আছে)
import { useGetUsersQuery, useUpdateRoleMutation, useDeleteUserMutation } from "@/app/redux/features/user/userApi";
import { Trash2 } from "lucide-react"; // ডিলিট আইকনের জন্য

type UserRole = "admin" | "user";

interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
}

export default function User() {
  const { data, isLoading, isError } = useGetUsersQuery();
  // 2. deleteUserMutation হুক ব্যবহার করা হয়েছে
  const [updateRole, { isLoading: isUpdating }] = useUpdateRoleMutation();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation(); // 👈 নতুন

  const users: User[] = Array.isArray(data?.users) ? data.users : [];
  
  // ------------------------------------
  // ⭐ রোল পরিবর্তনের ফাংশন
  // ------------------------------------
  const handleRoleChange = async (id: string, role: UserRole) => {
    // লগ ইন করা ইউজারের আইডি যদি পরিবর্তন করা না যায়, তবে এখানে একটি অতিরিক্ত চেক যুক্ত করতে পারেন।
    
    console.log("Sending PATCH:", id, role);
    try {
      const res = await updateRole({ id, role }).unwrap();
      console.log("Response:", res);
      alert(`রোল পরিবর্তন হয়েছে: ${role}`);
    } catch (err) {
      console.error("Update Role Error:", err);
      alert("রোল পরিবর্তন ব্যর্থ হয়েছে");
    }
  };

  // ------------------------------------
  // ⭐ ব্যবহারকারী মুছে ফেলার ফাংশন
  // ------------------------------------
  const handleDeleteUser = async (id: string, name: string) => {
    // কনফার্মেশন প্রম্পট
    if (!confirm(`${name} নামের ব্যবহারকারীকে কি আপনি নিশ্চিতভাবে মুছে ফেলতে চান?`)) {
        return;
    }
    
    console.log("Sending DELETE:", id);
    try {
      const res = await deleteUser(id).unwrap(); // id পাস করা হলো
      console.log("Delete Response:", res);
      // মুছে ফেলার পরে ব্যবহারকারীদের তালিকা স্বয়ংক্রিয়ভাবে রিফ্রেশ হবে (যদি userApi-তে invalidateTags সেট করা থাকে)।
      alert(`ব্যবহারকারী ${name} সফলভাবে মুছে ফেলা হয়েছে।`);
    } catch (err) {
      console.error("Delete User Error:", err);
      alert("ব্যবহারকারী মুছে ফেলতে ব্যর্থ হয়েছে।");
    }
  };


  // ------------------------------------
  // ⭐ লোডিং/এরর স্টেট
  // ------------------------------------
  const isActionLoading = isUpdating || isDeleting; // যেকোনো অ্যাকশন চলমান থাকলে বাটন নিষ্ক্রিয় হবে
  
  if (isLoading) return <p className="text-gray-700 text-center mt-10">ব্যবহারকারীদের লোড করা হচ্ছে...</p>;
  if (isError) return <p className="text-red-500 text-center mt-10">ব্যবহারকারীদের লোড করতে ব্যর্থ হয়েছে।</p>;
  if (!users.length) return <p className="text-gray-700 text-center mt-10">কোনো ব্যবহারকারী পাওয়া যায়নি।</p>;

  // ------------------------------------
  // ⭐ রেন্ডারিং
  // ------------------------------------
  return (
    <section className="bg-white min-h-screen p-6">
     <div className="container mx-auto">
       <h1 className="text-gray-900 text-2xl font-semibold mb-6">ব্যবহারকারী পরিচালনা</h1>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center p-5 rounded-xl bg-gray-100 border border-gray-300 shadow-sm hover:shadow-md transition-all"
          >
            {/* ব্যবহারকারী তথ্য */}
            <div>
              <p className="text-lg text-gray-900 font-semibold">{user.name}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium inline-block mt-1 ${
                  user.role === "admin" ? "bg-purple-700 text-white" : "bg-green-600 text-white"
                }`}
              >
                {user.role === "admin" ? "অ্যাডমিন" : "ইউজার"}
              </span>
            </div>

            {/* রোল পরিবর্তনের বাটন */}
            <div className="flex gap-2 items-center">
              {/* অ্যাডমিন বাটন */}
              {user.role !== "admin" && (
                <button
                  disabled={isActionLoading}
                  onClick={() => handleRoleChange(user._id, "admin")}
                  className="px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition disabled:opacity-50"
                >
                  অ্যাডমিন বানাও
                </button>
              )}

              {/* ইউজার বাটন */}
              {user.role !== "user" && (
                <button
                  disabled={isActionLoading}
                  onClick={() => handleRoleChange(user._id, "user")}
                  className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg transition disabled:opacity-50"
                >
                  ইউজার বানাও
                </button>
              )}
              
              {/* ⭐ ডিলিট বাটন ⭐ */}
              <button
                disabled={isActionLoading}
                onClick={() => handleDeleteUser(user._id, user.name)}
                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition disabled:opacity-50 ml-3"
                title={`মুছে ফেলুন: ${user.name}`}
              >
                <Trash2 size={16} /> 
              </button>
            </div>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
}