import IDE from "@/components/IDE";
import Code from "@/components/Code";
import LetterJuggler from "@/components/LetterJuggler";
import Terminal from "@/components/Terminal";

export default function Page() {
  return (
    <main className="min-h-screen max-h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
      <div className="px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg">
          <LetterJuggler className="text-3xl lg:text-5xl text-neutral-700 leading-normal">
            Some easy to use{" "}
            <span className="text-neutral-400">Javascript</span> function to
            randomly animate individual characters from any given{" "}
            <span className="text-neutral-400">HTML</span> container element.
          </LetterJuggler>
        </div>
      </div>
      <div className="px-4 min-h-screen space-y-56">
        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="relative flex flex-col lg:flex-row">
            <h3 className="text-neutral-400 text-3xl w-60 shrink-0 mb-8">
              Background
            </h3>
            <div className="space-y-8">
              <p className="text-2xl">
                For my about page I{"'"}ve tried to keep the page really clean
                but I{"'"}ve struggled to make it{" "}
                <span className="text-neutral-400">interesting</span>. After
                some research on other peoples websites it became clear that
                text <span className="text-neutral-400">animations</span> is the
                way to go in 2024.
              </p>
              <p className="text-2xl">
                When I created the slide-up animation the page immediately
                became alive. But it was still hard coded for specific elements
                within the text which is still{" "}
                <span className="text-neutral-400">boring</span> to look at.
              </p>
              <p className="text-2xl">
                So thats when I looked in the{" "}
                <span className="text-neutral-400">javascript/html</span>{" "}
                methods to iterate within the container en pick a letter at
                random to animate.
              </p>
            </div>
            <span className="left-0 bottom-0 mt-6 text-xl lg:absolute">
              15-02-2024
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
            <h3 className="text-neutral-400 text-3xl">The basics</h3>
            <p className="text-2xl">
              To make it easy to show we want a full-screen page with{" "}
              <Code>100vh</Code> and some text centered in the middle of the
              screen, note that I{"'"}ve added some formatting elements to make
              sure that our function works with nested elements.
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
    <main className="main">
      <div className="center">
        <p>
          Sed augue ipsum, <strong>egestas</strong> nec, vestibulum et,
          malesuada adipiscing, dui. Mauris turpis nunc, blandit et, volutpat
          molestie, <u>porta ut</u>, ligula. Suspendisse feugiat. Maecenas
          egestas arcu quis ligula <em>mattis</em> placerat. Donec elit libero,
          sodales nec, volutpat a, suscipit non, turpis.
        </p>
      </div>
    </main>
  );
}`,
              },
              {
                name: "app/global.css",
                language: "css",
                contents: `body {
  margin: 0;
}

main {
  display: flex;
  height: 100vh;
}

.center {
  max-width: 700px;
  margin: auto;
}

p {
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
}`,
              },
            ]}
          />
        </div>

        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="relative flex flex-col lg:flex-row">
            <h3 className="text-neutral-400 text-3xl w-60 shrink-0 mb-8">
              Component
            </h3>
            <div className="space-y-8">
              <p className="text-2xl">
                Let{"'"}s start by wrapping our <Code>p</Code> tag into a new
                component called LetterJuggler. This component will contain all
                the business logic.
              </p>
              <p className="text-2xl">
                To select a random letter from an element tree is quite
                difficult but happily for us the browser provides us with a
                useful utility method <Code>.innerText</Code> which parses the
                contents of that element and returns the readable text as a
                string.
              </p>
              <p className="text-2xl">
                From this string we want to select a{" "}
                <span className="text-neutral-400">random letter</span> and
                store its position and make sure that the selected index is not
                a blank space otherwise the animation will show nothing and that
                defeats the purpose of this function.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <IDE
            files={[
              {
                name: "app/page.tsx",
                language: "tsx",
                contents: `import LetterJuggler from "@/components/LetterJuggler";

export default function Home() {
  return (
    <main className="main">
      <div className="center">
        <LetterJuggler>
          Sed augue ipsum, <strong>egestas</strong> nec, vestibulum et,
          malesuada adipiscing, dui. Mauris turpis nunc, blandit et, volutpat
          molestie, <u>porta ut</u>, ligula. Suspendisse feugiat. Maecenas
          egestas arcu quis ligula <em>mattis</em> placerat. Donec elit libero,
          sodales nec, volutpat a, suscipit non, turpis.
        </LetterJuggler>
      </div>
    </main>
  );
}`,
              },
              {
                name: "components/LetterJuggler.tsx",
                language: "tsx",
                contents: `"use client";

