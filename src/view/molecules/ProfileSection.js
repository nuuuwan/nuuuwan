import { Box } from "@mui/material";
import ProfileParagraph from "./ProfileParagraph";
import Title from "./Title";

const PARAGRAPH_LIST = [
  "Nuwan is a computer scientist, founder, consultant, and investor specializing in Artificial Intelligence, Machine Learning and Data Science.",
  "He is the Founder & CEO of ColomboLabs Inc. He is also a Consultant Architect for several US, EU, East-Asia and Sri Lanka based companies, advising on various aspects of Artificial Intelligence, from identifying business opportunities in Al, to systems, to building high-quality teams that build and exploit the power of Al.",
  "Nuwan also mentors and invests in Al startups.",
  "Before returning to Sri Lanka in 2018, Nuwan was a Software Engineer and Engineering Manager at Facebook for over eight years, joining the company in 2009 when the company had less than 200 employees. He worked on several pioneering products and systems at Facebook, focusing on Artificial Intelligence, Growth, and Security. He was the original designer of Facebook’s AdReview system, which automatically reviews millions of advertisements for quality and policy.",
  "Nuwan also led Facebook’s Advertise Growth Engineering team, helping FB acquire first IM and then 2M advertisers. He then moved to Facebook’s office in London in 2014 to build a team focussing on Advertising Systems for Emerging Markets, and then led its Publisher Platform Engineering team. He returned to California in 2016 to found the Facebook Market Dynamics team, combining Machine Learning and Economics to build a uniquely efficient advertising market.",
  "Nuwan is an Alumnus of Stanford University, California, USA, where he acquired a Masters in Al, with a Distinction in Research, and the University of Colombo, Sri Lanka. He also holds a Licentiate of the Royal Schools of Music (LRSM) in Piano Performance from the Royal Schools of Music, UK.",
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
