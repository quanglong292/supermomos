import Image from "next/image";
import React, { memo } from "react";

const IconText = memo((props: any) => {
  const { children, prefix, width, height, className } = props;
  return (
    <div className="flex items-center gap-3">
      <Image
        src={prefix}
        alt="DateTime"
        width={width ?? 35}
        height={height ?? 35}
      />
      <p className={"m-0 text-thirdary text-[24px] font-bold " + className}>
        {children}
      </p>
    </div>
  );
});

export default IconText;
