import React from "react";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const projects = [
  {
    id: uuidv4(),
    title: "Development of a predictive Web App for heart disease detection",
    cta: "Explore the project",
    subject:
      "Machine learning techniques to create models for heart disease prediction and deployed using Flask backend technology",
  },
  {
    id: uuidv4(),
    title: "Quantitative Methodological on citizenship and migration",
    cta: "Explore the project",
    subject:
      "Using powerful set of tools in measuring and guaging the aspects of migration and citizenship social phenomena based on increased data availability",
  },
  {
    id: uuidv4(),
    title: "Domesticated Animal Image Classification with Python",
    cta: "Explore the project",
    subject:
      "Creating and optimizing the convulational neutral network to identify domesticated vs non-domesticated animals using CIFAR-10 dataset",
  },
];

export default function CaseStudy() {
  return (
    <div className="py-16 lg:pt-20">
      <Container>
        <section className="max-w-2xl">
          <h2 className="font-extrabold tracking-tight h2">
            Interactive Projects
          </h2>
          <h4 className="text-xl my-12 text-gray-700">
            Proven solutions for real-world problems to provide best value based
            on given statistical data.
          </h4>
        </section>
        <section className="grid gap-6 grid-cols-1 lg:grid-cols-3 w-full mb-8">
          {projects.map((project) => {
            const { id, title, cta, subject } = project;
            return (
              <article
                key={id}
                className="flex flex-col gap-5 bg-neutral-50 p-4 rounded-md"
              >
                <h4 className="h4">{title}</h4>
                <p className="grow text-lg text-gray-600 tracking-wide leading-normal">
                  {subject}
                </p>
                <Link
                  href="/"
                  className="flex items-center mt-4 gap-3 text-lg font-semibold transition-[mx] hover:underline hover:underline-offset-8"
                >
                  {cta}{" "}
                  <span className="">
                    <BsArrowUpRight size={14} />
                  </span>
                </Link>
              </article>
            );
          })}
        </section>
        <div>
          <button className="btn rounded-full my-6 text-white bg-slate-900 hover:bg-slate-700 transition-colors">
            View all projects
          </button>
        </div>
      </Container>
    </div>
  );
}
