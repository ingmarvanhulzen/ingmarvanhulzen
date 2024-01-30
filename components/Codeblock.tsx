import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

import {
  BiLogoTypescript,
  BiLogoCss3,
  BiFile,
  BiTerminal,
} from "react-icons/bi";

const codeStyle = prism;

codeStyle['code[class*="language-"]']["background"] = "inherit";
codeStyle['pre[class*="language-"]']["background"] = "inherit";

function Icon(props: { language: string }) {
  switch (props.language) {
    case "typescript":
      return <BiLogoTypescript className="text-blue-500" size={30} />;
    case "css":
      return <BiLogoCss3 className="text-blue-500" size={30} />;
    case "terminal":
      return <BiTerminal className="text-gray-500" size={30} />;

    default:
      return <BiFile className="text-gray-500" size={30} />;
  }
}

export default function Codeblock(props: {
  filename: string;
  language: string;
  code: string;
}) {
  return (
    <div className="bg-neutral-800 rounded-2xl overflow-hidden mb-auto mt-12">
      <div className="p-3 flex flex-row gap-2 items-center">
        <Icon language={props.language} />
        <span className="text-gray-500">{props.filename}</span>
      </div>
      <SyntaxHighlighter
        language={
          props.language == "typescript" ? "typescript" : props.language
        }
        lineNumberStyle={{ opacity: 0.3 }}
        style={codeStyle}
        showLineNumbers
        customStyle={{
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
        }}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}
