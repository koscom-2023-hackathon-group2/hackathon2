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
  padding: 0.5rem 0.7rem;
  border-radius: 10px;
  border: 1px solid ${COLORS.gray200};
  margin-right: 0.5rem;
  font-family: ${FONTS.NotoSansKR};
  font-size: 1rem;

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
    width: 5rem;
  }

  .minus {
    color: ${COLORS.minus};
  }

  .plus {
    color: ${COLORS.plus};
  }

  .zero {
    width: 100%;
    color: ${COLORS.gray100};
    display: flex;
    justify-content: right;
  }

  .name {
    padding-right: 1rem;
  }
`;

export const StockModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONTS.NotoSansKR};

  .stock-name {
    font-weight: 700;
  }

  .label {
    padding-bottom: 0.5rem;
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

  .none {
    color: ${COLORS.gray100};
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
    padding-top: 1rem;
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

export const InviteModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${FONTS.NotoSansKR};

  .invite-modal-title {
    font-size: 20px;
    font-weight: 700;
  }

  .invite-input-box {
    padding-top: 2rem;
  }

  .label {
    margin-bottom: 0.5rem;
  }

  .invite-btn {
    font-size: 1rem;
    background-color: ${COLORS.mainBlue};
    padding: 5px 10px;
    color: ${COLORS.white};
    border-radius: 10px;
    cursor: pointer;
    margin-top: 2rem;

    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 5px 10px rgba(33, 33, 33, 0.3);
    }
  }
`;

export const StockBox = styled.div`
  height: 35rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
