import { Box, Paper, Grid, Typography } from '@mui/material';
import Title from './Title';
import ProfileParagraph from './ProfileParagraph';

function VisionItem({ vision }) {
  const { title, details } = vision;
  return (
    <Paper sx={{ maxWidth: 300, m: 1, p: 2, backgroundColor: '#f801' }}>
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="body1">{details}</Typography>
    </Paper>
  );
}

const PARAGRAPH_LIST = [
  'I specialize in AI, ML, Data, Cryptography, and Design, aiming to use these technologies to reduce suffering — a fundamental goal I believe in.',

  'Here are key areas where I think we can make an impact:',
];
const VISION_ITEM_LIST = [
  {
    title: '1. Lifelong Learning',
    details:
      "Education is foundational to human progress. I'm especially focused on understanding how adults learn new skills, including natural languages, to improve educational methods and tools for lifelong learning.",
  },

  {
    title: '2. Sinhala Language Technology',
    details:
      'Despite being spoken by over 20 million people, Sinhala lacks robust digital tools. I am committed to developing high-quality language technology for Sinhala, including keyboards, speech recognition, and large language models, to ensure greater accessibility and inclusivity.',
  },

  {
    title: '3. Elevating Information Quality',
    details:
      "The internet's ad-driven model, coupled with content-generation tools, has impacted content quality. I research and develop technologies aimed at enhancing the quality and reliability of information, making the digital world a more constructive space.",
  },

  {
    title: '4. Narrative-based Education',
    details:
      'Storytelling is a powerful tool for engagement. I am exploring narrative techniques to simplify and make complex topics in economics, politics, and technology accessible and compelling for diverse audiences.',
  },
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
