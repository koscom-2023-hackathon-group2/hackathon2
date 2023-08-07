import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.mainBlue};
  padding-top: 7rem;
  position: relative;
  box-sizing: border-box;

  .loginImg {
    width: 200px;
    height: 200px;
  }
`;

export const LoginTitle = styled.div`
  font-family: ${FONTS.Lato};
  font-size: 2rem;
  color: ${COLORS.white};
  padding-bottom: 4rem;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  color: ${COLORS.white};
  margin-top: 5rem;
  font-family: ${FONTS.NotoSansKR};

  input:focus {
    outline: none;
  }
`;

export const LoginInput = styled.input`
  border-radius: 10px;
  background-color: #ffffff4d;
  border: 1px solid ${COLORS.gray200};
  height: 2.3rem;
  font-size: 1rem;
  padding-left: 0.5rem;
  color: ${COLORS.white};
  margin: 0.5rem 0 1rem;
`;

export const LoginBtn = styled.div`
  width: 10rem;
  height: 3rem;
  border-radius: 20px;
  background-color: ${COLORS.white};

  font-family: ${FONTS.Lato};
  font-size: 20px;
  text-align: center;
  line-height: 3rem;
  margin-top: 3rem;
  cursor: pointer;

  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 30px rgba(33, 33, 33, 0.5);
  }
`;
