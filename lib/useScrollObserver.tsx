import { useLayoutEffect, useRef } from "react";

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
}

export default useScrollObserver;
