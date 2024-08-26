import { Avatar, Stack, Typography } from "@mui/material";

import {
  ConnectSection,
  ProfileSection,
  ContentSection,
} from "../../view/molecules";

const PROFILE_IMAGE_PATH = process.env.PUBLIC_URL + "/images/profile.jpg";

const STYLE = {
  AVATAR: {
    height: 64,
    width: 64,
  },
};
export default function HomePage() {
  return (
    <Stack
      direction="column"
      gap={2}
      sx={{ m: 2, p: 2, maxWidth: 720, margin: "auto" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        color="#888"
        justifyContent="center"
        gap={1}
      >
        <Avatar alt="Profile" src={PROFILE_IMAGE_PATH} sx={STYLE.AVATAR} />
        <Typography variant="h2">Nuwan I. Senaratna</Typography>
      </Stack>
      <ProfileSection />
      <ContentSection />
      <ConnectSection />
    </Stack>
  );
}
