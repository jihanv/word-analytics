import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  return (
    <textarea
      value={text}
      onChange={(event) => {
        const newText = event.target.value;
        setText(newText);
      }}
      className="textarea"
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
}
