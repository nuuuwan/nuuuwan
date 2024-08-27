import { Box } from "@mui/material";
import ProfileParagraph from "./ProfileParagraph";
import Title from "./Title";

const PARAGRAPH_LIST = [
  "I specialize in AI, ML, and Data, aiming to use these technologies to reduce suffering—a fundamental goal I believe in.",

  "Here are key areas where I think we can make an impact:",

  "1️. Health: The global health crisis is lowering quality of life, reducing economic productivity, and destabilizing societies. Key issues include getting people to eat fewer processed foods, cut down on carbs, and exercise more.",

  "1a Food Security: Millions suffer from hunger and malnutrition. How can AI and data-driven approaches improve food distribution, reduce waste, and ensure that everyone has access to nutritious food?",

  "2️. Education: AI will transform education, affecting how we learn, work, and interact with others and ourselves. How can we design Education 2.0 to lift people out of poverty and improve living standards, especially in Sri Lanka?",

  "2a. Journalism: With the rise of fake news, deep fakes, and bias, we must ask: What is the true purpose of journalism? How can we use it to reduce suffering in the world?",

  "3. Justice: Inequities and inefficiencies in the justice system contribute to prolonged suffering. How can AI and data help ensure fairer, faster, and more transparent legal processes?",

  "4. Transportation: Inefficient and unsafe transportation systems cause accidents, pollution, and stress. How can we design smarter, safer, and more efficient transportation networks that reduce travel-related suffering?",

  "5. Financial Inclusion: Lack of access to banking and financial services limits economic opportunities for many. How can fintech innovations provide financial services to underserved populations, empowering them to improve their livelihoods?",
];

export default function VisionSection() {
  return (
    <Box>
      <Title>Motivations</Title>
      {PARAGRAPH_LIST.map(function (paragraph, i) {
        return <ProfileParagraph key={i}>{paragraph}</ProfileParagraph>;
      })}
    </Box>
  );
}
