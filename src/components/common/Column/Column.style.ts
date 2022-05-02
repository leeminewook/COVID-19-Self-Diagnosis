import styled from "styled-components";

export const StyledColumnText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  border-right: 1px solid #c1c1c1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  & > img {
    height: 100%;
  }
`;

export const StyledColumnItem = styled.div`
  background: #ffffff;
  border: 2px solid #c1c1c1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
