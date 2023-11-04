import React from "react";
import {
  Box,
  MenuItem,
  Typography,
  InputAdornment,
} from "@mui/material";

import { BackToLoginButton } from "../BackToLoginButton";
import StyledBox, {StyledLangBox} from "./StoreInfoStep.styles";
import {
  InputWithLabel,
  ContainedButton,
  InputDropdown,
} from "../../../../common/components";

const StoreInfoStep = (props) => {
  const { handleUpdateCurrentStep } = props;

  const languageOptions = [
    {
      name: "English",
      flag: "/imgs/ic_language_en.svg",
    },
  ];
  return (
    <StyledBox>
      <Box className="fieldsContainer">
        <InputWithLabel label="Store name" placeholder="Type your store name" />
        <InputWithLabel
          className="storeUrl"
          label="Store URL"
          placeholder="mystore"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography variant="body2">.markatty.com</Typography>
              </InputAdornment>
            ),
          }}
        />
        <InputDropdown
          label="Store language"
          options={languageOptions}
          value="English"
          renderOption={(option) => (
            <MenuItem value={option.name} key={option.name}>
              <StyledLangBox>
                <img src={option.flag} alt={option.name} />
                <Typography variant="body1">{option.name}</Typography>
              </StyledLangBox>
            </MenuItem>
          )}
        />
         <InputDropdown
          label="Store Industry"
          options={['Fashion']}
          value="Fashion"
          note="Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)"
          renderOption={(option) => (
            <MenuItem value={option} key={option.name}>
              {option}
            </MenuItem>
          )}
        />
      </Box>
      <ContainedButton fullWidth onClick={handleUpdateCurrentStep} className="saveBtn">
        Save
      </ContainedButton>
     <BackToLoginButton />
    </StyledBox>
  );
};

export { StoreInfoStep };
