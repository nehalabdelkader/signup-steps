import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const MegaInputField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root-": {
    borderRadius: theme.spacing(1),
    border: "2px solid",
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  },
  "& .MuiInputBase-input": {
    height: theme.spacing(10),
    padding: theme.spacing(0, 1),
    textAlign: "center",
    fontWeight: 500,
    fontSize: theme.spacing(6),
    lineHeight: theme.spacing(7.5),
    color: theme.palette.primary.main,
  },
}));

export { MegaInputField };
