import { Box } from '@mui/material';
import ProfileParagraph from './ProfileParagraph';
import Title from './Title';

const PARAGRAPH_LIST = [
  "Nuwan is a computer scientist specialising in Artificial Intelligence, Machine Learning, and Data Science. He is an angel investor focused on high-IP AI startups, and a consultant and architect to companies across the US, EU, East Asia, and Sri Lanka. His work spans identifying AI-driven business opportunities, designing intelligent systems, and building high-performing AI teams.",
  "From 2009 to 2017, he was a Software Engineer and Engineering Manager at Facebook.",
  "He holds a Master’s in AI, with Distinction in Research, from Stanford University, and a degree from the University of Colombo. He also holds the Licentiate of the Royal Schools of Music (LRSM) in Piano Performance, awarded by the Royal Schools of Music, UK.",
];

export default function ProfileSection() {
  return (
    <Box>
      <Title>Profile</Title>
      {PARAGRAPH_LIST.map(function (paragraph, i) {
        return <ProfileParagraph key={i}>{paragraph}</ProfileParagraph>;
      })}
    </Box>
  );
}
