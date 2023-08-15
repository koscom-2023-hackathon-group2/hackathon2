// 자산 화면
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const cashAmount = 2200000; // 추후 삭제 예정
  const stockAmount = 1022190; // 추후 삭제 예정
  const stocks = dummyStockAssets; // 추후 삭제 예정
  const members = dummyMembers; // 추후 삭제 예정

  const [stockModalShow, setStockModalShow] = useState(false);
  const [inviteModalShow, setInviteModalShow] = useState(false);

  const [priceModalData, setPriceModalData] = useState(dummyStockAssets[0]);

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

  const onClickStock = (idx) => {
    setPriceModalData(stocks[idx]);
    setStockModalShow(true);
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
        hostId: "jiye1",
        nickName: name,
        account: "52b80f53-db87-4cdf-a3ea-c6a01cf8370f",
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
      <Modal modalShow={stockModalShow} setModalShow={setStockModalShow}>
        <StockModalWrapper>
          <div className="stock-name">{priceModalData.itemName}</div>
          <div className="stock-info">
            <span className="stock-num">{priceModalData.stockNumber}</span>|
            <span className="stock-belong">{priceModalData.stockMarket}</span>
          </div>
          <div className="flex">
            {priceModalData.rateOfReturn < 0 ? (
              <span className="stock-price minus">
                {priceModalData.stockPrice.toLocaleString()}원
              </span>
            ) : priceModalData.rateOfReturn === 0 ? (
              <span className="stock-price none">
                {priceModalData.stockPrice.toLocaleString()}원
              </span>
            ) : (
              <span className="stock-price plus">
                {priceModalData.stockPrice.toLocaleString()}원
              </span>
            )}
            <span className="flex">
              {priceModalData.rateOfReturn < 0 ? (
                <>
                  <ArrowDropDownIcon className="minus" />
                  <span className="minus">
                    {-1 * priceModalData.rateOfReturn}%
                  </span>
                </>
              ) : priceModalData.rateOfReturn === 0 ? (
                <></>
              ) : (
                <>
                  <ArrowDropUpIcon className="plus" />
                  <span className="plus">{priceModalData.rateOfReturn}%</span>
                </>
              )}
            </span>
          </div>
          <div className="flex number-input-box">
            <SearchInput className="number-input" placeholder="10" />
            <span>주</span>
          </div>
          <div className="btn-list">
            <div className="btn sell">매도</div>
            <div className="btn buy">매수</div>
          </div>
        </StockModalWrapper>
      </Modal>
      <AssetWrapper>
        <AssetTitleContainer>
          <div className="account-num">33-29-3847398</div>
          <div className="bold group-name">코스콤 47기 동기들</div>
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
              {stocks.map((stock, idx) => (
                <SingleAsset
                  name={stock.itemName}
                  cnt={stock.cnt}
                  percent={stock.rateOfReturn}
                  onClickStock={() => onClickStock(idx)}
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
