"use client";
import useMedia from "@src/utils/hooks/useMedia";
import Image from "next/image";
import { useRef, useState } from "react";

interface UploadInputProps {
  onUpload: (file: any) => void;
  type?: "banners";
}

const UploadInput: React.FC<UploadInputProps> = ({
  type,
  onUpload,
  onClick,
}) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    const files: File[] = [];
    const fileList = e.dataTransfer.files;

    for (let i = 0; i < fileList.length; i++) {
      files.push(fileList.item(i)!);
    }

    onUpload(URL.createObjectURL(files[0]));
  };

  const clickUpload = () => {
    onClick();
  };

  return (
    <div
      className={`h-[445px] w-full flex items-center justify-center border-2 border-dashed border-white p-4 rounded-tr-[50px] rounded-bl-[50px] bg-gray-200 bg-opacity-20 cursor-pointer`}
      style={{
        backgroundColor: dragging ? "#e3e3e3bf" : "",
      }}
      onClick={clickUpload}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="text-center">
        <div className="flex gap-2">
          <Image src={useMedia("picture", "svg")} />
          <span className="text-[#14597A] text-xl font-semibold">
            Add a banner
          </span>
        </div>
        <div className="text-[#14597A] font-semibold">
          {dragging ? "Drop" : "(Drop file or click)"}
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/png, image/jpeg"
      />
    </div>
  );
};

export default UploadInput;
