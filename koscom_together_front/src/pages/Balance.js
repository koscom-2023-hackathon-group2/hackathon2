// 잔고 화면

import {
  AccountListContainer,
  BalanceWrapper,
  TotalPriceContainer,
} from "../styles/BalanceEmotion";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { AccountBox, AccountBtn } from "../styles/HomeEmotion";
import { useNavigate } from "react-router-dom";

const Balance = () => {
  const totalPrice = 39050070; // 추후 삭제 예정
  const diffPrice = 3382170; // 추후 삭제 예정
  const diffPercent = 80.42; // 추후 삭제 예정

  const navigate = useNavigate();

  return (
    <>
      <BalanceWrapper>
        <TotalPriceContainer>
          <div>
            <span className="total-price">{totalPrice.toLocaleString()}원</span>
          </div>
          <div>
            <span className="flex">
              <ArrowDropUpIcon />
              <span>{diffPrice.toLocaleString()}원</span>
              <span className="percent">
                {diffPercent >= 0 ? `(+${diffPercent}%)` : `(${diffPercent}%)`}
              </span>
            </span>
          </div>
        </TotalPriceContainer>
        <AccountListContainer>
          <AccountBox percent={-12}>
            <div className="account-box-top">
              <div>짱구네 주식모임</div>
              <div>-12%</div>
            </div>
            <div className="account-box-bottom">
              <AccountBtn onClick={() => navigate("/asset")}>자산</AccountBtn>
              <AccountBtn onClick={() => navigate("/stockHistory")}>
                거래 내역
              </AccountBtn>
              <AccountBtn>채우기</AccountBtn>
            </div>
          </AccountBox>
          <AccountBox percent={22}>
            <div className="account-box-top">
              <div>코스콤 47기 동기들</div>
              <div>22%</div>
            </div>
            <div className="account-box-bottom">
              <AccountBtn onClick={() => navigate("/asset")}>자산</AccountBtn>
              <AccountBtn onClick={() => navigate("/stockHistory")}>
                거래 내역
              </AccountBtn>
              <AccountBtn>채우기</AccountBtn>
            </div>
          </AccountBox>
          <AccountBox percent={22}>
            <div className="account-box-top">
              <div>가족 주식 계좌</div>
              <div>36%</div>
            </div>
            <div className="account-box-bottom">
              <AccountBtn onClick={() => navigate("/asset")}>자산</AccountBtn>
              <AccountBtn onClick={() => navigate("/stockHistory")}>
                거래 내역
              </AccountBtn>
              <AccountBtn>채우기</AccountBtn>
            </div>
          </AccountBox>
          <AccountBox percent={-12}>
            <div className="account-box-top">
              <div>흰둥이네</div>
              <div>-12%</div>
            </div>
            <div className="account-box-bottom">
              <AccountBtn onClick={() => navigate("/asset")}>자산</AccountBtn>
              <AccountBtn onClick={() => navigate("/stockHistory")}>
                거래 내역
              </AccountBtn>
              <AccountBtn>채우기</AccountBtn>
            </div>
          </AccountBox>
        </AccountListContainer>
      </BalanceWrapper>
    </>
  );
};

export default Balance;
