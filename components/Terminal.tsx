import { ReactNode } from "react";
import { BiChevronRight, BiCopy, BiTerminal } from "react-icons/bi";

export default function Terminal({ children }: { children: ReactNode }) {
  return (
    <div className="bg-neutral-950 rounded border border-neutral-800 text-neutral-400">
      <div className="flex text-xl border-b border-neutral-800 pl-2 justify-between">
        <div className="inline-flex gap-2 p-2 items-center rounded-t">
          <BiTerminal />
          <span>terminal</span>
        </div>
        <button
          className="border-l border-neutral-800 px-4 hover:bg-neutral-800"
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
