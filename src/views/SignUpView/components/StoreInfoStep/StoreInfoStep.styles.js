import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& .fieldsContainer": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },

  "& .storeUrl": {
    "& .MuiOutlinedInput-root": {
      paddingRight: 0,
    },
    "& .MuiInputAdornment-root": {
      marginRight: 0,
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(1.25, 2),
      height: theme.spacing(3),
      maxHeight: "unset",
      borderTopRightRadius: theme.spacing(1),
      borderBottomRightRadius: theme.spacing(1),
      borderLeft: `1px solid ${theme.palette.grey[300]}`,
      fontWeight: 600,
      color: theme.palette.grey[700],
    },
  },

  "& .saveBtn": {
    margin: theme.spacing(4, 0),
  },
}));

export const StyledLangBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  "& .MuiTypography-root": {
    color: theme.palette.grey[900],
  },
}));
export default StyledBox;
