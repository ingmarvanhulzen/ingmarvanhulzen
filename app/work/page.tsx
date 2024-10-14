import Spotlight from "@/components/Spotlight";
import Link from "next/link";

function Card({ title, href }: { title: string; href: string }) {
  return (
    <Spotlight>
      <Link
        href={href}
        className="relative block rounded-2xl aspect-video overflow-hidden will-change-transform bg-neutral-700 dark:bg-neutral-900 p-4"
      >
        <h2 className="text-3xl text-neutral-50">{title}</h2>
      </Link>
    </Spotlight>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen max-h-screen overflow-y-auto overscroll-x-hidden scroll-smooth p-4">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 gap-4 mt-24 md:grid-cols-2">
        <Card title="Square reveal" href="/work/squarereveal" />
        <Card title="Letter Juggler" href="/work/letterjuggler" />
      </div>
    </main>
  );
}
