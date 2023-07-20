"use client";
import Footer from "@/components/Footer";
import AOS from "aos";
import React, { useEffect } from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="grow">
      {children}
      <Footer />
    </main>
  );
}
