import { useState, memo, useMemo } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Image from "next/image";
import useMedia from "@src/utils/hooks/useMedia";

interface TagInputProps {
  selectedTags: string[];
  onChange: (selectedTags: string[]) => void;
  options: any[];
  className: string;
}

const TagInput: React.FC<TagInputProps> = (props: TagInputProps) => {
  const { selectedTags = [], options, className, onChange } = props;
  const [parent] = useAutoAnimate();

  const cloneOptions = useMemo(
    () => options.filter((i) => !selectedTags?.includes(i)),
    [selectedTags]
  );
  const handleSelectTag = (value: any) => {
    onChange([...selectedTags, value]);
  };

  const handleRemoveTag = (tag: string) => {
    onChange(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div className={"bg-white w-fit " + className}>
      {selectedTags.length ? (
        <div
          ref={parent}
          className="flex flex-wrap items-center gap-2 rounded-3xl w-fit mb-4 cursor-pointer"
        >
          {selectedTags.map((tag) => (
            <div
              key={tag}
              className="flex items-center bg-gray-100 px-4 py-1 rounded-3xl hover:bg-[#dfd3f1"
              onClick={() => handleRemoveTag(tag)}
            >
              <span className="mr-1 text-[#942F70] text-[14px] font-medium">
                {tag}
              </span>
              <Image src={useMedia("xicon", "svg")} />
            </div>
          ))}
        </div>
      ) : (
        <span className="text-[#333333] font-medium mb-4 block opacity-80">
          Select below tags...
        </span>
      )}

      <div className="flex gap-2">
        {cloneOptions.map((i) => {
          return (
            <div
              className="flex items-center bg-gray-100 px-4 py-1 rounded-3xl cursor-pointer"
              onClick={() => handleSelectTag(i)}
            >
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(TagInput);
