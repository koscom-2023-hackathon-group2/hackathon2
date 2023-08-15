import { Fragment, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { API_URL } from "../config";

const steps = ["약관 동의", "계좌 정보 입력"];

const NewAccount = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(false);
  const [bank, setBank] = useState("");

  const groupNameRef = useRef();
  const accNumRef = useRef();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleNext = () => {
    if (activeStep === 0 && checked) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 1 && checked) {
      // 계좌 정보 입력하고나면
      console.log(groupNameRef.current.value);
      console.log(accNumRef.current.value);
      console.log(bank);
      console.log(bankCode[names.indexOf(bank)]);

      axios
        .post(
          `${API_URL}/group-account/create`,
          {
            nickName: groupNameRef.current.value,
            depositAccountCode: bankCode[names.indexOf(bank)],
            depositAccountId: accNumRef.current.value,
          },
          {
            headers: {
              "X-MEMBER": user.id,
            },
          }
        )
        .then((res) => {
          console.log(res);
          console.log("계좌 생성이 완료되었습니다.");
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch((err) => {});
    } else if (!checked) {
      alert("약관 동의는 필수입니다.");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    navigate("/");
  };

  const handleCheckBoxChange = () => {
    setChecked(!checked);
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

  const bankCode = ["HN", "SC", "KB", "SH", "WR"];

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
        <div>
          약관 동의 내용 <span className="bold">(필수)</span>
        </div>
        <div className="desc-content">
          이 약관은 공동증권매매 업무를 영위하는{" "}
          <span className="bold">koscom Together</span>(이 하 “회사”라 한다)와
          증권 매매를 하고자 하는 거래 상대방(이하 "고객"이라 한다)간에 증권
          매매거래를 하는 경우에 적용된다.
        </div>
        <br />
        <div>
          1. 회사에서 운용하는 자산은 공동자산이기 때문에 어느 정도의 위험성이
          존재한다.
          <br />
          <br />
          2. 회사의 공동 계좌의 소유주는 계좌를 개설한 주체이되 그 공동 자산을
          활용한 증권 투자는 계좌 구성원 모두가 가능하다.
        </div>
        <div className="flex checkBox">
          <Checkbox checked={checked} onChange={handleCheckBoxChange} />
          <div>약관에 동의합니다.</div>
        </div>
      </NewAccountDescBox>
    );
  };

  const StepTwoContent = () => {
    return (
      <NewAccountContentWrapper>
        <ConnectingAccountContainer>
          <div className="content-title">연결 계좌</div>
          <div>본인 명의의 계좌를 등록해주세요.</div>
          <div className="input-container">
            <FormControl sx={{ width: 318, paddingBottom: 1 }}>
              <Select
                // multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>은행 선택</em>;
                  }

                  return selected;
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
            <SearchInput ref={accNumRef} placeholder="3333-01-239843" />
          </div>
        </ConnectingAccountContainer>
        <div className="flexColumn title-container">
          <div className="content-title">모임 계좌명</div>
          <SearchInput ref={groupNameRef} placeholder="코스콤 47기 동기들" />
        </div>
      </NewAccountContentWrapper>
    );
  };

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    setBank(event.target.value);
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
