import React, { useState } from "react";
import { Typography, Button, Box } from "@mui/material";

import StyledBox from "./EmailConfirmationStep.styles";
import {
  ContainedButton,
  MegaInputField,
} from "../../../../common/components";
import { CheckCircleIcon, EmailIcon } from "../../../../common/icons";
import { BackToLoginButton } from "../BackToLoginButton";

const EmailConfirmationStep = (props) => {
  // props
  const { handleUpdateCurrentStep } = props;

  // data
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // handlers
  const handleVerifyEmail = () => {
    setIsEmailVerified(true);
  };

  // email verified view
  const emailVerifiedView = () => (
    <>
      <CheckCircleIcon />
      <Typography variant="h3" component="p" className="grey900 stepTitle">
        Email verified
      </Typography>
      <Typography variant="body1" className="grey600">
        Your accounnt has been verified successfully. Click below to setup your
        store.
      </Typography>
      <ContainedButton
        fullWidth
        onClick={handleUpdateCurrentStep}
        className="continueBtn"
      >
        Continue
      </ContainedButton>
      <BackToLoginButton />
    </>
  );
  // check your email view
  const CheckYourEmailView = () => (
    <>
      <EmailIcon />
      <Typography variant="h3" component="p" className="grey900 stepTitle">
        Check your email
      </Typography>
      <Typography variant="body1" className="grey600">
        We sent a verification code to
      </Typography>
      <Typography variant="body1" className="grey600 email">
        omarmouneer@gmail.com
      </Typography>
      <Box className="verificationCodeContainer">
        {[...Array(4).keys()].map((item) => (
          <MegaInputField key={item} />
        ))}
      </Box>
      <ContainedButton fullWidth onClick={handleVerifyEmail}>
        Verify email
      </ContainedButton>
      <Typography variant="body1" className="resendEmailContainer grey600">
        Didn’t receive the email?<Button>Click to resend</Button>
      </Typography>
      <BackToLoginButton />
    </>
  );

  return (
    <StyledBox>
      {isEmailVerified ? emailVerifiedView() : CheckYourEmailView()}
    </StyledBox>
  );
};

export { EmailConfirmationStep };
