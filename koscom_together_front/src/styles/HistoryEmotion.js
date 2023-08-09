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
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${FONTS.NotoSansKR};

  cursor: pointer;

  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(33, 33, 33, 0.2);
  }

  .date {
    font-size: 12px;
    color: ${COLORS.gray100};
    padding-right: 1rem;
  }
`;

export const SingleHistoryInfoWrapper = styled.div`
  padding: 10px 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.gray300};

  .date {
    font-size: 14px;
  }
`;
