import React from "react";
import Button from "../common/Button";
import DotButton from "../common/DotButton";
import TextBox from "../common/TextBox";
import {
  StyledTitle,
  StyledSubTitle,
  StyledTextBox,
} from "../common/TextBox/TextBox.style";
import {
  StyledDotWrapper,
  StyledListContainer,
  StyledWrapper,
} from "./List.style";

const List = () => {
  return (
    <>
      <StyledListContainer>
        <StyledWrapper>
          <TextBox
            title="1. 학생 본인이 코로나 19 감염에 의심되는 아래의 임상증상*이 있나요?"
            subTitle="주요 임상증상: 발열(37.5℃), 기침, 호흡곤란, 오한, 근육통, 두통,
          인후통, 후각·미각소실"
            subText="※ 단 학교에서 선별진료소 검사결과(음성)를 확인 후 등교를 허용한
          경우, 또는 선천성질환·만성질환(천식 등)으로 인한 증상인 경우
          ‘아니오’를 선택하세요"
          />
          <StyledDotWrapper>
            <DotButton dotName="아니요" />
            <DotButton dotName="네" />
          </StyledDotWrapper>
        </StyledWrapper>
        <StyledWrapper>
          <TextBox
            title="2. 학생은 오늘(어제 저녁 포함) 신속항원검사(자가진단)를 실시하였나요?"
            subTitle="코로나 19 완치자의 경우, 확진일로부터 45일간 신속항원검사(자가진단)는 실시하지 않음(“검사하지 않음”으로 선택)"
            subText=""
          />
          <StyledDotWrapper>
            <DotButton dotName="검사하지 않음" />
            <DotButton dotName="음성" />
            <DotButton dotName="양성" />
          </StyledDotWrapper>
        </StyledWrapper>
        <StyledWrapper>
          <TextBox
            title="3. 학생 본인이 PCR 등 검사를 받고 그 결과를 기다리고 있나요?"
            subTitle=""
            subText=""
          />
          <StyledDotWrapper>
            <DotButton dotName="아니요" />
            <DotButton dotName="네" />
          </StyledDotWrapper>
        </StyledWrapper>
        <StyledWrapper>
          <StyledTextBox>
            <StyledTitle
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              [나의 동거인이 확진자인 경우]
            </StyledTitle>
            <StyledSubTitle style={{ fontSize: "24px" }}>
              나의 동거인이 확진되어 재택치료중인 경우 10일간 수동감시 대상이
              됩니다.
              <br />
              ▸ 확진자의 검사일(검체채취일) 기준 3일 내 PCR 검사(지정의료기관에
              방문하여 전문가용 신속항원검사 대체 가능)
              <br />
              권고 및 6~7일차 신속항원검사 권고
              <br />
              ※ 검사 결과 확인시까지 등교 중지(자택 대기) 권고
              <br />
              (동거인이 PCR 검사 또는 전문가용 신속항원검사를 받고 그 결과를
              기다리고 있는 경우를 포함하되, <br />
              감염취약시설 종사자로 선체검사를 실시한 경우는 제외
            </StyledSubTitle>
          </StyledTextBox>
        </StyledWrapper>
        <Button text="제출" />
      </StyledListContainer>
    </>
  );
};

export default List;
