import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ConnectingAccountContainer,
  NewAccountContentWrapper,
  NewAccountDescBox,
  NewAccountWrapper,
} from "../styles/NewAccountEmotion";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SearchInput } from "../styles/PriceEmotion";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const steps = ["약관 동의", "계좌 정보 입력"];

const NewAccount = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    navigate("/");
  };

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

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const StepOneContent = () => {
    return (
      <NewAccountDescBox>
        <div className="desc-title">모임 계좌 약관 동의</div>
        <div>약관 동의 내용</div>
      </NewAccountDescBox>
    );
  };

  const StepTwoContent = () => {
    return (
      <NewAccountContentWrapper>
        <div className="flexColumn">
          <div className="content-title">모임 계좌명</div>
          <SearchInput placeholder="코스콤 47기 동기들" />
        </div>
        <ConnectingAccountContainer>
          <div className="content-title">연결 계좌</div>
          <div>본인 명의의 계좌를 등록해주세요.</div>
          <div className="input-container">
            <FormControl sx={{ width: 318, paddingBottom: 1 }}>
              <Select
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>은행 선택</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem disabled value="">
                  <em>은행 선택</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <SearchInput placeholder="3333-01-239843" />
          </div>
        </ConnectingAccountContainer>
      </NewAccountContentWrapper>
    );
  };

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <NewAccountWrapper>
        <div className="title">모임 계좌 개설하기</div>

        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                <div className="finish-txt">계좌 개설이 완료되었습니다.</div>
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleFinish}>Finish</Button>
              </Box>
            </Fragment>
          ) : (
            <Fragment>
              <Typography sx={{ mt: 2, mb: 1 }} className="stepper-body">
                {activeStep === 0 ? <StepOneContent /> : null}
                {activeStep === 1 ? <StepTwoContent /> : null}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}>
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </Fragment>
          )}
        </Box>
      </NewAccountWrapper>
    </>
  );
};

export default NewAccount;
