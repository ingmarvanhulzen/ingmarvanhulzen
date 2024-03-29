"use client";
import { useState } from "react";
import {
  BiLogoTypescript,
  BiLogoCss3,
  BiFile,
  BiTerminal,
  BiCopy,
  BiLogoReact,
} from "react-icons/bi";

import PrismCode from "./PrismCode";

interface IDEFile {
  name: string;
  language: string;
  contents: string;
}

function Icon(props: { language: string }) {
  switch (props.language) {
    case "typescript":
      return <BiLogoTypescript className="text-blue-500" size={30} />;
    case "tsx":
      return <BiLogoReact className="text-blue-500" size={30} />;
    case "css":
      return <BiLogoCss3 className="text-blue-500" size={30} />;
    case "bash":
      return <BiTerminal className="text-gray-500" size={30} />;

    default:
      return <BiFile className="text-gray-500" size={30} />;
  }
}

export default function IDE({ files }: { files: IDEFile[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded border border-neutral-400 text-neutral-600 bg-neutral-200 dark:text-neutral-400 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="flex text-lg border-b border-inherit pl-2 justify-between">
        <div>
          {files.map(({ name, language }, index) => (
            <button
              key={name}
              className="inline-flex gap-2 p-2 items-center rounded-t hover:bg-neutral-300 dark:hover:bg-neutral-800"
              onClick={() => setActive(index)}
            >
              <Icon language={language} />
              <span>{name}</span>
            </button>
          ))}
        </div>

        <button
          className="border-l border-inherit px-4 hover:bg-neutral-300 dark:hover:bg-neutral-800"
          aria-label="Copy"
        >
          <BiCopy />
        </button>
      </div>
      <div className="py-4">
        <PrismCode
          language={files[active].language}
          code={files[active].contents}
        />
      </div>
    </div>
  );
}
