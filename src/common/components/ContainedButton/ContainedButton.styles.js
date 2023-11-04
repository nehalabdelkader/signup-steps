import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton= styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.25, 0),
  borderRadius:  theme.spacing(1),
}));
export default StyledButton;
