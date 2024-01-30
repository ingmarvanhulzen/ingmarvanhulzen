import Link from "next/link";
import { BiSolidHome } from "react-icons/bi";

export default function NavBar() {
  return (
    <nav className="fixed flex z-10 rounded-full bg-neutral-300/70 backdrop-blur p-1 top-8 left-1/2 -translate-x-1/2">
      <Link
        href="/"
        className="flex items-center px-4 py-2 rounded-full hover:bg-neutral-300"
      >
        <BiSolidHome className="h-5 w-5" />
      </Link>
      <Link
        href="/work"
        className="flex items-center px-4 py-2 rounded-full hover:bg-neutral-300"
      >
        <span>work</span>
      </Link>
      <Link
        href="/about"
        className="flex items-center px-4 py-2 rounded-full hover:bg-neutral-300"
      >
        <span>about</span>
      </Link>
      <Link
        href="/contact"
        className="flex items-center px-4 py-2 rounded-full hover:bg-neutral-300"
      >
        <span>contact</span>
      </Link>
    </nav>
  );
}
