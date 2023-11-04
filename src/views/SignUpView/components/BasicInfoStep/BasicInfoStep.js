import React from "react";
import {
  Box,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import StyledBox from "./BasicInfoStep.styles";
import { InputWithLabel, ContainedButton } from "../../../../common/components";

const BasicInfoStep = (props) => {
  const { handleUpdateCurrentStep } = props;
  return (
    <StyledBox>
      <Box className="fieldsContainer">
        <InputWithLabel label="Name*" placeholder="Enter your name" required />
        <InputWithLabel
          label="Email*"
          placeholder="Enter your email"
          required
        />
        <InputWithLabel
          label="Phone Number*"
          placeholder="+2 (100) 123-34567"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/imgs/ic_language_ar.svg" alt="ar" />
                <KeyboardArrowDownIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputWithLabel
          label="Password*"
          placeholder="Create a password"
          note="Must be at least 8 characters."
          required
        />
      </Box>
      <ContainedButton fullWidth onClick={handleUpdateCurrentStep}>
        Get started
      </ContainedButton>
      <Box className="centeredConainer" mt={4}>
        <Typography variant="body2" className="grey500">
          Already have an account?
        </Typography>
        <Button>Log In</Button>
      </Box>
      <Box className="centeredConainer grey500" mt={1}>
        <Typography variant="body1">عربى</Typography>
        <LanguageIcon />
      </Box>
    </StyledBox>
  );
};

export { BasicInfoStep };
