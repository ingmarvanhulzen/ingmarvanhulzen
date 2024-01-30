"use client";

import useScrollObserver from "@/lib/useScrollObserver";
import { ReactNode } from "react";

export default function ScrollContainer(props: {
  className?: string;
  children: ReactNode;
  style?: object;
}) {
  const container = useScrollObserver((element) =>
    element.style.setProperty(
      "--scroll-top",
      `${Math.max(0, 1 - (1 / element.clientHeight) * element.scrollTop)}`
    )
  );

  return (
    <main ref={container} className={props.className} style={props.style}>
      {props.children}
    </main>
  );
}
