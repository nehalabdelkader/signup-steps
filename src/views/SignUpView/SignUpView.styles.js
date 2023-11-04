import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)(({ theme }) => ({
  "& .stepWindowContainer": {
    padding: theme.spacing(2.25, 4, 4, 4),
  },
  "& .stepContainer": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: theme.spacing(50),
    padding: theme.spacing(11.5, 0),
    margin: 'auto',
  },
  "& .contactInfoContainer": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: theme.spacing(12),
    "& .MuiSvgIcon-root, .MuiTypography-root": {
      color: theme.palette.grey[600],
    },
  },
  "& .mailInfoContainer": {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
  },
  "& .stepDescriptionContainer": { 
    backgroundImage: `url("/imgs/pattern.svg"), linear-gradient(to top right, #2F234A, #7F56D9)`,
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(12),

    "& .stepDescriptionTitle": {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(3),
    },
    
    "& .MuiSvgIcon-root":{
      fontSize: theme.spacing(10),
    },

    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  "& .grey600": {
    color: theme.palette.grey[600],
  },
  "& .grey200": {
    color: theme.palette.grey[200],
  },
  "& .grey900": {
    color: theme.palette.grey[900],
  },
  "& .grey500": {
    color: theme.palette.grey[500],
  },
}));
export default StyledGrid;
