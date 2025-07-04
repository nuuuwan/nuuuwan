import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import Title from "./Title";

function ListItemContentInfo({ contentInfo }) {
  const { title, subTitle, url, Icon, color } = contentInfo;

  const onClick = function () {
    window.open(url, "_blank");
  };

  return (
    <ListItem sx={{ p: 0, m: 0, color }} onClick={onClick}>
      <ListItemButton>
        <ListItemIcon>
          <Icon sx={{color}} />
        </ListItemIcon>
        <ListItemText primary={title} secondary={subTitle} />
      </ListItemButton>
    </ListItem>
  );
}
const CONTENT_INFO_LIST = [
  {
    title: "LinkedIn",
    subTitle: "Professional Information, Employment History & Education",
    url: "https://www.linkedin.com/in/nuwansenaratna",
    Icon: LinkedInIcon,
    color: "#0077B5", 
  },  
  {
    title: "Google Scholar",
    subTitle: "Academic Papers, Patents & Citations",
    url: "https://scholar.google.com/citations?user=VOVN8f8AAAAJ&hl=en",
    Icon: SchoolIcon,
    color: "#4285F4",
  },
  {
    title: "GitHub",
    subTitle: "Open Source Code, Analysis, & Hobby Projects",
    url: "https://github.com/nuuuwan",
    Icon: GitHubIcon,
    color: "#333333",
  },
  {
    title: "Medium",
    subTitle: "Long-Form Articles on Technology, Business, Economics, Arts & Philosophy",
    url: "https://medium.com/@nuwans",
    Icon: NewspaperIcon,
    color: "#00ab6c",
  },
    {
    title: "Substack",
    subTitle: "Newer Articles. Same as Medium, but without Paywall",
    url: "https://substack.com/@nuuuwan",
    Icon: NewspaperIcon,
    color: "#FF6719", 
  },

  {
    title: "X/Twitter",
    subTitle: "Comments & Summaries of all the above at @nuuuwan",
    url: "https://twitter.com/nuuuwan",
    Icon: XIcon,
    color: "#1DA1F2", 
  },
  {
    title: "YouTube",
    subTitle: "Videos on Technology, Business, Economics, Arts & Philosophy",
    url: "https://www.youtube.com/channel/UC19yTKU_K2Qvx3ITHz4u9_A",
    Icon: YouTubeIcon,
    color: "#FF0000",
  },
  {
    title: "SoundCloud",
    subTitle: "Mostly Piano Minatures",
    url: "https://soundcloud.com/nuwan-i-senaratna",
    Icon: AudiotrackIcon,
    color: "#FF5500", // SoundCloud orange
  },
];

export default function LinksSection() {
  return (
    <Box>

      <List>
        {CONTENT_INFO_LIST.map(function (contentInfo, i) {
          return <ListItemContentInfo key={i} contentInfo={contentInfo} />;
        })}
      </List>
    </Box>
  );
}
