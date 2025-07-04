import { Box } from "@mui/material";
import Title from "./Title";
import ProfileParagraph from "./ProfileParagraph";

const PARAGRAPH_LIST = [
  "Mathematician Richard Hamming was known for asking two critical questions: “What are the most important problems in your field?” and “Why aren’t you working on them?”",
  "My core motivation in life is to use my talents, skills, resources, and opportunities to help reduce suffering in the world. For me, “important” means “that which reduces suffering”.",
  // "With that in mind, here are the problems I currently believe are the most important ones I should be working on:",
];

export default function MotivationsSection() {
  return (
    <Box>
      <Title>Motivations</Title>
      {PARAGRAPH_LIST.map(function (paragraph, i) {
        return <ProfileParagraph key={i}>{paragraph}</ProfileParagraph>;
      })}
    </Box>
  );
}
