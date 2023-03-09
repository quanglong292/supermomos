"use client";
import React, { FC, memo, useEffect, useId, useState } from "react";

interface EditorHeadTextProps {
  onChange: (value: any[]) => void;
  className: string;
}

const EditorHeadText: FC<EditorHeadTextProps> = memo((props) => {
  const { onChange, className } = props;
  const [contents, setContents] = useState([
    {
      value: "Example",
      key: "1",
    },
  ]);

  const onInput = (e, key, type) => {
    if (e === "Enter") {
      setContents([
        ...contents,
        { value: "New", key: Math.random() * 99999999 },
      ]);
    }

    if (type === "input") {
      setContents(
        contents.map((i) => (key === i.key ? { ...i, value: e } : i))
      );
    }
  };

  useEffect(() => {
    if (contents.length >= 2) {
      document.getElementById(`EditorHeadText${contents[contents.length - 1].key}`)?.focus()
    }
    onChange(contents, "headText")
  }, [contents.length])

  const getInputWith = (text: string) => {
    const split = text.split("");
    return split
      .map((i) => {
        if ([" ", "1", "i", "I", "l", "t"].includes(i)) return 21;
        if (["w", "m", "~", "&", "-", "_"]) return 33
        return 30;
      })
      .reduce((a, b) => a + b, 0);
  };

  return (
    <div className={className}>
      {contents.map((i) => {
        return (  
          <input
            id={`EditorHeadText${i.key}`}
            type="text"
            onInput={(e) => onInput(e.target.value, i.key, "input")}
            onKeyDown={(e) => onInput(e.key, i.key, "keypress")}
            className={`bg-[#942F70] text-white font-bold text-[48px] px-1 outline-none mt-1 block`}
            key={i.key}
            value={i.value}
            maxLength={25}
            style={{
              width: getInputWith(i.value),
              // width: "fit-content",
            }}
          />
        );
      })}
    </div>
  );
});

export default EditorHeadText;
