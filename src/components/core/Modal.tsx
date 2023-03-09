import useMedia from "@src/utils/hooks/useMedia";
import Image from "next/image";
import React, { memo } from "react";
import Button from "./Button";

const Modal = memo((props) => {
  const { visible, label, children, toggle } = props;

  return (
    <div
      className="bg-slate-400 bg-opacity-50 w-screen h-full z-[9999] justify-center items-center fixed top-0 left-0"
      style={{
        display: visible ? "flex" : "none",
      }}
    >
      <div className="w-[70%] bg-white rounded-md max-h-[80%]">
        <div className="flex justify-between border-b-[1px] px-4 py-2 lg:p-4">
          <div className="font-bold text-base lg:text-2xl">{label}</div>
          <Image src={useMedia("xicon", "svg")} alt="icon" onClick={toggle} />
        </div>
        {children}
        <div className="flex justify-end border-t-[1px] px-4 py-2">
          <div className="flex gap-4">
            <Button
              className="bg-transparent font-bold text-thirdary hover:bg-slate-100"
              onClick={toggle}
            >
              Close
            </Button>
            <Button className="px-4 py-1 font-bold">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
