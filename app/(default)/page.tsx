import Hero from "@/components/Hero";
import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Hero />
    </div>
  );
}
