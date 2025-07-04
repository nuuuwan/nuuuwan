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
  "Mathematician Richard Hamming was known for asking two critical questions: “What are the most important problems in your field?” and “Why aren’t you working on them?”",
  "My core motivation in life is to use my talents, skills, resources, and opportunities to help reduce suffering in the world. For me, “important” means “that which reduces suffering”.",
  // "With that in mind, here are the problems I currently believe are the most important ones I should be working on:",
];
const VISION_ITEM_LIST = [
  // {
  //   title: "",
  //   details:
  //     "",
  // },
];

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
