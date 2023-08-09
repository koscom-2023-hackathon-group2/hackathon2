import { useState } from "react";

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

const StockHistory = () => {
  const stockHistories = dummyStockHistory; // 추후 삭제 예정
  const price = 190000; // 추후 삭제 예정
  const totalPrice = 3800000; // 추후 삭제 예정

  const [stockHistoryModalShow, setStockHistoryModalShow] = useState(false);

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

  const onClickStockHistory = () => {
    setStockHistoryModalShow(true);
  };

  return (
    <>
      <Modal
        modalShow={stockHistoryModalShow}
        setModalShow={setStockHistoryModalShow}>
        <StockModalWrapper>
          <div className="stock-name">현대차</div>
          <div className="stock-info">
            <span className="stock-num">005380</span>|
            <span className="stock-belong">KOSPI200</span>
          </div>
          <div className="flexColumn info-box">
            <SingleHistoryInfo>
              <div className="bold">체결 날짜</div>
              <div className="date">2023.07.29. 오전 09:18</div>
            </SingleHistoryInfo>
            <SingleHistoryInfo>
              <div className="bold">1주 가격</div>
              <div>{price.toLocaleString()}원</div>
            </SingleHistoryInfo>
            <SingleHistoryInfo>
              <div className="bold">수량</div>
              <div>20주</div>
            </SingleHistoryInfo>
            <SingleHistoryInfo>
              <div className="bold">총 체결 금액</div>
              <div>{totalPrice.toLocaleString()}원</div>
            </SingleHistoryInfo>
          </div>
        </StockModalWrapper>
      </Modal>
      <StockHistoryWrapper>
        <StockHistoryTitleContainer>
          <div className="account-num">33-29-3847398</div>
          <div className="bold group-name">코스콤 47기 동기들</div>
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
          {/* 전체 입출금 Tab */}
          <CustomTabPanel value={value} index={0}>
            {stockHistories.map((stockHist, index) => (
              <SingleStockHistory
                date={stockHist.date}
                name={stockHist.name}
                cnt={stockHist.cnt}
                onClickStockHistory={onClickStockHistory}
              />
            ))}
          </CustomTabPanel>
          {/* 입금 Tab */}
          <CustomTabPanel value={value} index={1}>
            {stockHistories
              .filter((stockHist) => stockHist.cnt > 0)
              .map((stockHist, index) => (
                <SingleStockHistory
                  date={stockHist.date}
                  name={stockHist.name}
                  cnt={stockHist.cnt}
                  onClickStockHistory={onClickStockHistory}
                />
              ))}
          </CustomTabPanel>
          {/* 출금 Tab */}
          <CustomTabPanel value={value} index={2}>
            {stockHistories
              .filter((stockHist) => stockHist.cnt < 0)
              .map((stockHist, index) => (
                <SingleStockHistory
                  date={stockHist.date}
                  name={stockHist.name}
                  cnt={stockHist.cnt}
                  onClickStockHistory={onClickStockHistory}
                />
              ))}
          </CustomTabPanel>
        </Box>
      </StockHistoryWrapper>
    </>
  );
};

export default StockHistory;
