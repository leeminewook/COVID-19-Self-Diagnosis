import React from "react";
import { StyledSubTitle, StyledTextBox, StyledTitle } from "./TextBox.style";

interface TextBoxProps {
  title: string;
  subTitle: string;
  subText: string;
}

const TextBox = ({ title, subTitle, subText }: TextBoxProps) => {
  return (
    <>
      <StyledTextBox>
        <StyledTitle>{title}</StyledTitle>
        {subTitle && (
          <StyledSubTitle>
            {subTitle}
            {subText && <StyledSubTitle>{subText}</StyledSubTitle>}
          </StyledSubTitle>
        )}
      </StyledTextBox>
    </>
  );
};

export default TextBox;
