import Button from "../common/Button";
import Input from "../common/Input";
import Title from "../common/Title";
import { StyledRegisterContainer } from "./Register.style";

const Register = () => {
  return (
    <StyledRegisterContainer>
      <Title text="회원가입" />
      <Input text="이름" type="text" />
      <Input text="생년월일" type="text" />
      <Input text="비밀번호" type="password" />
      <Button text="회원가입" />
    </StyledRegisterContainer>
  );
};

export default Register;
