import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Title from "./Title";

function ListItemContentInfo({ contentInfo }) {
  const { title, subTitle, url, Icon } = contentInfo;

  const onClick = function () {
    window.open(url, "_blank");
  };

  return (
    <ListItem sx={{ p: 0, m: 0 }} onClick={onClick}>
      <ListItemButton>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} secondary={subTitle} />
      </ListItemButton>
    </ListItem>
  );
}
const CONTENT_INFO_LIST = [
  {
    title: "LinkedIn",
    subTitle: "Professional Information, Employment History and Education",
    url: "https://www.linkedin.com/in/nuwansenaratna",
    Icon: LinkedInIcon,
  },
  {
    title: "Medium",
    subTitle:
      "Long-Form Articles on Technology, Business, Economics, Arts and Philosophy",
    url: "https://medium.com/@nuwans",
    Icon: ArticleIcon,
  },

  {
    title: "Code on GitHub",
    subTitle: "Open Source Code, Hobby Projects, and Analysis",
    url: "https://github.com/nuuuwan",
    Icon: GitHubIcon,
  },
  {
    title: "Videos on YouTube",
    subTitle: "Videos on Technology, Business, Economics, Arts and Philosophy",
    url: "https://www.youtube.com/channel/UC19yTKU_K2Qvx3ITHz4u9_A",
    Icon: YouTubeIcon,
  },

  {
    title: "X/Twitter",
    subTitle: "Comments and Summaries of all the above at @nuuuwan",
    url: "https://twitter.com/nuuuwan",
    Icon: XIcon,
  },
  {
    title: "SoundCloud",
    subTitle: "Mostly Piano Minatures",
    url: "https://soundcloud.com/nuwan-i-senaratna",
    Icon: AudiotrackIcon,
  },
];

export default function ContentSection() {
  return (
    <Box>
      <Title>My Writings and Other Content</Title>
      <List>
        {CONTENT_INFO_LIST.map(function (contentInfo, i) {
          return <ListItemContentInfo key={i} contentInfo={contentInfo} />;
        })}
      </List>
    </Box>
  );
}
