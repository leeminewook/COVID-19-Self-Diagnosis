import styled from "styled-components";

export const StyledInputTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: #000000;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 22px;
`;

export const StyledInput = styled.input`
  background: #ffffff;
  box-shadow: 0px 0px 8px 2px rgba(33, 39, 88, 0.25);
  border-radius: 8px;
  padding: 0px 15px;
  font-weight: 700;
  font-size: 20px;
  color: #222439;
  width: 280px;
  height: 45px;
  border: none;
  &:focus {
    box-shadow: 0px 0px 8px 2px rgba(0, 143, 248, 0.25);
    border-radius: 8px;
    outline: none;
  }
`;
