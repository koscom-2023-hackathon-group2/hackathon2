import { styled } from "styled-components";
import { FONTS } from "../assets/fonts";
import { COLORS } from "../assets/colors";

export const MainLayoutWrapper = styled.div`
  padding: 0 1.5rem;
  height: 100%;

  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const HeaderWrapper = styled.div`
  height: 85px;
  display: flex;
  align-items: center;
  font-family: ${FONTS.Lato};
  font-size: 1.5rem;

  .logo {
    cursor: pointer;
  }
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

export const ModalBackground = styled.div`
  position: fixed;
  top: calc(50% - 422px);
  left: calc(50% - 195px);
  width: 390px;
  height: 844px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: opac 0.8s;
  z-index: 1000;

  @keyframes opac {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;

  width: 16rem;
  padding: 2rem;
  background-color: ${COLORS.white};
  border-radius: 10px;
  z-index: 99;
`;
