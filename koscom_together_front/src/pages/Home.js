import {
  AccountBox,
  AccountBtn,
  AccountsWrapper,
  AddNewBox,
  HomeWrapper,
  WelcomeBox,
} from "../styles/HomeEmotion";

import stockBubble from "../assets/stock_bubble.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const newClient = false; // 추후 삭제 예정

  const navigate = useNavigate();
  return (
    <>
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
            <div className="notoSansKR bold">모임 계좌 목록</div>
            <AccountsWrapper>
              <AccountBox>
                <div className="account-box-top">
                  <div>짱구네 주식모임</div>
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
            </AccountsWrapper>
          </>
        )}
        <AddNewBox>
          <div className="circle">+</div>
          <div>Add New</div>
        </AddNewBox>
      </HomeWrapper>
    </>
  );
};

export default Home;
