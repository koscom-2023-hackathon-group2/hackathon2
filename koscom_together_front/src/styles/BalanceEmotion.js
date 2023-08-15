import { styled } from "styled-components";
import { FONTS } from "../assets/fonts";
import { COLORS } from "../assets/colors";

export const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${FONTS.NotoSansKR};
`;

export const TotalPriceContainer = styled.div`
  width: calc(100% + 3rem);
  padding: 3rem 0;
  background-color: ${COLORS.mainBlue};
  color: ${COLORS.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  .total-price {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .percent {
    padding-left: 0.5rem;
  }
`;

export const AccountListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  overflow-y: scroll;

  width: 100%;
  height: 32rem;

  &::-webkit-scrollbar {
    display: none;
  }

  .no-account {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  .account-box-bottom {
    display: flex;
    justify-content: flex-start;
  }
`;
