import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <section className="flex items-center justify-between w-full pt-6 ">
      <div>
        <Link
          href="/"
          className="block h-auto max-w-[32px] w-[32px] px-1 bg-slate-800/60 text-white"
        >
          <h2 className="h4 font-extrabold uppercase">G.</h2>
        </Link>
      </div>
      <h2 className="text-sm lg:text-xl hover:text-gray-100 hover:underline hover:underline-offset-8 transition font-extrabold">
        <Link href="/contact" className="tracking-wide">
          Explore &rarr;
        </Link>
      </h2>
    </section>
  );
}
