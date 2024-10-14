"use client";

import { motion, motionValue, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Transition({ active }: { active: boolean }) {
  const points = useMemo(() => {
    const offset = 100;
    const points = [];

    let x = 0;
    let y = window.innerHeight * 0.4;

    const angle = (Math.atan2(y, window.innerWidth) * 180) / Math.PI;

    points.push([x, y]);

    while (x < window.innerWidth) {
      x +=
        offset * Math.cos(((angle + randomInteger(-15, 15)) * Math.PI) / 180);
      y +=
        offset * Math.sin(((angle + randomInteger(-15, 15)) * Math.PI) / 180);

      points.push([x, y]);
    }

    return points;
  }, []);

  return (
    <svg
      width={window.innerWidth}
      height={window.innerHeight}
      className="fixed top-0 left-0 right-0 h-svh pointer-events-none"
    >
      <motion.path
        strokeWidth={2}
        fill={"black"}
        animate={active ? "visible" : "invisible"}
        variants={{
          visible: {
            opacity: 0.5,
            d:
              points.reduce(
                (acc, [x, y], idx) =>
                  `${acc}${idx === 0 ? "M" : "L"}${x} ${y} `,
                " "
              ) +
              points
                .toReversed()
                .reduce((acc, [x, y]) => `${acc}L${x} ${y} `, " ") +
              "Z",
          },
          invisible: {
            opacity: 1,
            d:
              points.reduce(
                (acc, [x, y], idx) => `${acc}${idx === 0 ? "M" : "L"}${x} 0 `,
                ""
              ) +
              points
                .toReversed()
                .reduce(
                  (acc, [x, y]) => `${acc} L${x} ${window.innerHeight} `,
                  " "
                ) +
              `Z`,
          },
        }}
      />
    </svg>
  );
}

export default function Page() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className="flex h-svh bg-red-500"
        onClick={() => setActive((a) => !a)}
      >
        <h1 className="text-3xl">
          Animation is {active ? "active" : "inactive"}{" "}
          {(Math.atan2(window.innerHeight, window.innerWidth) * 180) / Math.PI}
        </h1>
      </div>
      <Transition active={active} />
    </>
  );
}
