import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AccountBox,
  AccountBtn,
  AccountsWrapper,
  AddNewBox,
  HomeWrapper,
  InvitationWrapper,
  WelcomeBox,
} from "../styles/HomeEmotion";

import InvitationImg from "../assets/invitation.png";

import Modal from "../components/Modal";

import stockBubble from "../assets/stock_bubble.png";
import axios from "axios";
import { API_URL } from "../config";

const Home = () => {
  const newClient = false; // 추후 삭제 예정

  const navigate = useNavigate();

  const [invitationModalShow, setInvitationModalShow] = useState(false);
  const [groupList, setGroupList] = useState([]);

  const getGroupAccountList = async () => {
    await axios
      .get(`${API_URL}/group-account/${"jiye1"}`, {
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

  return (
    <>
      <Modal
        modalShow={invitationModalShow}
        setModalShow={setInvitationModalShow}>
        <InvitationWrapper>
          <img src={InvitationImg} className="invite-img" alt="invitation" />
          <div className="group-name">코스콤 47기 동기들</div>
          <div>초대가 도착했습니다.</div>
          <div className="flex btn-list">
            <div className="accept-btn btn">수락</div>
            <div className="deny-btn btn">거절</div>
          </div>
        </InvitationWrapper>
      </Modal>
      <HomeWrapper>
        {newClient ? (
          <>
            <WelcomeBox>
              <img src={stockBubble} className="welcomeImg" alt="stockBubble" />
              <div className="notoSansKR">
                <span className="lato">
                  <span className="bold">koscom </span>Together
                </span>{" "}
                를 통해
                <br /> 친구들과 함께 주식에 투자해보세요 !!
              </div>
            </WelcomeBox>
          </>
        ) : (
          <>
            <div className="notoSansKR bold account-list-title">
              모임 계좌 목록
            </div>
            <AccountsWrapper>
              {groupList.map((group, idx) => (
                <AccountBox key={idx}>
                  <div className="account-box-top">
                    <div>{group.nickname}</div>
                    <div>-12%</div>
                  </div>
                  <div className="account-box-bottom">
                    <AccountBtn onClick={() => navigate("/asset")}>
                      자산
                    </AccountBtn>
                    <AccountBtn onClick={() => navigate("/stockHistory")}>
                      거래 내역
                    </AccountBtn>
                    <AccountBtn>채우기</AccountBtn>
                  </div>
                </AccountBox>
              ))}
            </AccountsWrapper>
          </>
        )}
        <AddNewBox onClick={() => navigate("/new")}>
          <div className="circle">+</div>
          <div>Add New</div>
        </AddNewBox>
      </HomeWrapper>
    </>
  );
};

export default Home;
