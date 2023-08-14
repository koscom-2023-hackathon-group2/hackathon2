import { useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import {
  PriceWrapper,
  SearchBarContainer,
  SearchInput,
  StockModalWrapper,
} from "../styles/PriceEmotion";

import { dummyStocks } from "../assets/dummyData";
import SinglePrice from "../components/SinglePrice";
import Modal from "../components/Modal";

const Price = () => {
  const stocks = dummyStocks; // 추후 삭제 예정

  const [stockModalShow, setStockModalShow] = useState(false);
  const [priceModalData, setPriceModalData] = useState(stocks[0]);

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

  return (
    <>
      <Modal modalShow={stockModalShow} setModalShow={setStockModalShow}>
        <StockModalWrapper>
          <div className="stock-name">{priceModalData.name}</div>
          <div className="stock-info">
            <span className="stock-num">{priceModalData.code}</span>|
            <span className="stock-belong">{priceModalData.group}</span>
          </div>
          <div className="flex">
            {priceModalData.percent < 0 ? (
              <span className="stock-price minus">
                {priceModalData.price.toLocaleString()}원
              </span>
            ) : (
              <span className="stock-price plus">
                {priceModalData.price.toLocaleString()}원
              </span>
            )}
            <span className="flex">
              {priceModalData.percent < 0 ? (
                <>
                  <ArrowDropDownIcon className="minus" />
                  <span className="minus">{-1 * priceModalData.percent}%</span>
                </>
              ) : (
                <>
                  <ArrowDropUpIcon className="plus" />
                  <span className="plus">{priceModalData.percent}%</span>
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
      <PriceWrapper>
        <SearchBarContainer>
          <SearchInput
            className="flexGrow"
            placeholder="종목명/코드 를 입력해주세요."
          />
          <div className="search-btn">
            <SearchIcon />
          </div>
        </SearchBarContainer>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="국내 주식" {...a11yProps(0)} />
              <Tab label="ETF" {...a11yProps(1)} />
              <Tab label="보유 주식" {...a11yProps(2)} />
            </Tabs>
          </Box>
          {/* 국내 주식 Tab */}
          <CustomTabPanel value={value} index={0}>
            {stocks.map((stock, idx) => (
              <SinglePrice
                key={idx}
                name={stock.name}
                price={stock.price}
                percent={stock.percent}
                onClickStock={() => onClickStock(idx)}
              />
            ))}
          </CustomTabPanel>
          {/* 해외 주식 Tab */}
          <CustomTabPanel value={value} index={1}>
            {stocks.map((stock, idx) => (
              <SinglePrice
                key={idx}
                name={stock.name}
                price={stock.price}
                percent={stock.percent}
                onClickStock={() => onClickStock(idx)}
              />
            ))}
          </CustomTabPanel>
          {/* 보유 주식 Tab */}
          <CustomTabPanel value={value} index={2}>
            {stocks.slice(0, 1).map((stock, idx) => (
              <SinglePrice
                key={idx}
                name={stock.name}
                price={stock.price}
                percent={stock.percent}
                onClickStock={() => onClickStock(idx)}
              />
            ))}
          </CustomTabPanel>
        </Box>
      </PriceWrapper>
    </>
  );
};

export default Price;
