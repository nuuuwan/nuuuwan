import { Box } from "@mui/material";
import ProfileParagraph from "./ProfileParagraph";
import Title from "./Title";

const PROFILE_CONTENT = {
  Profile: [
    "Nuwan Senaratna is a computer scientist with deep experience in artificial intelligence, large scale systems, and data driven product engineering.",
    "He spent more than eight years at Facebook (now Meta), where he founded and led Ads engineering teams in Menlo Park and London. His work included building AI driven ad review systems that processed tens of millions of ads per day, developing optimisation models that generated over a billion dollars in incremental revenue, and scaling engineering organisations from the ground up.",
    "He now works between Sri Lanka and the Bay Area as a founder, consultant, and investor. His projects span public data infrastructure, private data platforms, 3D modelling, organisational optimisation, and national scale digital transformation. His roles include work with BrickBits, Lanka Data, Orysys, An0n, Codify, the Ceylon Chamber of Commerce, Dialog Axiata, Strategic Building Innovation, and Hatch Works, covering areas from AI architecture and ML system design to policy advisory and mentoring.",
    "He holds an MS in Computer Science from Stanford with a focus on Artificial Intelligence, and a BSc in Computer Science and Statistics from the University of Colombo. He also holds a Licentiate in Piano Performance from the Royal Schools of Music, London.",
    "His current interests include the next evolution of email, the digitalisation of public data in Sri Lanka, and applying machine intelligence to complex real world systems, while continuing to support early stage founders and invest in AI, data, and security technologies.",
  ],
  Motivations: [
    "Mathematician Richard Hamming was known for asking two critical questions: “What are the most important problems in your field?” and “Why aren’t you working on them?”",
    "My core motivation in life is to use my talents, skills, resources, and opportunities to help reduce suffering in the world. For me, “important” means “that which reduces suffering”.",
  ],
  Maxims: [
    "Success = Iteration × Upside",
    "Iteration = Fun × Flow × Create",
    "Upside = Edge × Time × Skill",
  ],
};

export default function ProfileSection() {
  return (
    <Box>
      {Object.entries(PROFILE_CONTENT).map(function (
        [title, paragraphs],
        iEntry
      ) {
        return (
          <Box key={iEntry}>
            <Title>{title}</Title>
            {paragraphs.map(function (paragraph, iParagraph) {
              return (
                <ProfileParagraph key={iParagraph}>
                  {paragraph}
                </ProfileParagraph>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
