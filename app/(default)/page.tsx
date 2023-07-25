import CaseStudy from "@/components/CaseStudy";
import DataProcessing from "@/components/DataProcessing";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import SellingPoint from "@/components/SellingPoint";
import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Hero />
      <CaseStudy />
      <DataProcessing />
      <SellingPoint />
      <MySkills />
    </div>
  );
}
