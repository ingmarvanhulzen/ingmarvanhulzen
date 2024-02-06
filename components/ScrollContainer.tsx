"use client";

import useScrollObserver from "@/lib/useScrollObserver";
import { ReactNode } from "react";

const choices = ["top-down", "bottom-up"];

export default function ScrollContainer(props: {
  className?: string;
  direction: "top-down" | "bottom-up";
  children: ReactNode;
  style?: object;
}) {
  const container = useScrollObserver((element) =>
    element.style.setProperty(
      "--scroll-top",
      props.direction == "bottom-up"
        ? `${Math.max(0, 1 - (1 / element.clientHeight) * element.scrollTop)}`
        : `${Math.max(0, (1 / element.clientHeight) * element.scrollTop)}`
    )
  );

  return (
    <main ref={container} className={props.className} style={props.style}>
      {props.children}
    </main>
  );
}
