"use client";
import {
  MouseEvent,
  ReactNode,
  useCallback,
  useRef,
  cloneElement,
  isValidElement,
  HTMLAttributes,
} from "react";
import styles from "./Spotlight.module.css";

const SPOTLIGHT_SIZE = 350;

export default function Spotlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = useCallback(() => {
    if (spotRef.current) spotRef.current.style.setProperty("opacity", ".85");
  }, [spotRef]);

  const onMouseLeave = useCallback(() => {
    if (spotRef.current) spotRef.current.style.setProperty("opacity", "0");
  }, [spotRef]);

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (ref.current && spotRef.current) {
        const rect = ref.current.getBoundingClientRect();

        const position = [
          rect.width - (event.clientX - rect.left) - SPOTLIGHT_SIZE / 2,
          rect.height - (event.clientY - rect.top) - SPOTLIGHT_SIZE / 2,
        ];

        requestAnimationFrame(() => {
          spotRef.current?.style.setProperty(
            "transform",
            `translate(${-position[0]}px, ${-position[1]}px)`
          );
        });
      }
    },
    [ref, spotRef]
  );

  return isValidElement(children)
    ? cloneElement(
        children,
        {
          ref,
          onMouseEnter,
          onMouseLeave,
          onMouseMove,
        } as HTMLAttributes<HTMLDivElement>,
        <>
          {children.props.children}
          <div ref={spotRef} className={`bg-neutral-500 ${styles.Spotlight}`} />
        </>
      )
    : null;
}
