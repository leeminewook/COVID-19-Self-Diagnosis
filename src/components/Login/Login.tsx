import Button from "../common/Button";
import Input from "../common/Input";
import Title from "../common/Title";
import { StyledLoginContainer } from "./Login.style";

const Register = () => {
  return (
    <StyledLoginContainer>
      <Title text="로그인" />
      <Input text="비밀번호" type="password" />
      <Button text="로그인" />
    </StyledLoginContainer>
  );
};

export default Register;