import { ReactNode, useEffect, useRef } from "react";

/*
 * This function will select a random letter from the given string
 * and returns the corresponding index.
 */
const getIndex = (text: string): number => {
  // Split text into a array so that we can iterate
  const letters = text.split("");

  let letter = " ";
  let index = 0;

  // This loop we will try to select a letter that doesn't matches a space
  while (letter == " ") {
    // Generate a random index based on the total length of the string
    index = Math.floor(Math.random() * letters.length);
    // Store letter by generated index
    letter = letters[index];
  }

  return index;
};

export default function LetterJuggler({ children }: { children: ReactNode }) {
  // Reference to our container element
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Get text from our container
    const text = containerRef.current!.innerText;

    // Get random index
    const index = getIndex(text);

    // Log result to console
    console.log(index);
  }, [containerRef]);

  return <p ref={containerRef}>{children}</p>;
}`,
              },
            ]}
          />
        </div>

        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="relative flex flex-col lg:flex-row">
            <h3 className="text-neutral-400 text-3xl w-60 shrink-0 mb-8">
              Wrapping
            </h3>
            <div className="space-y-8">
              <p className="text-2xl">
                To apply a animation to our selected letter we want to wrap it
                with a <Code>span</Code> so that we can apply our own animations
                through <span className="text-neutral-400">CSS</span> classes.
                Unfortunately the container contains multiple elements so we can
                {"'"}t simply find and replace the text.
              </p>
              <p className="text-2xl">
                Therefore we need to{" "}
                <span className="text-neutral-400">loop through</span> the child
                nodes and count every character until we find the matching
                index.
              </p>
              <p className="text-2xl">
                To keep our HTML valid we need to wrap the beginning middle and
                end with a <Code>span</Code>. So if we want to wrap the letter
                {'"a"'} from this string {'"this is a test"'} we need to get:
              </p>
              <Code>
                {"<span>this is </span><span>a</span><span>test</span>"}
              </Code>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <IDE
            files={[
              {
                name: "app/globals.css",
                language: "css",
                contents: `body {
  margin: 0;
}

main {
  display: flex;
  height: 100vh;
}

.center {
  max-width: 700px;
  margin: auto;
}

p {
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
}

.animate-bottom-to-top {
  color: red;
}`,
              },
              {
                name: "components/LetterJuggler.tsx",
                language: "tsx",
                contents: `"use client";

import { ReactNode, useEffect, useRef } from "react";

/*
 * This function will loop through the root childNodes and wrap
 * position with a span.
 */
const iterateChildNodes = (
  iteration: number,
  root: ChildNode | HTMLElement,
  position: number
) => {
  // Iterate through childNodes
  root.childNodes.forEach((child) => {
    // Only check #text elements
    if (child.nodeName == "#text") {
      // Loop though every character of the child
      for (let index = 0; index < child.nodeValue!.length; index++) {
        iteration += 1;

        // Found our target position
        if (iteration == position) {
          // If the index is greater than zero we need to wrap the text before within a span
          if (index > 0) {
            const start = document.createElement("span");
            // Select all the characters before our position
            start.innerText = child.nodeValue!.substring(0, index);
            // Append to parent node
            child.parentNode!.insertBefore(start, child);
          }

          const center = document.createElement("span");
          // At our animation class
          // This class can be replaced with anything you want
          center.classList.add("animate-bottom-to-top");
          // At our character
          center.innerText = child.nodeValue![index];
          // Append to parent node
          child.parentNode!.insertBefore(center, child);

          // If the index is less than the total length we need to wrap the text at the end within a span
          if (index < child.nodeValue!.length) {
            const end = document.createElement("span");
            // Select all the characters after our position
            end.innerText = child.nodeValue!.substring(index + 1);
            // Append to parent node
            child.parentNode!.insertBefore(end, child);
          }

          // Remove original node from parent
          child.parentNode!.removeChild(child);
        }
      }
    } else {
      // Continue iteration
      iteration = iterateChildNodes(iteration, child, position);
    }
  });

  return iteration;
};

/*
 * This function will select a random letter from the given string
 * and returns the corresponding index.
 */
const getIndex = (text: string): number => {
  // Split text into a array so that we can iterate
  const letters = text.split("");

  let letter = " ";
  let index = 0;

  // This loop we will try to select a letter that doesn't matches a space
  while (letter == " ") {
    // Generate a random index based on the total length of the string
    index = Math.floor(Math.random() * letters.length);
    // Store letter by generated index
    letter = letters[index];
  }

  return index;
};

