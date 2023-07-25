import React from "react";
import Container from "../Container";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const socialLinks = [
  {
    id: uuidv4(),
    title: "Community & Social Interactions",
    icon: <MdOutlineForum size={20} />,
    href: "https://community.andela.com/u/a0516a11?",
  },
  {
    id: uuidv4(),
    title: "Linkedin",
    icon: <FaLinkedinIn size={20} />,
    href: "https://www.linkedin.com/in/magugerald/",
  },
  {
    id: uuidv4(),
    title: "Facebook",
    icon: <FaFacebookF size={20} />,
    href: "https://www.facebook.com/Magz.Gerald",
  },
  {
    id: uuidv4(),
    title: "Twitter",
    icon: <FaTwitter size={20} />,
    href: "https://www.linkedin.com/in/magugerald/",
  },
];

export default function LetsConnect() {
  return (
    <div className="bg-slate-700 text-white py-20 lg:py-24">
      <Container>
        <h3 className="h3 my-5">Let&apos;s Connect</h3>
        <section className="flex items-center justify-between mt-8 max-w-4xl">
          {socialLinks.map((socialLink) => {
            const { id, href, title, icon } = socialLink;
            return (
              <Link
                target="_blank"
                key={id}
                href={href}
                className="flex items-center gap-3 hover:underline hover:underline-offset-8 transition-all delay-300"
              >
                <span>{icon}</span>
                <span className="font-bold text-sm">{title}</span>
                <BsArrowUpRight />
              </Link>
            );
          })}
        </section>
      </Container>
    </div>
  );
}
