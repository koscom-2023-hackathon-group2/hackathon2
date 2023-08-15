import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .account-list-title {
    font-size: 18px;
  }
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
  height: 150px;
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
  /* max-height: 300px; */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InviteWrapper = styled.div`
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
  height: 150px;
  border-radius: 20px;
  background-color: ${COLORS.mainBlue};
  margin-top: 0.5rem;

  .account-box-top {
    display: flex;
    justify-content: space-between;

    color: ${COLORS.white};
    font-weight: 700;
  }

  .account-box-middle {
    display: flex;
    align-items: center;
  }

  .white {
    color: ${COLORS.white};
  }

  .right {
    justify-content: end;
  }

  .account-box-bottom {
    display: flex;
    justify-content: flex-start;
  }
`;

export const AccountBtn = styled.div`
  padding: 10px 20px;
  background-color: ${COLORS.sub400};
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  font-family: ${FONTS.NotoSansKR};

  .group-name {
    font-size: 20px;
    font-weight: 700;
  }

  .invite-img {
    width: 5rem;
    margin-bottom: 1rem;
  }

  .btn-list {
    padding-top: 1rem;
  }

  .btn {
    font-size: 1rem;
    padding: 5px 12px;
    color: ${COLORS.white};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${COLORS.mainBlue};

    margin: 0 0.5rem;

    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 5px 10px rgba(33, 33, 33, 0.3);
    }
  }

  .acc-info-box {
    padding: 2rem 0 1rem;
  }

  .acc-info-box input {
    margin-top: 0.5rem;
  }

  .label {
    padding-bottom: 0.5rem;
  }

  .second-label {
    padding-top: 0.5rem;
  }
`;

export const InviteBox = styled.div`
  display: flex;
  background-color: ${COLORS.black};
  border-radius: 20px;
  padding: 15px 20px;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
  font-family: ${FONTS.NotoSansKR};
  font-weight: 700;
  color: ${COLORS.white};

  &:last-child {
    margin-bottom: 1rem;
  }

  .btn-list {
    display: flex;
    color: ${COLORS.white};
  }

  .btn {
    border-radius: 50%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5rem;
    cursor: pointer;

    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 5px 10px rgba(33, 33, 33, 0.3);
    }
  }

  .btn svg {
    width: 25px;
    height: 25px;
  }

  .accept-btn {
    background-color: ${COLORS.mainBlue};
  }

  .deny-btn {
    background-color: ${COLORS.plus};
  }
`;
