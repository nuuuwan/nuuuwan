import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import FacebookIcon from "@mui/icons-material/Facebook";
import WorkIcon from "@mui/icons-material/Work";
import { Typography } from "@mui/material";
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

const STYLE = {
  [`& .${timelineOppositeContentClasses.root}`]: {
    flex: 0.2,
  },
};

function TimelineItemCustom({ info }) {
  const { timeStr, title, details, Icon } = info;
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {timeStr}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <Icon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <Typography color="text.secondary">{details}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function TimelineSection() {
  return (
    <Timeline sx={STYLE}>
      {TIMELINE_INFO_LIST.map(function (info, i) {
        return <TimelineItemCustom key={i} info={info} />;
      })}
    </Timeline>
  );
}
