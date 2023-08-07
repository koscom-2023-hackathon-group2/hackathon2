import { styled } from "styled-components";
import { FONTS } from "../assets/fonts";
import { COLORS } from "../assets/colors";

export const MainLayoutWrapper = styled.div`
  padding: 0 1.5rem;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  height: 85px;
  display: flex;
  align-items: center;
  font-family: ${FONTS.Lato};
  font-size: 1.5rem;
`;

export const FooterWrapper = styled.div`
  height: 4rem;
  background-color: ${COLORS.mainBlue};
  font-family: ${FONTS.NotoSansKR};
  color: ${COLORS.blue300};
  margin: 0 -1.5rem;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .active {
    color: ${COLORS.white};
  }
`;

export const OutletWrapper = styled.div`
  height: calc(100% - 85px - 4rem);
`;

export const FooterBtn = styled.div`
  cursor: pointer;
`;
