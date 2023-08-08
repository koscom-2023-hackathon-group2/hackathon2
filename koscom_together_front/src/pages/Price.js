import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";

import {
  PriceWrapper,
  SearchBarContainer,
  SearchInput,
} from "../styles/PriceEmotion";
import { useState } from "react";
import { dummyStocks } from "../assets/dummyData";
import SinglePrice from "../components/SinglePrice";

const Price = () => {
  const stocks = dummyStocks;

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

  return (
    <>
      <PriceWrapper>
        <SearchBarContainer>
          <SearchInput placeholder="종목명/코드 를 입력해주세요." />
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
              />
            ))}
          </CustomTabPanel>
        </Box>
      </PriceWrapper>
    </>
  );
};

export default Price;
