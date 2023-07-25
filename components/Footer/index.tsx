import React from "react";
import Container from "../Container";
import Logo from "../Navbar/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 md:py-20">
      <Container>
        <section className="flex flex-col justify-center  gap-5">
          <div className="flex items-center justify-between">
            <Logo />
            <Link
              href="/projects"
              className="text-lg font-semibold text-gray-600 hover:text-gray-900 transition-colors delay-300"
            >
              Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end justify-end gap-8 mt-5 border-t-[1px] border-neutral-200">
            <p className="text-sm text-gray-500 mt-10">
              &copy; {new Date().getFullYear()}, Gerald Magu. All rights
              reserved.
            </p>
            <p className="text-xs text-gray-400">
              Developed by{" "}
              <Link
                href="https://twitter.com/ken_cipher"
                target="_blank"
                className="font-semibold text-slate-700 hover:text-slate-900 transition-colors hover:underline hover:underline-offset-4"
              >
                Ken Mwangi
              </Link>
            </p>
          </div>
        </section>
      </Container>
    </footer>
  );
}
