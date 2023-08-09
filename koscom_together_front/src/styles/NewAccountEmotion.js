import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

export const NewAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONTS.NotoSansKR};

  .title {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 1rem;
  }
`;
