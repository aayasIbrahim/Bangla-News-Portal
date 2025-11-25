// app/(public)/layout.tsx

// মনে রাখবেন, এটি একটি ক্লায়েন্ট কম্পোনেন্ট হতে পারে যদি আপনার Header বা Footer-এ hooks ব্যবহার হয়।
// তবে Header-এর ভেতরে usePathname ব্যবহার না করলে, এটি Server Component হিসেবেই থাকতে পারে।
"use client"
import React from 'react';
import Header from '@/components/header/Header'; // <-- আপনার Header কম্পোনেন্টটি সঠিক পাথ দিয়ে আমদানি করুন
import NewsFooter from '@/components/footer/NewsFooter'; 

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 1. Header (যা TopBar এবং স্ক্রলযোগ্য NavBar ধারণ করে) */}
      <Header /> 
      
      
      <main className=""> 
        {/* এই Padding-টপ NavBar-এর উচ্চতা অনুযায়ী দিন */}
        {children}
      </main>

      {/* 3. Footer */}
      <NewsFooter />
    </>
  );
}