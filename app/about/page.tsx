import LetterJuggler from "@/components/LetterJuggler";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg">
        <LetterJuggler className="text-3xl lg:text-5xl text-neutral-700 leading-normal">
          Passionated{" "}
          <span className="text-neutral-400">Software Engineer</span> who loves
          to explore the <span className="text-neutral-400">newest</span> design
          trends and <span className="text-neutral-400">web</span> technologies.
          With lots of <span className="text-neutral-400">experience</span> in
          coding.
        </LetterJuggler>
      </div>
    </main>
  );
}
