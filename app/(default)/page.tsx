import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="h1">Home</h1>
    </div>
  );
}
