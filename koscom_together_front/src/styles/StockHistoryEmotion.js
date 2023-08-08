import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

export const StockHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .MuiButtonBase-root {
    font-family: ${FONTS.NotoSansKR};
  }

  .MuiBox-root {
    padding: 0;
  }
`;

export const StockHistoryTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  padding-bottom: 2rem;
  font-family: ${FONTS.NotoSansKR};

  .account-num {
    font-size: 1rem;
    color: ${COLORS.gray100};
    text-decoration: underline;
  }

  .group-name {
    padding: 0.5rem 0;
  }
`;
