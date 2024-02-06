import Image from "next/image";

import styles from "./styles.module.css";
import ScrollContainer from "@/components/ScrollContainer";

import PrismCode from "@/components/PrismCode";

const CODEBLOCKS = {
  resetGlobalCSS: `
body {
  margin: 0;
}
`,
  initialPage: `
`,
  section1: `
function useScrollObserver(interpolate: (element: HTMLElement) => void) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef?.current) {
      return;
    }

    const container: HTMLElement = containerRef!.current;

    const listner = () => interpolate(container);

    container.addEventListener("scroll", listner);

    listner();

    return () => {
      container!.removeEventListener("scroll", listner);
    };
  }, [containerRef, interpolate]);

  return containerRef;
}`,
  section2: `
.GridItem {
  position: absolute;
  inset: 5rem;
  box-shadow: 10px;
}`,
};

export default function Page() {
  return (
    <ScrollContainer
      direction="bottom-up"
      className="w-full min-h-screen max-h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
      style={{
        "--scroll-top": 1,
        "--size": "calc(var(--scroll-top) * .75rem)",
      }}
    >
      <div className="fixed inset-0 -z-10">
        <Image
          src="/ricardo-gomez-angel-5YM26lUicfU-unsplash.jpg"
          alt="Unsplash picture"
          className="object-cover object-bottom"
          fill
        />
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 text-neutral-950">
          {Array.from({ length: 5 * 3 }).map((_, idx) => (
            <div key={idx} className={styles.Square} />
          ))}
        </div>
      </div>
      <div className="relative min-h-screen">
        <div className="w-full h-2/3 absolute p-3 z-0">
          <div className="w-full h-full bg-neutral-50 rounded-xl flex flex-col justify-end p-8 space-y-4 relative overflow-hidden">
            <h1 className="text-6xl text-bold text-neutral-700">
              SQUARE REVEAL EFFECT
            </h1>
            <p className="text-3xl text-neutral-500 max-w-3xl">
              An example of the image reveal animation witch uses a scroll
              observer to set the CSS variables. For the inferted rounded
              corners i{"'"}ve used 4 box-shadows and an overflow-hidden tricks.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen bg-neutral-950 rounded-t-xl">
        <div className="max-w-screen-2xl mx-auto pt-8 space-y-8">
          <div className="grid grid-cols-2">
            <div className="max-w-xl space-y-4 min-h-96">
              <h3 className="text-3xl text-neutral-50">Create project</h3>
              <p className="text-xl text-neutral-50">
                Let{"'"}s start this tutorial with a fresh{" "}
                <strong className="text-neutral-500">React</strong> app. You
                could create a new project through the following{" "}
                <strong className="text-neutral-500">npx</strong> command.
              </p>
            </div>

            <PrismCode
              language="bash"
              filename="terminal"
              code="npx create-next-app@latest --ts --eslint --app --src-dir --no-tailwind"
            />
          </div>

          <div className="grid grid-cols-2">
            <div className="max-w-xl space-y-4">
              <h3 className="text-3xl text-neutral-50">Clean project</h3>
              <p className="text-xl text-neutral-50">
                First of all let{"'"}s cleanup the start project so we have a
                blank slate to work from.
              </p>
              <ol>
                <li>Reset src/globals.css with some basic CSS.</li>
                <li>Clear src/page.module.css</li>
              </ol>
            </div>
            <div>
              <PrismCode
                language="css"
                filename="src/globals.css"
                code={CODEBLOCKS.resetGlobalCSS}
              />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="max-w-xl space-y-4">
              <h3 className="text-3xl text-neutral-50">JSX markup</h3>
              <p className="text-xl text-neutral-50">
                Now we define our JSX/html structure we should have two divs and
                a random full screen image.
              </p>
            </div>
            <PrismCode
              language="typescript"
              filename="src/page.tsx"
              code={CODEBLOCKS.section1}
            />
          </div>

          <div className="grid grid-cols-2">
            <div className="max-w-xl space-y-4">
              <h3 className="text-3xl text-neutral-50">Section 3</h3>
            </div>
            <PrismCode
              language="css"
              filename="styles.css"
              code={CODEBLOCKS.section2}
            />
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
}
