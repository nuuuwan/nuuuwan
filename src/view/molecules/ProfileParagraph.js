import { Box, Typography } from "@mui/material";

function Equation({ children }) {
  return (
    <Box sx={{ m: 1, p: 1, background: "#8882", borderRadius: "50%" }}>
      {children}
    </Box>
  );
}

function renderSplitParts(children, splitStr) {
  if (children.includes(splitStr)) {
    const parts = children.split(splitStr);
    const renderedParts = parts.reduce(function (renderedParts, part, iPart) {
      if (iPart > 0) {
        renderedParts.push(
          <Typography key={`equals-${iPart}`} variant="body1">
            {splitStr}
          </Typography>,
        );
      }
      renderedParts.push(
        <Equation key={iPart}>{renderSplitParts(part, "×")}</Equation>,
      );
      return renderedParts;
    }, []);
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>{renderedParts}</Box>
    );
  }

  return children;
}

function renderChildren(children) {
  if (typeof children !== "string") {
    return children;
  }

  return renderSplitParts(children, " = ");
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
