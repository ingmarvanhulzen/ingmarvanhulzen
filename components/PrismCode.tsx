import Prism from "prismjs";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";

import "./prismstyles.css";

import {
  BiLogoTypescript,
  BiLogoCss3,
  BiFile,
  BiTerminal,
} from "react-icons/bi";

function Icon(props: { language: string }) {
  switch (props.language) {
    case "typescript":
      return <BiLogoTypescript className="text-blue-500" size={30} />;
    case "css":
      return <BiLogoCss3 className="text-blue-500" size={30} />;
    case "bash":
      return <BiTerminal className="text-gray-500" size={30} />;

    default:
      return <BiFile className="text-gray-500" size={30} />;
  }
}

export default function PrismCode({
  language,
  filename,
  code,
}: {
  language: string;
  filename: string;
  code: string;
}) {
  return (
    <pre className="rounded-2xl bg-neutral-800 p-4 text-neutral-300 text-sm max-w-full overflow-auto mb-auto mt-12">
      <div className="flex flex-row gap-2 items-center mb-4">
        <Icon language={language} />
        <span className="text-neutral-500">{filename}</span>
      </div>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            code.trim(),
            Prism.languages[language],
            language
          ),
        }}
      />
    </pre>
  );
}
