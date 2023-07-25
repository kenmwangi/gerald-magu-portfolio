import Container from "@/components/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div className="py-16 lg:py-20">
      <Container>
        <h2 className="h2 my-12">Data Science Projects</h2>
        <p className="text-gray-600 my-8">Solutions to real-life problems</p>
      </Container>
    </div>
  );
}
