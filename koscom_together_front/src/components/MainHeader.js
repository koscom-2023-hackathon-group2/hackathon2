import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

import { HeaderWrapper } from "../styles/CommonEmotion";

const MainHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <div>
          <span className="bold">koscom </span>Together
        </div>
      </HeaderWrapper>
    </>
  );
};

export default MainHeader;
