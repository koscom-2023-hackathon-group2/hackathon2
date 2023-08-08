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
  const stocks = dummyStocks;

  const [stockModalShow, setStockModalShow] = useState(false);

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

  const onClickStock = () => {
    setStockModalShow(true);
  };

  return (
    <>
      <Modal modalShow={stockModalShow} setModalShow={setStockModalShow}>
        <StockModalWrapper>
          <div className="stock-name">현대차</div>
          <div className="stock-info">
            <span className="stock-num">005380</span>|
            <span className="stock-belong">KOSPI200</span>
          </div>
          <div className="flex">
            <span className="stock-price minus">191,700원</span>
            <span className="flex">
              <ArrowDropDownIcon className="minus" />
              <span className="minus">0.42%</span>
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
              <Tab label="해외 주식" {...a11yProps(1)} />
              <Tab label="보유 주식" {...a11yProps(2)} />
            </Tabs>
          </Box>
          {/* 국내 주식 Tab */}
          <CustomTabPanel value={value} index={0}>
            {stocks.map((stock, idx) => (
              <SinglePrice
                name={stock.name}
                price={stock.price}
                percent={stock.percent}
                onClickStock={onClickStock}
              />
            ))}
          </CustomTabPanel>
          {/* 해외 주식 Tab */}
          <CustomTabPanel value={value} index={1}>
            {stocks.map((stock, idx) => (
              <SinglePrice
                name={stock.name}
                price={stock.price}
                percent={stock.percent}
                onClickStock={onClickStock}
              />
            ))}
          </CustomTabPanel>
          {/* 보유 주식 Tab */}
          <CustomTabPanel value={value} index={2}>
            {stocks.slice(0, 1).map((stock, idx) => (
              <SinglePrice
                name={stock.name}
                price={stock.price}
                percent={stock.percent}
                onClickStock={onClickStock}
              />
            ))}
          </CustomTabPanel>
        </Box>
      </PriceWrapper>
    </>
  );
};

export default Price;
