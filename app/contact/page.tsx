import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

export default function Page() {
  return (
    <main className="min-h-screen max-h-screen overflow-y-auto overscroll-x-hidden scroll-smooth flex justify-center items-center">
      <div className="flex flex-row gap-4">
        <a
          target="_blank"
          href="https://github.com/ingmarvanhulzen"
          className="text-center hover:underline"
        >
          <BiLogoGithub size={64} />
          <span>Github</span>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ingmarvanhulzen/"
          className="text-center hover:underline"
        >
          <BiLogoLinkedinSquare size={64} />
          <span>LinkedIn</span>
        </a>
      </div>
    </main>
  );
}
