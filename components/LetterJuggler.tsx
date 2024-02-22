"use client";

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

export default function LetterJuggler({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
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

  return (
    <p ref={containerRef} className={className}>
      {children}
    </p>
  );
}
