import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { HeaderWrapper } from "../styles/CommonEmotion";

const BackHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <KeyboardBackspaceIcon />
      </HeaderWrapper>
    </>
  );
};

export default BackHeader;
