import { useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { HistoryWrapper } from "../styles/HistoryEmotion";
import SingleHistory from "../components/SingleHistory";
import { dummyHistory } from "../assets/dummyData";

const History = () => {
  const histories = dummyHistory;

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
      <HistoryWrapper>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="전체" {...a11yProps(0)} />
              <Tab label="입금" {...a11yProps(1)} />
              <Tab label="출금" {...a11yProps(2)} />
            </Tabs>
          </Box>
          {/* 전체 입출금 Tab */}
          <CustomTabPanel value={value} index={0}>
            {histories.map((history, idx) => (
              <SingleHistory
                date={history.date}
                group={history.group}
                price={history.price}
              />
            ))}
          </CustomTabPanel>
          {/* 입금 Tab */}
          <CustomTabPanel value={value} index={1}>
            {histories
              .filter((history) => history.price > 0)
              .map((history, idx) => (
                <SingleHistory
                  date={history.date}
                  group={history.group}
                  price={history.price}
                />
              ))}
          </CustomTabPanel>
          {/* 출금 Tab */}
          <CustomTabPanel value={value} index={2}>
            {histories
              .filter((history) => history.price < 0)
              .map((history, idx) => (
                <SingleHistory
                  date={history.date}
                  group={history.group}
                  price={history.price}
                />
              ))}
          </CustomTabPanel>
        </Box>
      </HistoryWrapper>
    </>
  );
};

export default History;
