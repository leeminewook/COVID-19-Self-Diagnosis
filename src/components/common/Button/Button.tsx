import React from "react";
import { StlyedButton } from "./Button.style";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <StlyedButton>{text}</StlyedButton>;
};

export default Button;
