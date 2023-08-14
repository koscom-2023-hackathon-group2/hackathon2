import { useEffect, useRef, useState } from "react";

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
  StockBox,
  StockModalWrapper,
} from "../styles/PriceEmotion";

import { domesticStockLists, dummyStocks } from "../assets/dummyData";
import SinglePrice from "../components/SinglePrice";
import Modal from "../components/Modal";
import axios from "axios";
import { API_URL } from "../config";

const Price = () => {
  // const stocks = dummyStocks; // 추후 삭제 예정

  const [stockModalShow, setStockModalShow] = useState(false);
  const [priceModalData, setPriceModalData] = useState(domesticStockLists[0]);
  const [stockData, setStockData] = useState([]);
  const [ETFData, setETFData] = useState([]);

  const SearchInputRef = useRef();

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
    setPriceModalData(stockData[idx]);
    setStockModalShow(true);
  };

  const onClickETF = (idx) => {
    setPriceModalData(ETFData[idx]);
    setStockModalShow(true);
  };

  const handleSearch = () => {
    console.log("검색!");
    const input = SearchInputRef.current.value;
    if (!input) {
      setStockData(domesticStockLists);
      return;
    }
    const newData = domesticStockLists.filter(
      (data) => data.stockNumber === input || data.itemName === input
    );
    setStockData(newData);
  };

  const getStockList = async () => {
    await axios
      .get(`${API_URL}/domesticStockList`, {
        headers: {},
      })
      .then((res) => {
        console.log(res);
        setStockData(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getETFList = async () => {
    await axios
      .get(`${API_URL}/ETFList`, {
        headers: {},
      })
      .then((res) => {
        console.log(res);
        setETFData(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    async function getAndSetStockList() {
      const data = await getStockList();
      console.log(data);
      // setPriceModalData();
    }

    async function getAndSetETFList() {
      const data = await getETFList();
      console.log(data);
    }

    getAndSetStockList();
    getAndSetETFList();
  }, []);

  return (
    <>
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
      <PriceWrapper>
        <SearchBarContainer>
          <SearchInput
            className="flexGrow"
            ref={SearchInputRef}
            placeholder="종목명/코드 를 입력해주세요."
          />
          <div className="search-btn" onClick={handleSearch}>
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
            <StockBox>
              {stockData.map((stock, idx) => (
                <SinglePrice
                  key={idx}
                  name={stock.itemName}
                  price={stock.stockPrice}
                  percent={stock.rateOfReturn}
                  onClickStock={() => onClickStock(idx)}
                />
              ))}
            </StockBox>
          </CustomTabPanel>
          {/* ETF Tab */}
          <CustomTabPanel value={value} index={1}>
            <StockBox>
              {ETFData.map((stock, idx) => (
                <SinglePrice
                  key={idx}
                  name={stock.itemName}
                  price={stock.stockPrice}
                  percent={stock.rateOfReturn}
                  onClickETF={() => onClickETF(idx)}
                />
              ))}
            </StockBox>
          </CustomTabPanel>
          {/* 보유 주식 Tab */}
          <CustomTabPanel value={value} index={2}>
            {stockData.slice(0, 2).map((stock, idx) => (
              <SinglePrice
                key={idx}
                name={stock.itemName}
                price={stock.stockPrice}
                percent={stock.rateOfReturn}
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
