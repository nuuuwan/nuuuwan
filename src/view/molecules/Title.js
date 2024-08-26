import { Typography } from "@mui/material";

export default function Title({ children }) {
  return (
    <Typography variant="h5" sx={{ textAlign: "center" ,paddingTop: 1, paddingBottom:1, color: "#888"}}>
      {children}
    </Typography>
  );
}