export default function LetterJuggler({ children }: { children: ReactNode }) {
  // Reference to our container element
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Get text from our container
    const text = containerRef.current!.innerText;

    // Get random index
    const index = getIndex(text);

    // Wrap selected index
    iterateChildNodes(-1, containerRef.current!, index);
  }, [containerRef]);

  return <p ref={containerRef}>{children}</p>;
}`,
              },
            ]}
          />
        </div>

        <div className="max-w-sm md:max-w-2xl lg:max-w-screen-lg mx-auto">
          <div className="relative flex flex-col lg:flex-row">
            <h3 className="text-neutral-400 text-3xl w-60 shrink-0 mb-8">
              Animation
            </h3>
            <div className="space-y-8">
              <p className="text-2xl">
                To make our component juggle we need to wrap our{" "}
                <Code>useEffect</Code> with a interval which activates every
                second.
              </p>
              <p className="text-2xl">
                For the bottom-to-top animation we can use the clip-path
                property to draw a rectangle over the target element. And
                translate the offset with{" "}
                <span className="text-neutral-400">CSS</span> keyframes.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <IDE
            files={[
              {
                name: "app/globals.css",
                language: "css",
                contents: `body {
  margin: 0;
}

main {
  display: flex;
  height: 100vh;
}

.center {
  max-width: 700px;
  margin: auto;
}

p {
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
}

.animate-bottom-to-top {
  animation: bottom-to-top 500ms linear both;
}

@keyframes bottom-to-top {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0),
  }
}`,
              },
              {
                name: "components/LetterJuggler.tsx",
                language: "tsx",
                contents: `"use client";

import { ReactNode, useEffect, useRef } from "react";

/*
 * This function will loop through the root childNodes and wrap
 * position with a span.
 */
const iterateChildNodes = (
  iteration: number,
  root: ChildNode | HTMLElement,
  position: number
) => {
  // Iterate through childNodes
  root.childNodes.forEach((child) => {
    // Only check #text elements
    if (child.nodeName == "#text") {
      // Loop though every character of the child
      for (let index = 0; index < child.nodeValue!.length; index++) {
        iteration += 1;

        // Found our target position
        if (iteration == position) {
          // If the index is greater than zero we need to wrap the text before within a span
          if (index > 0) {
            const start = document.createElement("span");
            // Select all the characters before our position
            start.innerText = child.nodeValue!.substring(0, index);
            // Append to parent node
            child.parentNode!.insertBefore(start, child);
          }

          const center = document.createElement("span");
          // At our animation class
          // This class can be replaced with anything you want
          center.classList.add("animate-bottom-to-top");
          // At our character
          center.innerText = child.nodeValue![index];
          // Append to parent node
          child.parentNode!.insertBefore(center, child);

          // If the index is less than the total length we need to wrap the text at the end within a span
          if (index < child.nodeValue!.length) {
            const end = document.createElement("span");
            // Select all the characters after our position
            end.innerText = child.nodeValue!.substring(index + 1);
            // Append to parent node
            child.parentNode!.insertBefore(end, child);
          }

          // Remove original node from parent
          child.parentNode!.removeChild(child);
        }
      }
    } else {
      // Continue iteration
      iteration = iterateChildNodes(iteration, child, position);
    }
  });

  return iteration;
};

/*
 * This function will select a random letter from the given string
 * and returns the corresponding index.
 */
const getIndex = (text: string): number => {
  // Split text into a array so that we can iterate
  const letters = text.split("");

  let letter = " ";
  let index = 0;

  // This loop we will try to select a letter that doesn't matches a space
  while (letter == " ") {
    // Generate a random index based on the total length of the string
    index = Math.floor(Math.random() * letters.length);
    // Store letter by generated index
    letter = letters[index];
  }

  return index;
};

export default function LetterJuggler({ children }: { children: ReactNode }) {
  // Reference to our container element
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get text from our container
      const text = containerRef.current!.innerText;

      // Get random index
      const index = getIndex(text);

      // Wrap selected index
      iterateChildNodes(-1, containerRef.current!, index);
    }, 1000);

    return () => clearInterval(interval);
  }, [containerRef]);

  return <p ref={containerRef}>{children}</p>;
}`,
              },
            ]}
          />
        </div>

        <div />
      </div>
    </main>
  );
}
