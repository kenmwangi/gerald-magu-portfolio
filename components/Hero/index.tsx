import React from "react";
import Container from "../Container";
import Navbar from "../Navbar";
import { v4 as uuidv4 } from "uuid";

const roles = [
  { id: uuidv4(), title: "Data Scientist" },
  { id: uuidv4(), title: "Researcher" },
  { id: uuidv4(), title: "Business Analyst" },
];

export default function Hero() {
  return (
    <div className="bg-slate-800 text-white">
      <Container>
        <Navbar />
        <section className="py-20 lg:py-24 flex flex-col gap-12 max-w-4xl">
          <h1 className="text-3xl lg:text-6xl leading-normal font-extrabold">
            Hello, I&apos;m Magu{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text text-transparent max-w-max">
              Gerald
            </span>
          </h1>
          <div className="flex gap-4">
            {roles.map((role) => {
              const { id, title } = role;
              return (
                <h2 key={id} className="text-sm lg:text-lg text-[#8575ff]">
                  {title}
                </h2>
              );
            })}
          </div>
          <div className="flex gap-8 flex-col md:flex-row">
            <button className="btn rounded-full hover:bg-[#8575ff] bg-[#6B57FF]">
              Explore projects
            </button>
            <button className="btn rounded-full bg-slate-700/70 transition-all hover:bg-slate-900">
              Start Data Science Journey
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
}
