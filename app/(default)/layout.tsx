"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/Footer";

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
    <main className="grow h-[1400px]">
      {children}
      <Footer />
    </main>
  );
}