import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollContainer from "@/components/ScrollContainer";

function Banner() {
  return (
    <svg viewBox="0 0 1357 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="V"
        className="animate-bottom-to-top"
        d="M25.2469 0L71.4837 131.106H73.3088L119.546 0H139.318L82.1303 155.745H62.6622L5.47461 0H25.2469Z"
        fill="currentColor"
      />
      <path
        id="A"
        className="animate-bottom-to-top"
        d="M156.581 155.745H136.808L193.996 0H213.464L270.652 155.745H250.879L204.338 24.6393H203.122L156.581 155.745ZM163.881 94.907H243.579V111.637H163.881V94.907Z"
        fill="currentColor"
      />
      <path
        id="N"
        className="animate-bottom-to-top"
        d="M418.412 0V155.745H400.16L315.291 33.4608H313.77V155.745H294.911V0H313.162L398.335 122.588H399.856V0H418.412Z"
        fill="currentColor"
      />
      <path
        id="H"
        className="animate-bottom-to-top"
        d="M516.379 155.745V0H535.239V69.3551H618.283V0H637.143V155.745H618.283V86.0856H535.239V155.745H516.379Z"
        fill="currentColor"
      />
      <path
        id="U"
        className="animate-bottom-to-top"
        d="M777.108 0H795.967V103.12C795.967 113.767 793.458 123.273 788.439 131.638C783.47 139.952 776.449 146.518 767.374 151.334C758.299 156.1 747.652 158.483 735.434 158.483C723.215 158.483 712.569 156.1 703.494 151.334C694.419 146.518 687.372 139.952 682.353 131.638C677.384 123.273 674.9 113.767 674.9 103.12V0H693.76V101.599C693.76 109.204 695.433 115.972 698.779 121.904C702.125 127.785 706.891 132.424 713.076 135.82C719.312 139.167 726.764 140.84 735.434 140.84C744.103 140.84 751.556 139.167 757.792 135.82C764.028 132.424 768.793 127.785 772.089 121.904C775.435 115.972 777.108 109.204 777.108 101.599V0Z"
        fill="currentColor"
      />
      <path
        id="L"
        className="animate-bottom-to-top"
        d="M833.63 155.745V0H852.49V139.014H924.887V155.745H833.63Z"
        fill="currentColor"
      />
      <path
        id="Z"
        className="animate-bottom-to-top"
        d="M948.918 155.745V142.056L1032.87 16.7304H948.005V0H1055.38V13.6885L971.428 139.014H1056.3V155.745H948.918Z"
        fill="currentColor"
      />
      <path
        id="E"
        className="animate-bottom-to-top"
        d="M1087.93 155.745V0H1181.93V16.7304H1106.79V69.3551H1177.06V86.0856H1106.79V139.014H1183.14V155.745H1087.93Z"
        fill="currentColor"
      />
      <path
        id="N1"
        className="animate-bottom-to-top"
        d="M1339.42 0V155.745H1321.17L1236.3 33.4608H1234.78V155.745H1215.92V0H1234.17L1319.34 122.588H1320.86V0H1339.42Z"
        fill="currentColor"
      />
      <path
        className="animate-left-to-right"
        d="m0 150.727 158.355-.001-2.762 8.366H0v-8.365ZM249.283 150.726h64.491v8.365h-61.742l-2.749-8.365ZM535.24 150.726H396.681l5.685 8.365H535.24v-8.365ZM618.28 150.726h616.5v8.365h-616.5v-8.365ZM1356.83 150.726h-39.14l5.78 8.365h33.36v-8.365Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Project({
  href,
  title,
  children,
  newMin,
  oldMin,
  newRange,
  oldRange,
}: {
  href: string;
  title: string;
  children: ReactNode;
  newMin: number;
  oldMin: number;
  newRange: number;
  oldRange: number;
}) {
  return (
    <Link
      href={href}
      className="relative block rounded-2xl aspect-video overflow-hidden"
      style={{
        "--oldMin": oldMin, // start after 0.25
        "--newRange": newRange, // position we want to animate to
        "--oldRange": oldRange, // time of animation
        "--newMin": newMin,
        "--oldValue":
          "min(max(var(--scroll-top), var(--oldMin)), var(--oldRange) + var(--oldMin))", // Clamp oldValue <= oldMin + oldRange
        scale: `calc((var(--oldValue) - var(--oldMin)) * var(--newRange) / var(--oldRange) + var(--newMin))`,
      }}
    >
      {children}
      <div className="absolute inset-0 flex items-center justify-center bg-black/75">
        <h4 className="text-bold text-neutral-50 text-2xl md:text-4xl lg:text-5xl">
          {title}
        </h4>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <ScrollContainer
      direction="top-down"
      className="w-full min-h-screen max-h-screen overflow-y-auto overflow-x-hidden scroll-smooth [--scroll-top:0]"
    >
      <div className="min-h-screen w-4/5 mx-auto max-w-screen-3xl">
        <div className="flex items-center min-h-screen">
          <div className="w-full m-auto space-y-6 text-neutral-700 dark:text-neutral-50">
            <Banner />
            <h3 className="text-center text-xl md:text-3xl">
              Software Engineer from Utrecht
            </h3>
          </div>
        </div>

        <div className="min-h-screen">
          <Project
            title="SQUARE REVEAL ANIMATION"
            href="/work/squarereveal"
            oldMin={0}
            newRange={0.2}
            oldRange={0.75}
            newMin={0.8}
          >
            <div className="overflow-hidden absolute inset-1">
              <Image
                src="/ricardo-gomez-angel-5YM26lUicfU-unsplash.jpg"
                alt="Unsplash picture"
                className="object-cover object-bottom"
                fill
              />
            </div>
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 [--size:0.5rem] md:[--size:0.75rem] lg:[--size:1rem]">
              {Array.from({ length: 5 * 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="relative before:absolute before:inset-2 before:rounded before:shadow-outer dark:text-neutral-500 md:before:inset-3 md:before:rounded-xl lg:before:inset-4 lg:before:rounded-2xl"
                />
              ))}
            </div>
          </Project>
        </div>
        <div className="min-h-screen">
          <Project
            title="SQUARE REVEAL ANIMATION"
            href="/work/squarereveal"
            oldMin={1}
            newRange={0.2}
            oldRange={0.75}
            newMin={0.8}
          >
            <div className="overflow-hidden absolute inset-1">
              <Image
                src="/ricardo-gomez-angel-5YM26lUicfU-unsplash.jpg"
                alt="Unsplash picture"
                className="object-cover object-bottom"
                fill
              />
            </div>
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 [--size:0.5rem] md:[--size:0.75rem] lg:[--size:1rem]">
              {Array.from({ length: 5 * 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="relative before:absolute before:inset-2 before:rounded before:shadow-outer dark:text-neutral-500 md:before:inset-3 md:before:rounded-xl lg:before:inset-4 lg:before:rounded-2xl"
                />
              ))}
            </div>
          </Project>
        </div>
      </div>
    </ScrollContainer>
  );
}
