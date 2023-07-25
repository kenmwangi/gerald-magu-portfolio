import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="block h-auto max-w-[32px] w-[32px] px-1 bg-slate-800/60 text-white"
    >
      <h2 className="h4 font-extrabold uppercase">G.</h2>
    </Link>
  );
}
