"use client";
import { useSession } from "next-auth/react";
import React from "react";
export default function User() {
  const { data: session } = useSession();

  console.log("Client session", session);
  return <pre>{JSON.stringify(session)}</pre>;
}
