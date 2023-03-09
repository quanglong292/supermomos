import React, { memo, ReactNode } from "react";
import "@src/assets/styles/input.css"

//

interface ButtonProps {
  onClick: Function;
  children: ReactNode | string;
  className: string;
}

const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const { children, className = "", ...otherProp } = props;
  return (
    <button className={"primary-button py-2 " + className} {...otherProp}>
      {children}
    </button>
  );
});

export default Button;
