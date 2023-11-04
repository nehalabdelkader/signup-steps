import React from "react";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import StyledBox, { StyledSelect } from "./InputDropdown.styles";


const InputDropdown = (props) => {
  const { label, note, options, renderOption, ...rest } = props;

  return (
    <StyledBox>
      <Typography variant="body2" className="label">
        {label}
      </Typography>
      <StyledSelect {...rest} IconComponent={KeyboardArrowDownIcon}>
        {options.map((option) => renderOption(option))}
      </StyledSelect>
      {note && (
        <Typography variant="body2" className="note">
          {note}
        </Typography>
      )}
    </StyledBox>
  );
};

export { InputDropdown };
