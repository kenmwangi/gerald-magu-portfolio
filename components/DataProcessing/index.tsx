import React from "react";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";

const steps = [
  {
    id: uuidv4(),
    number: "Step: 1",
    title: "Define a Question",
    info: "Defining why you need data analysis",
  },
  {
    id: uuidv4(),
    number: "Step: 2",
    title: "Collect & Clean Data",
    info: "Collecting data from sources and cleaning unnecessary data",
  },
  {
    id: uuidv4(),
    number: "Step: 3",
    title: "Analyze Data",
    info: "Begin analyzing the data",
  },
  {
    id: uuidv4(),
    number: "Step: 4",
    title: "Visualize & Share Findings",
    info: "Interpreting results to give business insights",
  },
];

export default function DataProcessing() {
  return (
    <div className="bg-slate-800 text-white">
      <Container>
        <section className="py-16 lg:pt-20">
          <div className="max-w-3xl">
            <h2 className="h2 mb-5">Step-by-step Data Analysis Process</h2>
            <p className=" text-lg lg:text-2xl my-10">
              Completing tasks one by one while gaining useful insights with a
              professional data analysis techniques and analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 my-6">
            {steps.map((step) => {
              const { id, number, title, info } = step;
              return (
                <article
                  key={id}
                  className="bg-slate-700/50 hover:bg-slate-700/70 transition-colors p-3 flex flex-col gap-5"
                >
                  <p className="text-gray-300">{number}</p>
                  <h3 className="h3 grow hover:text-gray-300">{title}</h3>
                  <p className="grow hover:text-gray-300">{info}</p>
                </article>
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
}
