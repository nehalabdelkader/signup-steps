import React from "react";

import StyledBox from "./InputWithLabel.styles";
import { Button, TextField, Typography, InputAdornment } from "@mui/material";

const InputWithLabel = (props) => {
  const { label, note, ...rest } = props;

  return (
    <StyledBox>
      <Typography variant="body2" className="label">
        {label}
      </Typography>
      <TextField {...rest} />
      {note && (
        <Typography variant="body2" className="note">
          {note}
        </Typography>
      )}
    </StyledBox>
  );
};

export { InputWithLabel };
