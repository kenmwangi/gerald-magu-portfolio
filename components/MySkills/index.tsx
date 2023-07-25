import React from "react";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";

const skills = [
  { id: uuidv4(), title: "Communication Skills" },
  { id: uuidv4(), title: "Python" },
  { id: uuidv4(), title: "Math & Statistics" },
  { id: uuidv4(), title: "R" },
  { id: uuidv4(), title: "SQL/NoSQL" },
  { id: uuidv4(), title: "Business Savvy" },
  { id: uuidv4(), title: "Project Management" },
  { id: uuidv4(), title: "Data Visualization" },
  { id: uuidv4(), title: "Microsoft Excel" },
];

export default function MySkills() {
  return (
    <div className="bg-neutral-50 py-20 lg:py-24">
      <Container>
        <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 my-5">
            <h2 className="h2 tracking-wide leading-snug">
              <span className="hidden md:block">Data Science</span>
              Skills & Experiences
            </h2>
          </div>
          <div className="flex gap-3 flex-wrap">
            {skills.map((skill) => {
              return (
                <p className="bg-gray-200 text-gray-600 p-1" key={skill.id}>
                  {skill.title}
                </p>
              );
            })}
          </div>
        </section>
        <div className="flex flex-col lg:flex-row my-12">
          <button className="btn rounded-full bg-slate-700 hover:bg-slate-800 transition text-white">
            Let&apos;s collaborate
          </button>
        </div>
      </Container>
    </div>
  );
}
