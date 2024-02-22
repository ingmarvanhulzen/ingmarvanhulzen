import Prism from "prismjs";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";

import "./prismstyles.css";

export default function PrismCode({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  const text = code.trim();

  return (
    <div className="flex">
      <ul className="px-4 text-neutral-500">
        {text.split("\n").map((_, lineNumber) => (
          <li key={lineNumber}>
            <code>{lineNumber + 1}</code>
          </li>
        ))}
      </ul>
      <pre
        className={`max-w-full overflow-auto language-${language}`}
        tabIndex={0}
      >
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(text, Prism.languages[language], language),
          }}
        />
      </pre>
    </div>
  );
}
