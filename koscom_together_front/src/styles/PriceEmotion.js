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

  cursor: pointer;

  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(33, 33, 33, 0.2);
  }

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

export const StockModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONTS.NotoSansKR};

  .stock-name {
    font-weight: 700;
  }

  .stock-info {
    font-size: 14px;
    color: ${COLORS.gray100};
    padding: 5px 0;
  }

  .stock-num {
    padding-right: 0.5rem;
  }

  .stock-belong {
    padding-left: 0.5rem;
  }

  .stock-price {
    font-size: 20px;
    font-weight: 700;
  }

  .minus {
    color: ${COLORS.minus};
  }

  .plus {
    color: ${COLORS.plus};
  }

  .number-input-box {
    align-items: center;
    padding: 1rem 0;
  }

  .number-input {
    width: 4rem;
  }

  .btn-list {
    display: flex;
  }

  .btn {
    cursor: pointer;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    color: ${COLORS.white};

    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 5px 5px 10px rgba(33, 33, 33, 0.3);
    }
  }

  .buy {
    background-color: ${COLORS.plus};
  }

  .sell {
    background-color: ${COLORS.minus};
    margin-right: 0.5rem;
  }

  .info-box {
    margin-top: 1rem;
  }
`;
