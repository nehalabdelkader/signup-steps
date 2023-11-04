import React from "react";

import StyledButton from "./ContainedButton.styles";

const ContainedButton = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledButton variant="contained" {...rest}>
     {children}
    </StyledButton>
  );
};

export { ContainedButton };
