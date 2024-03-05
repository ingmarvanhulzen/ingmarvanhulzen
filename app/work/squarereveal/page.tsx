import Image from "next/image";

import Code from "@/components/Code";

import styles from "./styles.module.css";
import ScrollContainer from "@/components/ScrollContainer";

import PrismCode from "@/components/PrismCode";
import Terminal from "@/components/Terminal";

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

function Href({ children }: { children: string }) {
  return (
    <a
      href={`https://www.${children}`}
      target="_blank"
      className="text-neutral-400"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <ScrollContainer
      direction="top-down"
      className="min-h-screen max-h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
      style={{
        "--scroll-top": 0,
        "--size": "calc(max(0, 1 - var(--scroll-top)) * .75rem)",
      }}
    >
      <div className="fixed inset-0 -z-10">
        <div className="overflow-hidden absolute inset-0">
          <Image
            src="/ricardo-gomez-angel-5YM26lUicfU-unsplash.jpg"
            alt="Unsplash picture"
            className={`object-cover object-bottom ${styles.Image}`}
            fill
          />
        </div>

        <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 text-neutral-50 dark:text-neutral-950">
          {Array.from({ length: 5 * 3 }).map((_, idx) => (
            <div key={idx} className={styles.Square} />
          ))}
        </div>
      </div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>

      <div className="px-4 min-h-screen space-y-56 pt-56 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="relative flex flex-col lg:flex-row">
            <h3 className="text-neutral-400 text-3xl w-60 shrink-0 mb-8">
              Background
            </h3>
            <div className="space-y-8">
              <p className="text-2xl">
                After browsing on one of my favorite websites{" "}
                <Href>awwwards.com</Href> I noticed that many websites use
                scroll animations to create stunning effects, but some websites
                use so many resources that the animation stutters.
              </p>
              <p className="text-2xl">
                When I came across a website from <Href>depo.studio</Href> I saw
                a nice image reveal effect on their about page. So I thought to
                challenge myself and try to implement it. And make sure that the
                animation runs smooth on any device.
              </p>
              <p className="text-2xl">
                For this project I wanted to use{" "}
                <span className="text-neutral-400">CSS</span> as much as
                possible for performance reasons and managed to only use the{" "}
                <span className="text-neutral-400">Javascript</span> to set a{" "}
                <Code>--scroll-top</Code> variable which I will use to animate
                the squares on the screen.
              </p>
            </div>
            <span className="left-0 bottom-0 mt-6 text-xl lg:absolute">
              10-01-2024
            </span>
          </div>
        </div>

        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="space-y-8">
            <h3 className="text-neutral-400 text-3xl">Tutorial</h3>
            <p className="text-2xl">
              Let{"'"}s start by initializing a new{" "}
              <span className="text-neutral-400">Next.js</span> application.
              <br />
              You can do that by inserting the following npx command in your
              terminal by choice.
              <br />
            </p>
            <p className="text-2xl">
              After initialization we can delete everything in the{" "}
              <Code>page.tsx</Code>, <Code>globals.css</Code>,{" "}
              <Code>page.module.css</Code> to start with a nice blank
              application.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <Terminal>
            <Terminal.Item>npx create-next-app@latest</Terminal.Item>
            <Terminal.Item>
              What is your project named?{" "}
              <span className="text-neutral-500">demo</span>
            </Terminal.Item>
            <Terminal.Item>
              Would you like to use TypeScript?{" "}
              <span className="text-neutral-500">Yes</span>
            </Terminal.Item>
            <Terminal.Item>
              Would you like to use ESLint?{" "}
              <span className="text-neutral-500">Yes</span>
            </Terminal.Item>
            <Terminal.Item>
              Would you like to use Tailwind CSS?{" "}
              <span className="text-neutral-500">No</span>
            </Terminal.Item>
            <Terminal.Item>
              Would you like to use `src/` directory?{" "}
              <span className="text-neutral-500">No</span>
            </Terminal.Item>
            <Terminal.Item>
              Would you like to use App Router? (recommended){" "}
              <span className="text-neutral-500">Yes</span>
            </Terminal.Item>
            <Terminal.Item>
              Would you like to customize the default import alias (@/*)?){" "}
              <span className="text-neutral-500">No</span>
            </Terminal.Item>
          </Terminal>
        </div>

        <div />
      </div>

      {/* <div className="min-h-screen bg-neutral-950">
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
              code="npx create-next-app@latest --ts --eslint --app --no-src-dir --no-tailwind --import-alias '@/*'"
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
              <PrismCode language="css" code={CODEBLOCKS.resetGlobalCSS} />
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
            <PrismCode language="typescript" code={CODEBLOCKS.section1} />
          </div>

          <div className="grid grid-cols-2">
            <div className="max-w-xl space-y-4">
              <h3 className="text-3xl text-neutral-50">Section 3</h3>
            </div>
            <PrismCode language="css" code={CODEBLOCKS.section2} />
          </div>
        </div>
      </div> */}
    </ScrollContainer>
  );
}
