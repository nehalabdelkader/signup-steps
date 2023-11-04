import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.75),
  
  "& .label": {
    fontWeight: 500,
    color: theme.palette.grey[700],
  },
  "& .note": {
    color: theme.palette.grey[600],
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.25, 1.75),
    color: theme.palette.grey[500],
  },
  "& .MuiInputBase-root": {
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.grey.A100,
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  },
}));
export default StyledBox;
