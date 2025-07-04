import { Box } from "@mui/material";
import ProfileParagraph from "./ProfileParagraph";
import Title from "./Title";

const PROFILE_CONTENT = {
  Profile: [
    "Nuwan is a computer scientist specialising in Artificial Intelligence, Machine Learning, and Data Science. He is an angel investor focused on high-IP AI startups, and a consultant and architect to companies across the US, EU, East Asia, and Sri Lanka. His work spans identifying AI-driven business opportunities, designing intelligent systems, and building high-performing AI teams.",
    "From 2009 to 2017, he was a Software Engineer and Engineering Manager at Facebook.",
    "He holds a Master’s in AI, with Distinction in Research, from Stanford University, and a degree from the University of Colombo. He also holds the Licentiate of the Royal Schools of Music (LRSM) in Piano Performance, awarded by the Royal Schools of Music, UK.",
  ],
  Motivations: [
    "Mathematician Richard Hamming was known for asking two critical questions: “What are the most important problems in your field?” and “Why aren’t you working on them?”",
    "My core motivation in life is to use my talents, skills, resources, and opportunities to help reduce suffering in the world. For me, “important” means “that which reduces suffering”.",
  ],
  Maxims: [
    "Success = Iteration × Upside",
    "Outsized Success = Outsized Iteration × Outsized Upside",
    "Outsized Iteration = Freedom × Fun × Focus × Flow",
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
