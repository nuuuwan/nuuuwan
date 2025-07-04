import { Typography } from "@mui/material";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

export default function TimelineItemCustom({ info }) {
  const { timeStr, title, details, Icon, url } = info;

  const onClick = function () {
    window.open(url, "_blank");
  };

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
      <TimelineContent onClick={onClick}>
        <Typography variant="body1" component="span">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
