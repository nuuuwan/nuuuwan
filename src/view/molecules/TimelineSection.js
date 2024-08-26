import {
  Timeline,

} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import FacebookIcon from "@mui/icons-material/Facebook";
import WorkIcon from "@mui/icons-material/Work";
import { Box } from "@mui/material";
import Title from "./Title";
import TimelineItemCustom from "./TimelineItemCustom";
const TIMELINE_INFO_LIST = [
  {
    timeStr: "2017-Present",
    title: "The USA, Asia, Europe & Sri Lanka",
    details: "Independent Consultant & Investor",
    Icon: WorkIcon,
  },
  {
    timeStr: "2009-2017",
    title: "Meta (formerly Facebook), California, USA & London, UK",
    details: "Software Engineer & Engineering Manager",
    Icon: FacebookIcon,
  },
  {
    timeStr: "2007-2009",
    title: "Stanford University, California, USA",
    details: "Master of Science in Computer Science",
    Icon: SchoolIcon,
  },
  {
    timeStr: "2002-2006",
    title: "University of Colombo, Sri Lanka",
    details: "Bachelor of Science in Computer Science and Statistics",
    Icon: SchoolIcon,
  },
];



export default function TimelineSection() {
  return (
    <Box>
      <Title>My Timeline</Title>
      <Timeline >
        {TIMELINE_INFO_LIST.map(function (info, i) {
          return <TimelineItemCustom key={i} info={info} />;
        })}
      </Timeline>{" "}
    </Box>
  );
}
