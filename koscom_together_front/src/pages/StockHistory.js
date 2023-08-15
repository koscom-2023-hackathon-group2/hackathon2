import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import {
  StockHistoryTitleContainer,
  StockHistoryWrapper,
} from "../styles/StockHistoryEmotion";
import { dummyStockHistory } from "../assets/dummyData";
import SingleStockHistory from "../components/SingleStockHistory";
import Modal from "../components/Modal";
import { StockModalWrapper } from "../styles/PriceEmotion";
import SingleHistoryInfo from "../components/SingleHistoryInfo";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const StockHistory = () => {
  const stockHistories = dummyStockHistory; // 추후 삭제 예정
  const price = 190000; // 추후 삭제 예정
  const totalPrice = 3800000; // 추후 삭제 예정

  const { state } = useLocation();

  const [stockHistoryModalShow, setStockHistoryModalShow] = useState(false);
  const [stockHistoryData, setStockHistoryData] = useState([]);

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

  const [activeModalStockData, setActiveModalStockData] = useState(null);

  const onClickStockHistory = (index) => {
    setStockHistoryModalShow(true);
    console.log(stockHistoryData[index]);
    setActiveModalStockData(stockHistoryData[index]);
  };

  const getStockHistoryData = async () => {
    await axios
      .get(`${API_URL}/order/${state.accountNum}`, {
        headers: {},
      })
      .then((res) => {
        console.log(res.data);
        setStockHistoryData(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // accountNum
    async function getAndSetStockHistoryData() {
      const data = await getStockHistoryData();
      console.log(data);
    }

    getAndSetStockHistoryData();
  }, []);

  return (
    <>
      <Modal
        modalShow={stockHistoryModalShow}
        setModalShow={setStockHistoryModalShow}>
        <StockModalWrapper>
          <div className="stock-name">
            {activeModalStockData && activeModalStockData.itemName}
          </div>
          <div className="stock-info">
            <span className="stock-num">
              {activeModalStockData && activeModalStockData.stockNumber}
            </span>
            |
            <span className="stock-belong">
              {activeModalStockData && activeModalStockData.stockMarket}
            </span>
          </div>
          <div className="flexColumn info-box">
            <SingleHistoryInfo>
              <div className="bold">체결 날짜</div>
              <div className="date">2023.07.29. 오전 09:18</div>
            </SingleHistoryInfo>
            <SingleHistoryInfo>
              <div className="bold">1주 가격</div>
              <div>
                {activeModalStockData &&
                  (
                    activeModalStockData.price / activeModalStockData.stockCount
                  ).toLocaleString()}
                원
              </div>
            </SingleHistoryInfo>
            <SingleHistoryInfo>
              <div className="bold">수량</div>
              <div>
                {activeModalStockData && activeModalStockData.stockCount}주
              </div>
            </SingleHistoryInfo>
            <SingleHistoryInfo>
              <div className="bold">총 체결 금액</div>
              <div>
                {activeModalStockData &&
                  activeModalStockData.price.toLocaleString()}
                원
              </div>
            </SingleHistoryInfo>
          </div>
        </StockModalWrapper>
      </Modal>
      <StockHistoryWrapper>
        <StockHistoryTitleContainer>
          {/* <div className="account-num">{state.accountNum}</div> */}
          <div className="bold group-name">{state.accountName}</div>
          <div>주식 거래 내역</div>
        </StockHistoryTitleContainer>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="전체" {...a11yProps(0)} />
              <Tab label="매수" {...a11yProps(1)} />
              <Tab label="매도" {...a11yProps(2)} />
            </Tabs>
          </Box>
          {/* 전체 Tab */}
          <CustomTabPanel value={value} index={0}>
            {stockHistoryData.map((stockHist, index) => (
              <SingleStockHistory
                key={index}
                date={stockHist.date}
                name={stockHist.itemName}
                cnt={stockHist.stockCount}
                onClickStockHistory={() => onClickStockHistory(index)}
              />
            ))}
          </CustomTabPanel>
          {/* 매수 Tab */}
          <CustomTabPanel value={value} index={1}>
            {stockHistoryData
              .filter((stockHist) => stockHist.orderType === "BUY")
              .map((stockHist, index) => (
                <SingleStockHistory
                  key={index}
                  date={stockHist.date}
                  name={stockHist.itemName}
                  cnt={stockHist.stockCount}
                  onClickStockHistory={() => onClickStockHistory(index)}
                />
              ))}
          </CustomTabPanel>
          {/* 매도 Tab */}
          <CustomTabPanel value={value} index={2}>
            {stockHistoryData
              .filter((stockHist) => stockHist.orderType === "SELL")
              .map((stockHist, index) => (
                <SingleStockHistory
                  key={index}
                  date={stockHist.date}
                  name={stockHist.itemName}
                  cnt={stockHist.stockCount}
                  onClickStockHistory={() => onClickStockHistory(index)}
                />
              ))}
          </CustomTabPanel>
        </Box>
      </StockHistoryWrapper>
    </>
  );
};

export default StockHistory;
