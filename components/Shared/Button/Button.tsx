import React, { ReactNode } from "react";
import css from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  return (
    <button className={css.button} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
