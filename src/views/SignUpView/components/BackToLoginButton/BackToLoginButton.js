import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import StyledButton from "./BackToLoginButton.styles";

const BackToLoginButton = (props) => {
  return (
    <StyledButton startIcon={<ArrowBackIcon />} {...props}>
      Back to log in
    </StyledButton>
  );
};

export { BackToLoginButton };
