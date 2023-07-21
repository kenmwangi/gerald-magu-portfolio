"use client";
import Link from "next/link";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
const headerItems = [
  { id: uuidv4(), title: "About me", href: "/about" },
  { id: uuidv4(), title: "Projects", href: "/projects" },
  { id: uuidv4(), title: "Essays", href: "/essays" },
];

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // Detect whether scrolled page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <Container>
        <section className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent max-w-max">
              Gerald
            </h2>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex flex-1 align-items flex-wrap">
              {headerItems.map((headerItem) => {
                return (
                  <li key={headerItem.id}>
                    <Link
                      href={headerItem.href}
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      {headerItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* Desktop CTA */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/about"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu */}
          <MobileMenu />
        </section>
      </Container>
    </header>
  );
}
