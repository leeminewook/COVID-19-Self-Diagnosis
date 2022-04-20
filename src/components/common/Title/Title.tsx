import React from "react";
import { StyledTitle } from "./Title.style";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <>
      <StyledTitle>{text}</StyledTitle>
    </>
  );
};

export default Title;
