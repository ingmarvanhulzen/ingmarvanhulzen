"use client";
import { ReactNode, createElement, useEffect, useRef } from "react";

function itterChilds(
  itter: number,
  root: ChildNode | HTMLElement,
  position: number
) {
  root.childNodes.forEach((child) => {
    if (child.nodeName == "#text") {
      for (let index = 0; index < child.nodeValue.length; index++) {
        itter += 1;

        if (itter == position) {
          if (index > 0) {
            const start = document.createElement("span");
            start.innerText = child.nodeValue.substr(0, index);
            child.parentNode.insertBefore(start, child);
          }

          const highlight = document.createElement("span");
          highlight.classList.add("animate-bottom-to-top");
          highlight.innerText = child.nodeValue[index];
          child.parentNode.insertBefore(highlight, child);

          if (index < child.nodeValue.length) {
            const end = document.createElement("span");
            end.innerText = child.nodeValue.substr(index + 1);
            child.parentNode.insertBefore(end, child);
          }

          child.parentNode.removeChild(child);
        }
      }
    } else {
      itter = itterChilds(itter, child, position);
    }
  });

  return itter;
}

function LetterJuggler({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const text = ref.current?.innerText ?? "";
      const letters = text.split("");

      let letter = " ",
        position = 0;
      while (letter == " ") {
        position = Math.floor(Math.random() * letters.length);
        letter = letters[position];
      }

      console.log(letter, position);

      itterChilds(-1, ref.current, position);
    }, 1000);

    return () => clearInterval(interval);
  }, [ref]);

  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  );
}

export default LetterJuggler;
