import Link from "next/link";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";

const headerItems = [
  { id: uuidv4(), title: "About me", href: "/about" },
  { id: uuidv4(), title: "Projects", href: "/projects" },
  { id: uuidv4(), title: "Essays", href: "/essays" },
];

export default function Header() {
  return (
    <header className="h-16 pt-6">
      <Container>
        <nav className="flex justify-center mx-auto max-w-3xl">
          <ul className="flex gap-5 rounded-full bg-white/90 px-3 py-2 text-sm font-bold tracking-wide text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
            {headerItems.map((headerItem) => {
              const { id, title, href } = headerItem;
              return (
                <li key={id}>
                  <Link href={href}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
