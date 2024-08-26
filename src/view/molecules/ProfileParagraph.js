import { Typography } from "@mui/material";

export default function ProfileParagraph({ children }) {
  return (
    <Typography
      variant="body1"
      sx={{ textAlign: "justify", paddingTop: 1, paddingBottom: 1 }}
    >
      {children}
    </Typography>
  );
}
