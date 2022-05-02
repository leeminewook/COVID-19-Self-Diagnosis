import React from "react";
import Column from "../common/Column";
import {
  StyledAdminContainer,
  StyledAdminSearch,
  StyledColumnTitle,
  StyledColumnTitleLine,
  StyledTitle,
} from "./Admin.style";

const Admin = () => {
  return (
    <>
      <StyledAdminContainer>
        <StyledTitle>자가진단 관리자</StyledTitle>
        <StyledAdminSearch />
        <StyledColumnTitleLine>
          <StyledColumnTitle style={{ width: "10%" }}>이름</StyledColumnTitle>
          <StyledColumnTitle style={{ width: "20%" }}>
            생년월일
          </StyledColumnTitle>
          <StyledColumnTitle style={{ width: "20%" }}>
            1번 문항
          </StyledColumnTitle>
          <StyledColumnTitle style={{ width: "20%" }}>
            2번 문항
          </StyledColumnTitle>
          <StyledColumnTitle style={{ width: "20%" }}>
            3번 문항
          </StyledColumnTitle>
          <StyledColumnTitle style={{ width: "10%" }}>
            확진상태
          </StyledColumnTitle>
        </StyledColumnTitleLine>
        <Column
          name="이민욱"
          birth={20040214}
          first="예"
          second="검사하지않음"
          third="아니요"
          face={false}
        />
        <Column
          name="이민욱"
          birth={20040214}
          first="예"
          second="검사하지않음"
          third="아니요"
          face={true}
        />
        <Column
          name="이민욱"
          birth={20040214}
          first="예"
          second="검사하지않음"
          third="아니요"
          face={false}
        />
      </StyledAdminContainer>
    </>
  );
};

export default Admin;
