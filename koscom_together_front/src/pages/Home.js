import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AccountBox,
  AccountBtn,
  AccountsWrapper,
  AddNewBox,
  HomeWrapper,
  InvitationWrapper,
  InviteBox,
  InviteWrapper,
  WelcomeBox,
} from "../styles/HomeEmotion";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import InvitationImg from "../assets/invitation.png";

import Modal from "../components/Modal";

import stockBubble from "../assets/stock_bubble.png";
import axios from "axios";
import { API_URL } from "../config";
import { SearchInput } from "../styles/PriceEmotion";

const Home = () => {
  const percent = 12; // 추후 BE 수익률 구현 완료된 후 삭제 예정
  const navigate = useNavigate();

  const [invitationModalShow, setInvitationModalShow] = useState(false);
  const [invitationList, setInvitationList] = useState([]);
  const [activeInvitation, setActiveInvitation] = useState(null);
  const [groupList, setGroupList] = useState([]);

  const [bank, setBank] = useState("");

  const accountRef = useRef();

  // 수락하는 모달 띄우는 메소드
  const acceptInvitation = (idx) => {
    setActiveInvitation(invitationList[idx]);
    setInvitationModalShow(true);
    // 활성화된 초대 데이터 업데이트
    // setActiveInvitation
  };

  const handleAccept = () => {
    // 초대 수락하는 로직 구현하기
    axios
      .post(
        `${API_URL}/invite_agree`,
        {
          agree: "yes",
          account: activeInvitation.account,
          invitee: "jiye2",
          depositAccount: {
            nickName: "account",
            depositAccountCode: bankCode[names.indexOf(bank)],
            depositAccountId: accountRef.current.value,
          },
        },
        {
          headers: {},
        }
      )
      .then((res) => {
        console.log(res);
        console.log("초대 수락 완료.");
        setInvitationList(...getInvitationList());
        setGroupList(...getGroupAccountList());
        accountRef.current.value = "";
        setInvitationModalShow(false);
      })
      .catch((err) => {});
  };

  const handleDeny = () => {
    // 초대 거절하는 로직 구현하기
    axios
      .post(
        `${API_URL}/invite_agree`,
        {
          agree: "no",
          account: activeInvitation.account,
          invitee: "jiye1",
          depositAccount: {
            nickName: "account",
            depositAccountCode: "",
            depositAccountId: "",
          },
        },
        {
          headers: {},
        }
      )
      .then((res) => {
        console.log(res);
        console.log("초대 거절 완료.");
        setInvitationList(...getInvitationList());
        setGroupList(...getGroupAccountList());
      })
      .catch((err) => {});
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "KEB하나은행",
    "SC제일은행",
    "국민은행",
    "신한은행",
    "우리은행",
  ];

  const bankCode = ["HN", "SC", "KB", "SH", "WR"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    setBank(event.target.value);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const getInvitationList = async () => {
    await axios
      .get(`${API_URL}/invite?host=${"jiye2"}`, {
        headers: {},
      })
      .then((res) => {
        console.log(res.data);
        // 초대 목록 set함수 실행
        setInvitationList(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    async function getAndSetInviationList() {
      const data = await getInvitationList();
      console.log(data);
    }

    async function getAndSetGroupAccountList() {
      const data = await getGroupAccountList();
      console.log(data);
    }

    getAndSetInviationList();
    getAndSetGroupAccountList();
  }, []);

  return (
    <>
      <Modal
        modalShow={invitationModalShow}
        setModalShow={setInvitationModalShow}>
        <InvitationWrapper>
          <img src={InvitationImg} className="invite-img" alt="invitation" />
          <div className="group-name">
            {activeInvitation ? activeInvitation.nickName : ""}
          </div>
          <div>초대가 도착했습니다.</div>
          <div className="flexColumn acc-info-box">
            <div className="bold label">은행 선택</div>
            <FormControl sx={{ width: 239, paddingBottom: 1 }}>
              <Select
                // multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>은행 선택</em>;
                  }

                  return selected;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem disabled value="">
                  <em>은행 선택</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="bold second-label">출납 계좌</div>
            <SearchInput
              ref={accountRef}
              placeholder="계좌번호를 입력해주세요"
            />
          </div>
          <div className="flex btn-list">
            <div className="btn" onClick={handleAccept}>
              수락하기
            </div>
          </div>
        </InvitationWrapper>
      </Modal>
      <HomeWrapper>
        {groupList.length === 0 ? (
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
            <div className="notoSansKR bold account-list-title">
              모임 초대 목록
            </div>
            {invitationList.length > 0
              ? invitationList.map((invite, idx) => (
                  <>
                    <InviteWrapper>
                      <InviteBox key={invite.account}>
                        <div>{invite.nickName}</div>
                        <div className="btn-list">
                          <div
                            className="btn accept-btn"
                            onClick={() => acceptInvitation(idx)}>
                            <CheckIcon />
                          </div>
                          <div className="btn deny-btn">
                            <CloseIcon />
                          </div>
                        </div>
                      </InviteBox>
                    </InviteWrapper>
                  </>
                ))
              : null}
          </>
        ) : (
          <>
            <div className="notoSansKR bold account-list-title">
              모임 초대 목록
            </div>
            {invitationList.length > 0
              ? invitationList.map((invite, idx) => (
                  <>
                    <InviteWrapper>
                      <InviteBox key={invite.account}>
                        <div>{invite.nickName}</div>
                        <div className="btn-list">
                          <div
                            className="btn accept-btn"
                            onClick={() => acceptInvitation(idx)}>
                            <CheckIcon />
                          </div>
                          <div className="btn deny-btn">
                            <CloseIcon />
                          </div>
                        </div>
                      </InviteBox>
                    </InviteWrapper>
                  </>
                ))
              : null}
            <div className="notoSansKR bold account-list-title">
              모임 계좌 목록
            </div>
            <AccountsWrapper>
              {groupList.map((group, idx) => (
                <AccountBox key={idx} percent={percent}>
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
