import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="bg-rose-50/90 text-black">Home</h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
