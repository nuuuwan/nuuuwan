import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";

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
      color="#888"
      justifyContent="center"
      gap={2}
    >
      <Avatar alt="Profile" src={PROFILE_IMAGE_PATH} sx={STYLE.AVATAR} />
      <Stack direction="column" gap={0}>

        <Typography variant="h3">Nuwan I. Senaratna</Typography>
        <Typography variant="h6">
          Computer scientist, founder, consultant, and investor specializing in
          Artificial Intelligence, Machine Learning and Data Science
        </Typography>
      </Stack>
    </Stack>
  );
}

export default function HomePage() {
  return (
    <Box
      sx={{ m: 2, p: 2, maxWidth: 720, margin: "auto" }}
    >
      <PageTitle />
      <Grid container spacing={2}>
 
        <Grid item xs={12}>
          <TimelineSection />
        </Grid>
        <Grid item xs={12} >
          <LinksSection />
        </Grid>
        <Grid item xs={12} >
          <ProfileSection />
        </Grid>        </Grid>
    </Box>
  );
}
