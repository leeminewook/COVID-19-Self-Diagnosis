import React from "react";
import {
  StyledInput,
  StyledInputContainer,
  StyledInputTitle,
} from "./Input.style";

interface InputProps {
  text: string;
  type: string;
}

const Input = ({ text, type }: InputProps) => {
  return (
    <StyledInputContainer>
      <StyledInputTitle>{text}</StyledInputTitle>
      <StyledInput type={type} />
    </StyledInputContainer>
  );
};

export default Input;
