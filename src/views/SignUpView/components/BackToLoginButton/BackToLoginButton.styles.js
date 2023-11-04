import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton= styled(Button)(({ theme }) => ({
  color: theme.palette.grey[600],
  padding: 0,
  fontWeight: 600,
}));
export default StyledButton;
