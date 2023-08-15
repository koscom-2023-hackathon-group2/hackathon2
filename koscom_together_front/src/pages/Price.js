import { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  const [totalStockData, setTotalStockData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [totalETFData, setTotalETFData] = useState([]);
  const [ETFData, setETFData] = useState([]);

  const [groupList, setGroupList] = useState([]);

  const searchInputRef = useRef();
  const cntRef = useRef();

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
    setStockData(totalStockData);
    setETFData(totalETFData);
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
    const input = searchInputRef.current.value;
    if (value === 0) {
      if (!input) {
        setStockData(totalStockData);
        return;
      }
      const newData = totalStockData.filter(
        (data) => data.stockNumber === input || data.itemName === input
      );
      setStockData(newData);
    } else if (value === 1) {
      if (!input) {
        setETFData(totalETFData);
        return;
      }
      const newData = totalETFData.filter(
        (data) => data.stockNumber === input || data.itemName === input
      );
      setETFData(newData);
    }
  };

  // 주식 매도 메소드
  const handleSellStock = () => {
    axios
      .post(`${API_URL}/order`, {
        // 로그인 연결 후 hostId 수정 예정
        memberId: "jiye3",
        accountId: selectedGroup.realAccountId,
        stockNumber: priceModalData.stockNumber,
        orderType: "SELL",
        itemName: priceModalData.itemName,
        stockMarket: priceModalData.stockMarket,
        stockType: value === 0 ? "STOCK" : "ETF",
        count: cntRef.current.value,
        price: priceModalData.stockPrice,
      })
      .then((res) => {
        console.log(res);
        alert("주식 매도 주문이 완료되었습니다.");
        cntRef.current.value = "";
        setStockModalShow(false);
      })
      .catch((err) => {});
  };

  // 주식 매수 메소드
  const handleBuyStock = () => {
    axios
      .post(`${API_URL}/order`, {
        // 로그인 연결 후 hostId 수정 예정
        memberId: "jiye3",
        accountId: selectedGroup.realAccountId,
        stockNumber: priceModalData.stockNumber,
        orderType: "BUY",
        itemName: priceModalData.itemName,
        stockMarket: priceModalData.stockMarket,
        stockType: value === 0 ? "STOCK" : "ETF",
        count: cntRef.current.value,
        price: priceModalData.stockPrice,
      })
      .then((res) => {
        console.log(res);
        alert("주식 매수 주문이 완료되었습니다.");
        cntRef.current.value = "";
        setStockModalShow(false);
      })
      .catch((err) => {});
  };

  const [selectedAccountName, setSelectedAccountName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);

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

  const handleAccountChange = (event) => {
    console.log(event.target.value);
    setSelectedAccountName(event.target.value);

    for (let group of groupList) {
      if (group.nickname === event.target.value) {
        console.log(group);
        setSelectedGroup(group);
      }
    }

    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const getStockList = async () => {
    await axios
      .get(`${API_URL}/domesticStockList`, {
        headers: {},
      })
      .then((res) => {
        console.log(res);
        setStockData(res.data);
        setTotalStockData(res.data);
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
        setTotalETFData(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGroupAccountList = async () => {
    await axios
      .get(`${API_URL}/group-account/${"jiye2"}`, {
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
    async function getAndSetStockList() {
      const data = await getStockList();
      console.log(data);
      // setPriceModalData();
    }

    async function getAndSetETFList() {
      const data = await getETFList();
      console.log(data);
    }

    async function getAndSetGroupAccountList() {
      const data = await getGroupAccountList();
      console.log(data);
    }

    getAndSetStockList();
    getAndSetETFList();
    getAndSetGroupAccountList();
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
            <SearchInput
              ref={cntRef}
              className="number-input"
              placeholder="10"
            />
            <span>주</span>
          </div>
          <div className="bold label">계좌 선택</div>
          <FormControl sx={{ width: 239, paddingBottom: 1 }}>
            <Select
              // multiple
              displayEmpty
              value={personName}
              onChange={handleAccountChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>계좌 선택</em>;
                }

                return selected;
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}>
              <MenuItem disabled value="">
                <em>계좌 선택</em>
              </MenuItem>
              {groupList.map((group, idx) => (
                <MenuItem
                  key={idx}
                  value={group.nickname}
                  style={getStyles(group.nicknameme, personName, theme)}>
                  {group.nickname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="btn-list">
            <div className="btn sell" onClick={handleSellStock}>
              매도
            </div>
            <div className="btn buy" onClick={handleBuyStock}>
              매수
            </div>
          </div>
        </StockModalWrapper>
      </Modal>
      <PriceWrapper>
        <SearchBarContainer>
          <SearchInput
            className="flexGrow"
            ref={searchInputRef}
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
                  onClickStock={() => onClickETF(idx)}
                />
              ))}
            </StockBox>
          </CustomTabPanel>
        </Box>
      </PriceWrapper>
    </>
  );
};

export default Price;
