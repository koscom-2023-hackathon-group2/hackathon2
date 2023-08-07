import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeBox = styled.div`
  display: flex;

  .welcomeImg {
    width: 70px;
    height: 70px;
    margin-right: 0.5rem;
  }
`;

export const AddNewBox = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 20px;
  background-color: ${COLORS.sub400};
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLORS.sub100};
  font-weight: ${FONTS.Lato};
  cursor: pointer;

  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(33, 33, 33, 0.3);
  }

  .circle {
    width: 40px;
    height: 40px;
    line-height: 35px;
    text-align: center;
    font-size: 20px;
    color: ${COLORS.white};
    font-weight: 700;
    border-radius: 50%;
    background-color: ${COLORS.sub300};
    margin-bottom: 0.5rem;
  }
`;

export const AccountsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem 2rem;
  box-sizing: border-box;

  font-family: ${FONTS.NotoSansKR};

  width: 100%;
  height: 140px;
  border-radius: 20px;
  background-color: ${COLORS.mainBlue};
  margin-top: 0.5rem;

  .account-box-top {
    display: flex;
    justify-content: space-between;

    color: ${COLORS.white};
    font-weight: 700;
  }

  .account-box-bottom {
    display: flex;
    justify-content: space-between;
  }
`;

export const AccountBtn = styled.div`
  padding: 10px 20px;
  background-color: ${COLORS.sub400};
  border-radius: 0.5rem;
  cursor: pointer;
`;
