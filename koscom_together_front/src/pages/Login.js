import {
  LoginBox,
  LoginBtn,
  LoginInput,
  LoginTitle,
  LoginWrapper,
} from "../styles/LoginEmotion";
import stockBubble from "../assets/stock_bubble.png";

const Login = () => {
  return (
    <>
      <LoginWrapper>
        <LoginTitle>
          <span className="bold">koscom</span> Together
        </LoginTitle>
        <img src={stockBubble} className="loginImg" alt="loginImg" />
        <LoginBox>
          <div>아이디</div>
          <LoginInput />
          <div>비밀번호</div>
          <LoginInput type="password" />
        </LoginBox>
        <LoginBtn>Login</LoginBtn>
      </LoginWrapper>
    </>
  );
};

export default Login;
