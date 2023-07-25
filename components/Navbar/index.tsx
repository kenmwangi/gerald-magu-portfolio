import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <section className="flex items-center justify-between w-full pt-6 ">
      <div>
        <Logo />
      </div>
      <h2 className="text-sm lg:text-xl hover:text-gray-100 hover:underline hover:underline-offset-8 transition font-extrabold">
        <Link href="/projects" className="tracking-wide">
          Explore &rarr;
        </Link>
      </h2>
    </section>
  );
}
