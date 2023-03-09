import React, { FC, memo, ReactNode, useMemo } from "react";

//

interface CustomTextProps {
  text: string;
  className: string;
  style?: "primary" | "secondary";
  children: ReactNode;
}

const CustomText: FC<CustomTextProps> = memo((props: CustomTextProps) => {
  const { children, className, style } = props;
  const theme = useMemo(() => {
    const primary = "bg-primary text-white";
    const secondary = "text-primary bg-secondary";
    return style === "primary" ? primary : secondary;
  }, [style]);

  return (
    <div
      className={
        "font-bold text-[48px] px-1 outline-none mt-1 " +
        theme +
        " " +
        className
      }
    >
      {children}
    </div>
  );
});

export default CustomText;
