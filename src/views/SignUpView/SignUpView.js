import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { HorizontalStepper } from "../../common/components";

import StyledGrid from "./SignUpView.styles";
import { Grid, Box, Typography } from "@mui/material";
import { BasicInfoStep, EmailConfirmationStep, StoreInfoStep } from "./components";
import { FlyingEmailIcon, StarsIcon, StoreIcon } from "../../common/icons";
import { SIGNUP_STEPS } from "./utils";

const SignUpView = () => {
  //----------data-----------------
  // steps descrition on the left side
  const stepsDescription = [
    {
      title: "Start turning your ideas into reality.",
      icon: <StarsIcon />,
    },
    {
      title: "Verify your account now",
      icon: <FlyingEmailIcon />,
    },
    {
      title: "Setup your store the way you like",
      icon: <StoreIcon />,
    },
  ];
  // horizontal stepper titles
  const steps = [
    { id:0, title: "Your details", subtitle: "Provide your basic information" },
    { id:1, title: "Confirmation", subtitle: "Confirm your email" },
    { id:2, title: "Store information", subtitle: "Set your store main info" },
  ];
  const [currentStep, setCurrentStep] = useState(
   SIGNUP_STEPS.BASIC_INFORMATION
  );

  //---------- handlers-----------------
  // propagates t the next step
  const handleUpdateCurrentStep = () => {
    setCurrentStep((prev) => (prev + 1) % 3);
  };
  // gets the current step corresponding view
  const getCurrentStepView = () => {
    switch (currentStep) {
      case SIGNUP_STEPS.BASIC_INFORMATION:
        return <BasicInfoStep handleUpdateCurrentStep={handleUpdateCurrentStep} />;
      case SIGNUP_STEPS.EMAIL_CONFIRMATION:
        return <EmailConfirmationStep handleUpdateCurrentStep={handleUpdateCurrentStep} />;
      case SIGNUP_STEPS.STORE_INFORMATION:
        return <StoreInfoStep handleUpdateCurrentStep={handleUpdateCurrentStep} />;
      default: return <></>
    }
  };
console.log(currentStep)
  return (
    <StyledGrid container>
      <Grid item lg={6} md={12} className="stepWindowContainer">
        <img src="/imgs/logo.svg" alt="marakatty"></img>
        <Box mt={5}>
          <HorizontalStepper steps={steps} activeStep={currentStep}/>
        </Box>
        <Box className="stepContainer">
          {getCurrentStepView()}
        </Box>
        <Box className="contactInfoContainer">
          <Typography variant="body2">© Markatty 2022</Typography>
          <Box className="mailInfoContainer">
            <MailOutlineIcon fontSize="16px" />
            <Typography variant="body2">support@markatty.com</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6} className="stepDescriptionContainer">
        {stepsDescription[currentStep].icon}
        <Typography variant="h1" className="stepDescriptionTitle">
          {stepsDescription[currentStep].title}
        </Typography>
        <Typography variant="h5" className="grey200">
          Create a free account and get full access to all features for 30-days.
          No credit card needed. Get started in 2 minutes.
        </Typography>
      </Grid>
    </StyledGrid>
  );
};

export default SignUpView;
