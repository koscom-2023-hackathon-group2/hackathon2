import { Fragment, useState } from "react";
import { NewAccountWrapper } from "../styles/NewAccountEmotion";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["약관 동의", "계좌 정보 입력", "개설 완료"];

const NewAccount = () => {
  return (
    <>
      <NewAccountWrapper>
        <div className="title">모임 계좌 개설하기</div>

        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </NewAccountWrapper>
    </>
  );
};

export default NewAccount;
