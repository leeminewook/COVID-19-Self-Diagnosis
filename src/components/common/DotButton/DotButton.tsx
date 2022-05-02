import React from "react";
import {
  StyledDot,
  StyledDotButtonContainer,
  StyledDotText,
} from "./DotButton.style";

interface DotButtonProps {
  dotName: string;
}

const DotButton = ({ dotName }: DotButtonProps) => {
  return (
    <>
      <StyledDotButtonContainer>
        <StyledDot />
        <StyledDotText>{dotName}</StyledDotText>
      </StyledDotButtonContainer>
    </>
  );
};

export default DotButton;
