import { Avatar, Box,  Stack, Typography } from "@mui/material";

import {
  LinksSection,
  ProfileSection,
  TimelineSection,
} from "../../view/molecules";

const PROFILE_IMAGE_PATH = process.env.PUBLIC_URL + "/images/profile.jpg";

const STYLE = {
  AVATAR: {
    height: 96,
    width: 96,
    filter: "grayscale(100%)",
  },
};

function PageTitle() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      color="text.secondary"
      justifyContent="center"
      gap={2}
      sx={{marginBottom: 5}}
    >
      <Avatar alt="Profile" src={PROFILE_IMAGE_PATH} sx={STYLE.AVATAR} />
      <Stack direction="column" gap={0}>
        <Typography variant="h4">Nuwan I. Senaratna</Typography>
        <Typography variant="body1">
          Computer scientist, founder, consultant, and investor specializing in
          Artificial Intelligence, Machine Learning and Data Science
        </Typography>

      </Stack>
    </Stack>
  );
}

function PageFooter() {
  return (    <Stack
    direction="row"
    alignItems="center"
    color="text.secondary"
    justifyContent="center"
    gap={2}
  >
    <Typography variant="caption" >
    "This too shall pass"
  </Typography>
  </Stack>
  )
}

export default function HomePage() {
  return (
    <Box sx={{ p: 3, maxWidth: 720, margin: "auto" }}>
      <PageTitle />
     
          <TimelineSection />

          <LinksSection />
     
          <ProfileSection />
 <PageFooter/>
    </Box>
  );
}
