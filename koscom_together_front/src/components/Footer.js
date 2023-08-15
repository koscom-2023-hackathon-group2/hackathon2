import { useState } from "react";
import { FooterBtn, FooterWrapper } from "../styles/CommonEmotion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // 하단 네비게이션 바 추후에 구현
  const [activeNav, setActiveNav] = useState(1);

  const navigateHome = () => {
    setActiveNav(1);
    navigate("/");
  };

  const navigateBalance = () => {
    setActiveNav(2);
    navigate("/balance");
  };

  const navigatePrice = () => {
    setActiveNav(3);
    navigate("/price");
  };

  const navigateHistory = () => {
    setActiveNav(4);
    navigate("/history");
  };

  return (
    <>
      <FooterWrapper>
        <FooterBtn
          className={activeNav === 1 ? "active" : ""}
          onClick={navigateHome}>
          홈
        </FooterBtn>
        <FooterBtn
          className={activeNav === 2 ? "active" : ""}
          onClick={navigateBalance}>
          잔고
        </FooterBtn>
        <FooterBtn
          className={activeNav === 3 ? "active" : ""}
          onClick={navigatePrice}>
          현재가
        </FooterBtn>
        {/* <FooterBtn
          className={activeNav === 4 ? "active" : ""}
          onClick={navigateHistory}>
          입출금
        </FooterBtn> */}
      </FooterWrapper>
    </>
  );
};

export default Footer;
