import { useState } from "react";
import { FooterBtn, FooterWrapper } from "../styles/CommonEmotion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // 하단 네비게이션 바 추후에 구현
  const [activeNav, setActiveNav] = useState(1);

  const navigateHome = () => {
    navigate("/");
  };

  const navigateBalance = () => {
    navigate("/balance");
  };

  const navigatePrice = () => {
    navigate("/price");
  };

  const navigateHistory = () => {
    navigate("/history");
  };

  return (
    <>
      <FooterWrapper>
        <FooterBtn className="active" onClick={navigateHome}>
          홈
        </FooterBtn>
        <FooterBtn onClick={navigateBalance}>잔고</FooterBtn>
        <FooterBtn onClick={navigatePrice}>현재가</FooterBtn>
        <FooterBtn onClick={navigateHistory}>입출금</FooterBtn>
      </FooterWrapper>
    </>
  );
};

export default Footer;
