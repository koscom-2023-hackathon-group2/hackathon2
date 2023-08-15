import { useNavigate } from "react-router-dom";

import {
  LoginBox,
  LoginBtn,
  LoginInput,
  LoginTitle,
  LoginWrapper,
} from "../styles/LoginEmotion";

import stockBubble from "../assets/stock_bubble.png";
import { API_URL } from "../config";
import { useRef } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const idInputRef = useRef();
  const pwInputRef = useRef();

  const handleLogin = () => {
    axios
      .get(
        `${API_URL}/login?id=${idInputRef.current.value}&pw=${pwInputRef.current.value}`,
        {
          headers: {},
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("로그인 완료!");
        navigate("/");
      })
      .catch((err) => {});
  };

  return (
    <>
      <LoginWrapper>
        <LoginTitle>
          <span className="bold">koscom</span> Together
        </LoginTitle>
        <img src={stockBubble} className="loginImg" alt="loginImg" />
        <LoginBox>
          <div>아이디</div>
          <LoginInput ref={idInputRef} />
          <div>비밀번호</div>
          <LoginInput ref={pwInputRef} type="password" />
        </LoginBox>
        <LoginBtn onClick={handleLogin}>Login</LoginBtn>
      </LoginWrapper>
    </>
  );
};

export default Login;
