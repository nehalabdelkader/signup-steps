import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "& .stepTitle": {
    margin: theme.spacing(3, 0, 1.5, 0),
  },
  "& .continueBtn": {
    margin: theme.spacing(4, 0),
  },
  "& .email": {
    fontWeight: 500,
    marginTop: theme.spacing(2.5),
  },
  "& .verificationCodeContainer": {
    margin: theme.spacing(4, 0),
    display: "flex",
    gap: theme.spacing(1.5),
  },
  "& .resendEmailContainer": {
    margin: theme.spacing(4, 0),
  },
}));
export default StyledBox;
