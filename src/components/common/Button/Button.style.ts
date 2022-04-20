import styled from "styled-components";

export const StlyedButton = styled.div`
  width: 180px;
  height: 50px;
  background: #ffffff;
  border: 1px solid rgba(33, 39, 88, 0.6);
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 700;
  font-size: 20px;
  color: #222439;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  &:hover {
    background: #008ff8;
    color: #f0f0f0;
    border: none;
  }
`;
