import Image from "next/image";

import Code from "@/components/Code";

import styles from "./styles.module.css";
import ScrollContainer from "@/components/ScrollContainer";
import Terminal from "@/components/Terminal";
import IDE from "@/components/IDE";

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
      className={`min-h-screen max-h-screen overflow-y-auto overflow-x-hidden scroll-smooth ${styles.Container}`}
    >
      <div className="min-h-screen-2">
        <div className="sticky h-screen top-0">
          <Image
            src="/ricardo-gomez-angel-5YM26lUicfU-unsplash.jpg"
            alt="Unsplash picture"
            className={`absolute inset-0 object-cover object-bottom ${styles.Image}`}
            fill
          />
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 text-neutral-50 dark:text-neutral-950">
            {Array.from({ length: 5 * 3 }).map((_, idx) => (
              <div key={idx} className={styles.Square} />
            ))}
          </div>
        </div>
      </div>

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
                possible for performance reasons and managed to only use{" "}
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

        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="space-y-8">
            <h3 className="text-neutral-400 text-3xl">Basics</h3>
            <p className="text-2xl">
              We should start by creating a basic{" "}
              <span className="text-neutral-400">HTML</span> structure where the
              main viewport contains a section with a height of{" "}
              <Code>200vh</Code> so that we can scroll. Within the section there
              will be a fixed div which scroll with the section.
            </p>
            <p className="text-2xl">
              Our grid will be rendered over our image which uses{" "}
              <Href>picsum.photos</Href> as image placeholder and contains three
              rows, note that the grid items are not visible, we will style te
              grid items later on.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <IDE
            files={[
              {
                name: "app/page.tsx",
                language: "tsx",
                contents: `export default function Home() {
  return (
    <main>
      <div className="section">
        <div className="fixed">
          {/* I use picsum for a random image but you could use youre own image here */}
          <img
            src="https://picsum.photos/seed/100/1920/1080"
            className="image"
          />

          <div className="grid">
            {/* Simple function to generate 15 divs */}
            {Array.from({ length: 5 * 3 }).map((_, idx) => (
              <div key={idx} className="grid-item" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}`,
              },
              {
                name: "app/globals.css",
                language: "css",
                contents: `html, body {
  margin: 0;
  padding: 0;
}

/* The main viewport */
main {
  max-height: 100vh;
  overflow-x: hidden;
}

/* The first seciton so we can scroll the page */
.section {
  height: 200vh;
}

/* Here we create a fixed window so the image and grid stays in place when we scroll */
.fixed {
  position: sticky;
  height: 100vh;
  top: 0;
}

/* Scale image to full screen and scale properly */
.image {
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
}

/* The grid which should hold the squares */
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
}

/* Grid should be relative so the pseudo-element is absolute to there grid item and ignore overlaying content */
.grid-item {
  position: relative;
  overflow: hidden;
}

/* Some basic grid item with a default value for --size */
.grid-item::before {
  --size: 1rem;
  content: "";
  position: absolute;
  inset: var(--size);
}`,
              },
            ]}
          />
        </div>

        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="space-y-8">
            <h3 className="text-neutral-400 text-3xl">Inverse corners</h3>
            <p className="text-2xl">
              Unfortunately within <span className="text-neutral-400">CSS</span>{" "}
              there is no easy way to to get inverse corners on a div, but there
              is a way to do it. I{"'"}ve used multiple <Code>box-shadows</Code>{" "}
              without a blur and overflow hidden. So let{"'"}s say you have a
              div with a corner-radius of 10px and you want a inverse corner on
              the top left you could add{" "}
              <Code>box-shadow: -10px -10px 0px;</Code> and luckily for us
              box-shadow supports multiple entries so for all the corners it is
              as easy as repeating the logic.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <IDE
            files={[
              {
                name: "app/globals.css",
                language: "css",
                contents: `html, body {
  margin: 0;
  padding: 0;
}

/* The main viewport */
main {
  max-height: 100vh;
  overflow-x: hidden;
}

/* The first seciton so we can scroll the page */
.section {
  height: 200vh;
}

/* Here we create a fixed window so the image and grid stays in place when we scroll */
.fixed {
  position: sticky;
  height: 100vh;
  top: 0;
}

/* Scale image to full screen and scale properly */
.image {
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
}

/* The grid which should hold the squares */
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
}

/* Grid should be relative so the pseudo-element is absolute to there grid item and ignore overlaying content */
.grid-item {
  position: relative;
  overflow: hidden;
}

/* Some basic grid item with a default value for --size */
.grid-item::before {
  --size: 1rem;
  content: "";
  position: absolute;
  inset: var(--size);
  border-radius: var(--size);
  box-shadow: 
        calc(-1 * var(--size)) calc(-1 * var(--size)) 0 var(--size), /* top-left -1rem -1rem 0 1rem */
        var(--size) calc(-1 * var(--size)) 0 var(--size), /* top-right 1rem -1rem 0 1rem */
        var(--size) var(--size) 0 var(--size), /* bottom-right 1rem 1rem 0 1rem */
        calc(-1 * var(--size)) var(--size) 0 var(--size); /* bottom-left -1rem 1rem 0 1rem */
}`,
              },
            ]}
          />
        </div>

        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="space-y-8">
            <h3 className="text-neutral-400 text-3xl">The animation</h3>
            <p className="text-2xl">
              Now let{"'"}s create the animation! We want to change the{" "}
              <Code>--size</Code> based on our scroll position. If we are a the
              top of our page the <Code>--size</Code> should be{" "}
              <span className="text-neutral-400">1rem</span> and after{" "}
              <span className="text-neutral-400">100vh</span> it should be zero
              so the image is completely visible for another{" "}
              <span className="text-neutral-400">100vh</span>.
            </p>
            <p className="text-2xl">
              To track our scroll position i{"'"}ve created a custom{" "}
              <span className="text-neutral-400">React</span> hook which ads
              scroll event listeners to a reference container. With the
              interpolate method I can apply my own logic to translate the
              scroll position into variables.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <IDE
            files={[
              {
                name: "lib/useScrollObserver.tsx",
                language: "typescript",
                contents: `import { useLayoutEffect, useRef } from "react";

/*
  * This function will add "scroll" event listeners to it's given container
  * and calls the given interpolate method when te element scrolls
  */
function useScrollObserver(interpolate: (element: HTMLElement) => void) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // return if container is not set
    if (!containerRef?.current) {
      return;
    }

    // grep current container as HTMLElement
    const container: HTMLElement = containerRef!.current;

    // bind interpolate method with current container
    const listener = () => interpolate(container);

    // add "scroll" listener
    container.addEventListener("scroll", listener);

    // call listener on component mount
    listener();

    return () => {
      // remove listener on component unmount
      container!.removeEventListener("scroll", listener);
    };
  }, [containerRef, interpolate]);

  // return target container reference
  return containerRef;
}

export default useScrollObserver;`,
              },
              {
                name: "app/page.tsx",
                language: "tsx",
                contents: `"use client";
import useScrollObserver from "@/lib/useScrollObserver";

export default function Home() {
  const ref = useScrollObserver((element) => {
    element.style.setProperty(
      "--scroll-top",
      // from 1 at the top to 0 at the bottom of the page
      String(Math.max(0, 1 - (1 / element.clientHeight) * element.scrollTop))
    );
  });

  return (
    <main ref={ref}>
      <div className="section">
        <div className="fixed">
          {/* I use picsum for a random image but you could use youre own image here */}
          <img
            src="https://picsum.photos/seed/100/1920/1080"
            className="image"
          />

          <div className="grid">
            {/* Simple function to generate 15 divs */}
            {Array.from({ length: 5 * 3 }).map((_, idx) => (
              <div key={idx} className="grid-item" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}`,
              },
              {
                name: "app/globals.css",
                language: "css",
                contents: `html, body {
  margin: 0;
  padding: 0;
}

/* The main viewport */
main {
  max-height: 100vh;
  overflow-x: hidden;
}

/* The first seciton so we can scroll the page */
.section {
  height: 200vh;
}

/* Here we create a fixed window so the image and grid stays in place when we scroll */
.fixed {
  position: sticky;
  height: 100vh;
  top: 0;
}

/* Scale image to full screen and scale properly */
.image {
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
}

/* The grid which should hold the squares */
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
}

/* Grid should be relative so the pseudo-element is absolute to there grid item and ignore overlaying content */
.grid-item {
  position: relative;
  overflow: hidden;
}

/* Some basic grid item with a default value for --size */
.grid-item::before {
  --size: calc(1rem * var(--scroll-top, 1));
  content: "";
  position: absolute;
  inset: var(--size);
  border-radius: var(--size);
  box-shadow: 
        calc(-1 * var(--size)) calc(-1 * var(--size)) 0 var(--size), /* top-left -1rem -1rem 0 1rem */
        var(--size) calc(-1 * var(--size)) 0 var(--size), /* top-right 1rem -1rem 0 1rem */
        var(--size) var(--size) 0 var(--size), /* bottom-right 1rem 1rem 0 1rem */
        calc(-1 * var(--size)) var(--size) 0 var(--size); /* bottom-left -1rem 1rem 0 1rem */
}`,
              },
            ]}
          />
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
