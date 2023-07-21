"use client";
import { Transition } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { headerItems } from "@/data/MenuItems";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNav ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className=" flex flex-col absolute top-full h-screen pb-16 z-20 left-0 w-full bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li className="mb-8">
              {headerItems.map((headerItem) => {
                const { id, title, href } = headerItem;
                return (
                  <Link
                    key={id}
                    href={href}
                    className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                  >
                    {title}
                  </Link>
                );
              })}
            </li>
          </ul>
          <ul className="grow px-5 py-2">
            <div className="border-t border-gray-100">
              <li className="mt-10 ">
                <Link
                  href="/signin"
                  className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span>Get Started</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fill="#999"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </div>
          </ul>
          <footer className="items-end px-5 py-2">
            <div className="flex items-center justify-between mb-10">
              <p className="text-sm text-gray-500 tracking-tight">
                &copy; Gerald Magu, {new Date().getFullYear()}. All rights
                reserved
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://www.facebook.com/Magz.Gerald"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-600  transition duration-200"
                >
                  <BsFacebook />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/magugerald/"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-600  transition duration-200"
                >
                  <BsLinkedin />
                </Link>
              </div>
            </div>
          </footer>
        </Transition>
      </div>
    </div>
  );
}
