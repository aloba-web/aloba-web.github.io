import React from "react";
import "./Button.scss";

type ButtonType = "primary" | "secondary";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  buttonType: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, buttonType }) => {
  return (
    <button onClick={onClick} className={`button ${buttonType}`}>
      {children}
    </button>
  );
};

export default Button;
