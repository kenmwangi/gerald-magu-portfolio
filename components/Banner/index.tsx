"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);
  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-600 text-white text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-white">
              <span className="mr-2 font-medium">Let&apos;s talk</span>
              <Link
                target="_blank"
                className="font-medium hover:underline text-gray-400"
                href="https://www.linkedin.com/in/magugerald/"
              >
                Linkedin
              </Link>
              <span className="mx-2">Or</span>
              <Link
                href="https://www.facebook.com/Magz.Gerald"
                target="_blank"
                className="font-medium hover:underline text-gray-400 transition duration-200"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
