import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const ActiveStepIcon = (props) => (
  <SvgIcon
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="12" fill="#7244C8" />
    <circle cx="12" cy="12" r="4" fill="white" />
  </SvgIcon>
);

export { ActiveStepIcon };
