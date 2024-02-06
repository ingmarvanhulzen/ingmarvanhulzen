import LetterJuggler from "@/components/LetterJugler";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <LetterJuggler className="w-full max-w-sm md:max-w-2xl lg:max-w-screen-lg text-3xl lg:text-5xl text-neutral-700 leading-normal">
        Passionated{" "}
        <strong className="text-neutral-400">Software Engineer</strong> who
        loves to explore the{" "}
        <strong className="text-neutral-400">newest</strong> design trends and{" "}
        <strong className="text-neutral-400">web</strong> technologies. With
        lots of <strong className="text-neutral-400">experience</strong> in
        coding.
      </LetterJuggler>
    </main>
  );
}
