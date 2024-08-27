import { Box } from "@mui/material";
import ProfileParagraph from "./ProfileParagraph";
import Title from "./Title";

const PARAGRAPH_LIST = [
  "As I mentioned above, I specialize in AI, ML and Data, and I try to apply these technologies to achieve meaningful ends. What ends are meaningful to me?",

  "Personally, I believe that there are very few fundamental ends; by which I mean, ends that are ends by themselves and not means to other ends. 'Reducing Suffering' is such a fundamental end, which I'm very interested in achieving.",

  "More pragmatically, here are some important ways in which I think we can reduce suffering in the world:",

  "1️. Health: The world in general is suffering from a health crisis, which in turn is causing a serious reduction in the quality of life, economic productivity, and social stability. Of the many problems, there are a few problems that need immediate attention: For example, How do we get people to eat fewer processed foods, fewer carbs, and exercise more?",
  "2️. Education: How will education change in the future, especially given the implications of AI? Traditionally, education has 4 purposes: Learning to know; to do; to be with others; and to be with oneself. AI is likely to completely change the first, significantly change the second, and nontrivially influence the third, and the fourth. How might we design Education 2.0 to take these into account?",
  "In Sri Lanka, for example, how might we use education to lift people's standard of living, and in many cases, bring them out of poverty?",
  "3️. Journalism: Fake News, Deep Fakes, Misinformation and Bias are serious problems. While it is tempting to try and solve these problems, we need to ask the deeper question: What is the purpose of news and journalism in the first place? How might we use Journalism to reduce suffering in the world?",
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
