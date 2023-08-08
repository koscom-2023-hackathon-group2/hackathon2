import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .MuiButtonBase-root {
    font-family: ${FONTS.NotoSansKR};
  }

  .MuiBox-root {
    padding: 0;
  }
`;

export const SingleHistoryWrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid ${COLORS.gray300};

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${FONTS.NotoSansKR};

  .date {
    font-size: 12px;
    color: ${COLORS.gray100};
    padding-right: 1rem;
  }
`;
