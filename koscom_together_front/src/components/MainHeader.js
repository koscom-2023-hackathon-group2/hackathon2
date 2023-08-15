import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

import { HeaderWrapper } from "../styles/CommonEmotion";

const MainHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <HeaderWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <span className="bold">koscom </span>Together
        </div>
        <div className="logout-btn" onClick={handleLogout}>
          Logout
        </div>
      </HeaderWrapper>
    </>
  );
};

export default MainHeader;
