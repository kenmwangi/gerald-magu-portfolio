import { v4 as uuidv4 } from "uuid";

export const headerItems = [
  { id: uuidv4(), title: "About me", href: "/about" },
  { id: uuidv4(), title: "Projects", href: "/projects" },
  { id: uuidv4(), title: "Essays", href: "/essays" },
];
