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
import Title from "./Title";

function ListItemContentInfo({ contentInfo }) {
  const { text, url, Icon } = contentInfo;
  return (
    <ListItem sx={{ p: 0, m: 0 }}>
      <ListItemButton href={url} target="_blank">
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
const CONTENT_INFO_LIST = [
  {
    text: "Long-Form Articles on Medium",
    url: "https://medium.com/@nuwans",
    Icon: ArticleIcon,
  },
  {
    text: "Music on SoundCloud",
    url: "https://soundcloud.com/nuwan-i-senaratna",
    Icon: AudiotrackIcon,
  },
  {
    text: "Videos on YouTube",
    url: "https://www.youtube.com/channel/UC19yTKU_K2Qvx3ITHz4u9_A",
    Icon: YouTubeIcon,
  },
  {
    text: "Code on GitHub",
    url: "https://github.com/nuuuwan",
    Icon: GitHubIcon,
  },
  {
    text: "Comments and Summaries of the above at @nuuuwan on X/Twitter",
    url: "https://twitter.com/nuuuwan",
    Icon: XIcon,
  },
];

export default function ContentSection() {
  return (
    <Box>
      <Title>Nuwan's Writings and Other Content</Title>
      <List>
        {CONTENT_INFO_LIST.map(function (contentInfo, i) {
          return <ListItemContentInfo key={i} contentInfo={contentInfo} />;
        })}
      </List>
    </Box>
  );
}
