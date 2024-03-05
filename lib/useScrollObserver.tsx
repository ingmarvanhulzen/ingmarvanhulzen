import { useLayoutEffect, useRef } from "react";

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

export default useScrollObserver;
