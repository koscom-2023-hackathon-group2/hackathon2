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
    padding-bottom: 2rem;
  }

  .stepper-body {
    padding: 0 0.5rem;
  }

  .finish-txt {
    font-family: ${FONTS.NotoSansKR};
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NewAccountDescBox = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  background-color: ${COLORS.gray400};
  font-family: ${FONTS.NotoSansKR};

  display: flex;
  flex-direction: column;

  .desc-title {
    font-weight: 700;
    padding-bottom: 1rem;
  }

  .checkBox {
    padding-top: 1rem;
    justify-content: center;
    width: 100%;
  }

  .desc-content {
    padding-top: 1rem;
    font-size: 14px;
  }
`;

export const NewAccountContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONTS.NotoSansKR};
  padding-top: 1.5rem;

  .content-title {
    font-weight: 700;
    padding-bottom: 0.5rem;
  }

  .title-container {
    padding-top: 1.5rem;
  }
`;

export const ConnectingAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONTS.NotoSansKR};

  .input-container {
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
  }
`;
