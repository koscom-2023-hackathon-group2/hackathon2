import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .MuiButtonBase-root {
    font-family: ${FONTS.NotoSansKR};
  }

  .MuiBox-root {
    padding: 0;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;

  .search-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    border-radius: 10px;
    background-color: ${COLORS.mainBlue};
    color: ${COLORS.white};
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid ${COLORS.gray200};
  margin-right: 0.5rem;
  font-family: ${FONTS.NotoSansKR};

  &:focus {
    outline: none;
  }
`;

export const SinglePriceWrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid ${COLORS.gray300};
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${FONTS.NotoSansKR};

  .stock-info-right {
    display: flex;
  }

  .stock-percent {
    padding-left: 1rem;
    display: flex;
  }

  .minus {
    color: ${COLORS.minus};
  }

  .plus {
    color: ${COLORS.plus};
  }
`;
