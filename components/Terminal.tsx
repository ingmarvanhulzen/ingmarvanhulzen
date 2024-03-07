import { ReactNode } from "react";
import { BiChevronRight, BiCopy, BiTerminal } from "react-icons/bi";

export default function Terminal({ children }: { children: ReactNode }) {
  return (
    <div className="rounded border border-neutral-400 text-neutral-600 bg-neutral-200 dark:text-neutral-400 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="flex text-lg border-b border-inherit pl-2 justify-between">
        <div className="inline-flex gap-2 p-2 items-center rounded-t">
          <BiTerminal />
          <span>terminal</span>
        </div>
        <button
          className="border-l border-inherit px-4 hover:bg-neutral-300 dark:hover:bg-neutral-800"
          aria-label="Copy"
        >
          <BiCopy />
        </button>
      </div>
      <div className="p-4">
        <ul className="list-inside">{children}</ul>
      </div>
    </div>
  );
}

function Item({ children }: { children: ReactNode }) {
  return (
    <li>
      <BiChevronRight className="inline mr-2 text-green-700" />
      {children}
    </li>
  );
}

Terminal.Item = Item;
