"use client";
import React from "react";
import Header from "@/components/header/Header"; //
import NewsFooter from "@/components/footer/NewsFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <NewsFooter />
    </>
  );
}
