import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
 // marginTop: theme.spacing(11.25),
  /*  width: '50%',
  height:  '50%', */
  "& .fieldsContainer": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2.5),
    marginBottom: theme.spacing(3),
  },

  "& .centeredConainer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(0.5),

    "& .MuiButtonBase-root": {
      padding: 0,
      minWidth: "unset",
      lineHeight: theme.spacing(2.5),
    },
  },  

}));
export default StyledBox;
