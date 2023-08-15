// 자산 화면
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  AssetGraphContainer,
  AssetInfoBox,
  AssetTitleContainer,
  AssetWrapper,
  StockAssetContainer,
} from "../styles/AssetEmotion";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { dummyMembers, dummyStockAssets } from "../assets/dummyData";
import Modal from "../components/Modal";
import {
  InviteModalWrapper,
  SearchInput,
  StockModalWrapper,
} from "../styles/PriceEmotion";
import SingleAsset from "../components/SingleAsset";
import SingleMember from "../components/SingleMember";
import axios from "axios";
import { API_URL } from "../config";

ChartJS.register(ArcElement, Tooltip, Legend);

const Asset = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  // const cashAmount = 2200000; // 추후 삭제 예정
  // const stockAmount = 1022190; // 추후 삭제 예정
  const stocks = dummyStockAssets; // 추후 삭제 예정
  const members = dummyMembers; // 추후 삭제 예정

  const [stockModalShow, setStockModalShow] = useState(false);
  const [inviteModalShow, setInviteModalShow] = useState(false);

  const [priceModalData, setPriceModalData] = useState(dummyStockAssets[0]);

  const [cashAmount, setCashAmount] = useState(0);
  const [stockAmount, setStockAmount] = useState(0);
  const [stockData, setStockData] = useState([]);

  const nameRef = useRef();
  const idRef = useRef();

  const data = {
    labels: ["현금", "주식"],
    datasets: [
      {
        label: "",
        data: [cashAmount, stockAmount],
        backgroundColor: ["rgba(227, 110, 133, 1)", "rgba(233, 162, 85, 1)"],
        borderColor: ["rgba(227, 110, 133, 1)", "rgba(233, 162, 85, 1)"],
        borderWidth: 1,
      },
    ],
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickInviteBtn = () => {
    setInviteModalShow(true);
  };

  const handleInvitation = () => {
    const name = nameRef.current.value;
    const id = nameRef.current.value;

    axios
      .post(`${API_URL}/invite`, {
        // 로그인 연결 후 hostId 수정 예정
        hostId: user.id,
        nickName: name,
        account: state.fakeAccount,
        inviteeId: id,
      })
      .then((res) => {
        console.log(res);
        alert("구성원 초대가 완료되었습니다.");
        nameRef.current.value = "";
        idRef.current.value = "";
        setInviteModalShow(false);
      })
      .catch((err) => {});
  };

  const getAssetData = async () => {
    await axios
      .get(`${API_URL}/group-account/${state.accountNum}/holding`, {
        headers: {},
      })
      .then((res) => {
        console.log(res.data);
        setCashAmount(res.data.cashAsset);
        let totalStockPrice = 0;
        for (let stock of res.data.stockAssets) {
          totalStockPrice += stock.totalPrice;
        }
        setStockAmount(totalStockPrice);
        setStockData(res.data.stockAssets);
        // 그룹 잔고 세팅 구현하기
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // accountNum
    async function getAndSetAssetData() {
      const data = await getAssetData();
      console.log(data);
    }

    getAndSetAssetData();
  }, []);

  return (
    <>
      <Modal modalShow={inviteModalShow} setModalShow={setInviteModalShow}>
        <InviteModalWrapper>
          <div className="invite-modal-title">구성원 초대하기</div>
          <div className="flexColumn invite-input-box">
            <div className="bold label">이름</div>
            <SearchInput ref={nameRef} placeholder="이름을 입력해주세요" />
          </div>
          <div className="flexColumn invite-input-box">
            <div className="bold label">아이디</div>
            <SearchInput ref={idRef} placeholder="아이디를 입력해주세요" />
          </div>
          <div className="invite-btn" onClick={handleInvitation}>
            초대하기
          </div>
        </InviteModalWrapper>
      </Modal>

      <AssetWrapper>
        <AssetTitleContainer>
          {/* <div className="account-num">33-29-3847398</div> */}
          <div className="bold group-name">{state.accountName}</div>
          <div className="flex asset-title-sub-box">
            <div>자산 현황</div>
            <div className="invite-btn" onClick={onClickInviteBtn}>
              초대하기
            </div>
          </div>
        </AssetTitleContainer>
        <AssetGraphContainer>
          <Doughnut data={data} />
        </AssetGraphContainer>
        <AssetInfoBox>
          <div>
            <span className="bold">현금:</span> {cashAmount.toLocaleString()}원
          </div>
          <div>
            <span className="bold">주식:</span> {stockAmount.toLocaleString()}원
          </div>
        </AssetInfoBox>
        <StockAssetContainer>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example">
                <Tab label="보유 주식" {...a11yProps(0)} />
                <Tab label="구성원" {...a11yProps(1)} />
              </Tabs>
            </Box>
            {/* 보유 주식 Tab */}
            <CustomTabPanel value={value} index={0}>
              {stockData.map((stock, idx) => (
                <SingleAsset
                  name={stock.itemName}
                  cnt={stock.count}
                  percent={stock.rateOfReturn}
                />
              ))}
            </CustomTabPanel>
            {/* 구성원 Tab */}
            <CustomTabPanel value={value} index={1}>
              {members.map((member, idx) => (
                <SingleMember name={member.name} accNum={member.accNum} />
              ))}
            </CustomTabPanel>
          </Box>
        </StockAssetContainer>
      </AssetWrapper>
    </>
  );
};

export default Asset;
