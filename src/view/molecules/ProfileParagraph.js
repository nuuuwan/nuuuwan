import { Box, Typography } from "@mui/material";

function Equation({ children }) {
  return (
    <Box sx={{ m: 1, p: 2, background: "#eee", borderRadius: "100%" }}>
      {children}
    </Box>
  );
}

function renderChildren(children) {
  if (typeof children !== "string") {
    return children;
  }
  if (children.includes(" = ")) {
    const parts = children.split(" = ");
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Equation>{renderChildren(parts[0])}</Equation>
        <Typography variant="h5" component="span">
          {" = "}
        </Typography>
        <Equation>{renderChildren(parts[1])}</Equation>
      </Box>
    );
  }

  return children;
}

export default function ProfileParagraph({ children }) {
  return (
    <Typography
      variant="body1"
      sx={{ textAlign: "justify", paddingTop: 1, paddingBottom: 1 }}
    >
      {renderChildren(children)}
    </Typography>
  );
}
