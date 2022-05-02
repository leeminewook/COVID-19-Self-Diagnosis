import React from "react";
import { StyledColumnItem, StyledColumnText } from "./Column.style";
import happy from "../../../assets/img/smiling-face.png";
import angry from "../../../assets/img/angry.png";

interface ColumnProps {
  name: string;
  birth: number;
  first: string;
  second: string;
  third: string;
  face: boolean;
}

const Column = ({ name, birth, first, second, third, face }: ColumnProps) => {
  return (
    <>
      <StyledColumnItem>
        <StyledColumnText style={{ width: "10%" }}>{name}</StyledColumnText>
        <StyledColumnText style={{ width: "20%" }}>{birth}</StyledColumnText>
        <StyledColumnText style={{ width: "20%" }}>{first}</StyledColumnText>
        <StyledColumnText style={{ width: "20%" }}>{second}</StyledColumnText>
        <StyledColumnText style={{ width: "20%" }}>{third}</StyledColumnText>
        {face ? (
          <StyledColumnText style={{ width: "10%", border: "none" }}>
            <img src={happy} alt="" />
          </StyledColumnText>
        ) : (
          <StyledColumnText style={{ width: "10%", border: "none" }}>
            <img src={angry} alt="" />
          </StyledColumnText>
        )}
      </StyledColumnItem>
    </>
  );
};

export default Column;
