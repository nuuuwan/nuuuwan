import { Box, Paper, Grid, Typography } from '@mui/material';
import Title from './Title';
import ProfileParagraph from './ProfileParagraph';

function VisionItem({ vision }) {
  const { title, details } = vision;
  return (
    <Paper sx={{ maxWidth: 300, m: 1, p: 2, backgroundColor: '#fc0' }}>
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="body1">{details}</Typography>
    </Paper>
  );
}

const PARAGRAPH_LIST = [
  'I specialize in AI, ML, Data, Cryptography, and Design, aiming to use these technologies to reduce suffering — a fundamental goal I believe in.',

  "Here are important problem areas I'm currently interested in:",
];
const VISION_ITEM_LIST = [
  {
    title: 'Accelerating AI Adoption in Sri Lanka',
    details:
      'Digitalization is about creating an abstract data representation of the real world. If we are to solve real-world problems with AI, the aspects of the real world that interest us must be digitalized. The lack of digitalization and data is the biggest barrier to the fast adoption of AI in Sri Lanka.',
  },
  {
    title: 'Comfortable Living',
    details:
      'How might we use technology to make the lives of ordinary people more comfortable and contented? Especially in countries like Sri Lanka, which are affected by economic, environmental, and social issues.',
  },
  {
    title: 'Lifelong Learning',
    details:
      'Education is foundational to human progress. Sadly, even the highest educational institutions struggle to cope with the rapid pace of technological change, especially AI. Most have buried their heads in the sand. What does Education 2.0 look like?',
  },
  {
    title: 'Sinhala Language Technology',
    details:
      'Despite being spoken by over 20 million people, Sinhala lacks robust digital tools—ranging from keyboards and speech recognition to large language models.',
  },
  {
    title: 'Elevating Information Quality',
    details:
      "The internet's ad-driven model, coupled with content-generation tools, has impacted content quality. How might we develop technologies that enhance the quality and reliability of information, making the digital world a more constructive and creative space?",
  },
];

export default function VisionSection() {
  return (
    <Box>
      <Title>Motivations (To be updated)</Title>
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
