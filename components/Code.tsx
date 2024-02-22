import { ReactNode } from "react";

export default function Code({ children }: { children: ReactNode }) {
  return (
    <code className="inline-block px-2 rounded border border-neutral-800 text-xl leading-8 text-neutral-600 bg-neutral-200  dark:text-neutral-400 dark:bg-neutral-900">
      {children}
    </code>
  );
}
