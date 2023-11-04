import React from "react";
import { Step, StepLabel, Typography } from "@mui/material";

import StyledStepper from "./HorizontalStepper.styles";
import { StepIcon, ActiveStepIcon, CompletedStepIcon } from "../../icons";

const HorizontalStepper = (props) => {
  const {
    steps,
    activeStep,
  } = props;
  const getStepIcon = (id) => {
    if (id < activeStep) {
      return CompletedStepIcon;
    } else if (id > activeStep) {
      return StepIcon;
    }
    return ActiveStepIcon;
  };
  return (
    <StyledStepper alternativeLabel activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step.id} className="step">
          <StepLabel StepIconComponent={getStepIcon(step.id)}>
            <Typography variant="body1" className="stepTitle" color="text">
              {step.title}
            </Typography>
            {step.subtitle && (
              <Typography variant="body1"className="stepSubitle">{step.subtitle}</Typography>
            )}
          </StepLabel>
        </Step>
      ))}
    </StyledStepper>
  );
};

export { HorizontalStepper };
