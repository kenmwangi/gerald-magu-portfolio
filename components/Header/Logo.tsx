import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent max-w-max">
      <Link href="/">G.</Link>
    </h2>
  );
}
