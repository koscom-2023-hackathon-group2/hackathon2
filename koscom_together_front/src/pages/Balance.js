// 잔고 화면
import { useNavigate } from "react-router-dom";

import {
  AccountListContainer,
  BalanceWrapper,
  TotalPriceContainer,
} from "../styles/BalanceEmotion";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { AccountBox, AccountBtn } from "../styles/HomeEmotion";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const Balance = () => {
  const totalPrice = 39050070; // 추후 삭제 예정
  const diffPrice = 3382170; // 추후 삭제 예정
  const diffPercent = 80.42; // 추후 삭제 예정

  const navigate = useNavigate();

  const [groupList, setGroupList] = useState([]);

  const getGroupAccountList = async () => {
    await axios
      .get(`${API_URL}/group-account/${"jiye3"}`, {
        headers: {},
      })
      .then((res) => {
        console.log(res.data);
        setGroupList(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    async function getAndSetGroupAccountList() {
      const data = await getGroupAccountList();
      console.log(data);
    }

    getAndSetGroupAccountList();
  }, []);

  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <BalanceWrapper>
        <TotalPriceContainer>
          <div>{JSON.parse(localStorage.getItem("user")).id} 님의 총 잔고</div>
          <div>
            <span className="total-price">{totalPrice.toLocaleString()}원</span>
          </div>
        </TotalPriceContainer>
        <AccountListContainer>
          {groupList.length === 0 ? (
            <div className="no-account">공동 계좌 목록이 없습니다.</div>
          ) : (
            groupList.map((group, idx) => (
              <AccountBox key={idx} percent={group.stockAsset}>
                <div className="account-box-top">
                  <div>{group.nickname}</div>
                </div>
                <div className="accont-box-middle">
                  <div className="flex white right">
                    {(group.cashAsset + group.stockAsset).toLocaleString()}원
                  </div>
                </div>
                <div className="account-box-bottom">
                  <AccountBtn
                    onClick={() =>
                      navigate(`/asset/${idx}`, {
                        state: {
                          accountNum: group.realAccountId,
                          fakeAccount: group.fakeAccountId,
                          accountName: group.nickname,
                        },
                      })
                    }>
                    자산
                  </AccountBtn>
                  <AccountBtn
                    onClick={() =>
                      navigate(`/stockHistory/${idx}`, {
                        state: {
                          accountNum: group.realAccountId,
                          accountName: group.nickname,
                        },
                      })
                    }>
                    거래 내역
                  </AccountBtn>
                  <AccountBtn>채우기</AccountBtn>
                </div>
              </AccountBox>
            ))
          )}
        </AccountListContainer>
      </BalanceWrapper>
    </>
  );
};

export default Balance;
