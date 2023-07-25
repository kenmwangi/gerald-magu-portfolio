import React from "react";
import Container from "../Container";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const experiences = [
  {
    id: uuidv4(),
    title: "Experience",
    subject:
      "Dedicated Data Analyst with experience in identifying problem areas and communicating the project needs",
  },
  {
    id: uuidv4(),
    title: "Adept at Receiving & Monitoring Data",
    subject:
      "Getting data from multiple streams that includes SQL, Acess and Excel data sources",
  },
  {
    id: uuidv4(),
    title: "Synthesizing Quantitative Information",
    subject:
      "Presenting ability to interact effectively with findings and generating insights as per standard",
  },
];

export default function SellingPoint() {
  return (
    <div className="py-16 lg:py-20">
      <Container>
        <h3 className="h2 mb-5">Why Gerald Magu?</h3>
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
          <div className="grid grid-cols-1 gap-5 my-10">
            {experiences.map((experience) => {
              const { id, title, subject } = experience;
              return (
                <article key={id} className="max-w-sm">
                  <h4 className="h4 my-5">{title}</h4>
                  <p className="text-lg text-gray-600">{subject}</p>
                </article>
              );
            })}
          </div>
          <div className="max-w-md">
            <Image
              src="/images/data-report.svg"
              height={300}
              width={300}
              className="order-1 mt-8 w-full"
              alt="Data Report"
            />
          </div>
        </section>

        <div className="flex flex-col lg:flex-row mt-10">
          <button className="btn bg-slate-600 text-white rounded-full transition-colors hover:bg-slate-700">
            Explore More
          </button>
        </div>
      </Container>
    </div>
  );
}
