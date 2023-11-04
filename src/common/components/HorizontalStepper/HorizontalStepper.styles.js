import { Stepper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledStepper = styled(Stepper)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    "& .stepSubitle": {
      color: theme.palette.grey[600],
      textWrap: 'nowrap',
    },
    "& .stepTitle": {
      fontWeight: 600,
      color: theme.palette.grey[700],
    },
    "&.Mui-completed": {
      "& .stepTitle": {
        color: theme.palette.success.main,
      },
    },
    "&.Mui-active": {
      "& .stepTitle": {
        color: theme.palette.primary.main,
      },
    },
  },
  "& .MuiStepConnector-root": {
    left: "calc(-50% + 12px)",
    right: "calc(50% + 13px)",
  },
  "& .Mui-completed, .Mui-active": {
    "& .MuiStepConnector-line": {
        borderColor: theme.palette.primary.main,
    }
  
  },
  "& .MuiStepConnector-line": {
    borderTopWidth: "2px",
    borderColor: theme.palette.grey[100],
  },
}));
export default StyledStepper;
