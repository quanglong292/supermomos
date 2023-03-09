import Image, { ImageProps } from "next/image";
import React, { FC, memo, SVGProps } from "react";
import "@src/assets/styles/input.css";

// Components
import TagInput from "./TagInput";
import CheckInput from "./CheckInput";

// Utils
import useMedia from "@src/utils/hooks/useMedia";

//

interface InputProps {
  onChange: Function;
  type: string;
  placeholder: string;
  className: string;
  width: number | "full";
  height: number | "full";
  fontSize?: number;
  prefix?: string | ImageProps | SVGProps<any>;
}

const TextArea = (props: InputProps) => {
  const { height, width, fontSize, ...otherProp } = props;
  return (
    <textarea
      className="primary-input h-auto"
      rows={10}
      style={{
        height: height === "full" ? "100%" : height,
        width: width === "full" ? "100%" : width,
        fontSize: fontSize || 16,
      }}
      {...otherProp}
    ></textarea>
  );
};

const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    type,
    onChange,
    prefix,
    placeholder,
    className,
    height,
    width,
    fontSize,
    ...otherProp
  } = props;

  // Other inputs
  if (type === "textarea") return <TextArea {...props} />;
  if (type === "tags") {
    return <TagInput {...props} selectedTags={props?.data?.[props?.field]} />;
  }
  if (["checkbox", "radio"].includes(type)) return <CheckInput {...props} />;  

  return (
    <div className={"flex items-center gap-2 " + className}>
      {prefix && (
        <Image
          src={useMedia(prefix, "svg")}
          className="h-[85%] items-center justify-center"
        />
      )}
      <input
        type={type ?? "text"}
        className="primary-input"
        placeholder={placeholder ?? ""}
        style={{
          height: height === "full" ? "100%" : height,
          width: width === "full" ? "100%" : width,
          fontSize: fontSize || 16,
        }}
        onInput={(e) => onChange(e.target.value)}
        defaultValue={props.data?.[props.field]}
        value={props.data?.[props.field]}
        {...otherProp}
      />
    </div>
  );
});

export default Input;
