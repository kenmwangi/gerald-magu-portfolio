import SessionProviders from "@/providers/SessionProviders";
import "./css/globals.css";
import type { Metadata } from "next";
import { Mulish, Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Gerald Magu",
    default: "Home | Gerald Magu",
  },
  description:
    "Hey everyone, i just love working with data and recognizing patterns and insights from the data. Besides, i love karate and some bit of dancing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialised bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <SessionProviders>{children}</SessionProviders>
        </div>
      </body>
    </html>
  );
}
