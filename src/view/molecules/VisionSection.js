import { Box, Paper, Grid, Typography } from "@mui/material";
import Title from "./Title";
import ProfileParagraph from "./ProfileParagraph";

function VisionItem({ vision }) {
  const { title, details } = vision;
  return (
    <Paper sx={{ maxWidth: 300, m: 1, p: 2, backgroundColor: "#fc0" }}>
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="body1">{details}</Typography>
    </Paper>
  );
}

const PARAGRAPH_LIST = [
  "My core motivation in life is to use my talents, skills, resources, and opportunities to help reduce suffering in the world.",
];
const VISION_ITEM_LIST = [];

export default function VisionSection() {
  return (
    <Box>
      <Title>Motivations</Title>
      {PARAGRAPH_LIST.map(function (paragraph, i) {
        return <ProfileParagraph key={i}>{paragraph}</ProfileParagraph>;
      })}
      <Grid container spacing={2}>
        {VISION_ITEM_LIST.map(function (vision, i) {
          return (
            <Grid item key={i}>
              <VisionItem vision={vision} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
