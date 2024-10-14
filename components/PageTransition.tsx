"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

function Slide() {
  const present = useIsPresent();
  return (
    <motion.div
      className="fixed inset-0 bg-neutral-900"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      style={{ originY: present ? 0 : 1 }}
      transition={{ duration: 0.33, ease: "easeInOut" }}
    />
  );
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  let pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <motion.div
        key={pathname}
        initial={{ y: -20, opacity: 0 }}
        exit={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.33 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
      <Slide key={pathname + "/trans/"} />
    </AnimatePresence>
  );
}
