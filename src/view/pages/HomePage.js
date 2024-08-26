import { Avatar, Box, Stack, Typography } from "@mui/material";

import {
  LinksSection,
  ProfileSection,
  TimelineSection,
} from "../../view/molecules";
import { STYLE } from "../../nonview/constants";

const PROFILE_IMAGE_PATH = process.env.PUBLIC_URL + "/images/profile.jpg";

const STYLE_INNER = {
  AVATAR: {
    height: STYLE.FONT.SIZE * 12,
    width: STYLE.FONT.SIZE * 12,
    filter: "grayscale(100%)",
  },
};

function PageTitle() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={{
        paddingBottom: 2.5,
        marginBottom: 2.5,
        borderBottom: "1px solid #eee",
      }}
    >
      <Avatar alt="Profile" src={PROFILE_IMAGE_PATH} sx={STYLE_INNER.AVATAR} />
      <Stack direction="column" gap={0.5}>
        <Typography variant="h4" sx={{ fontSize: "235%" }}>
          නුවන් ඉ. සේනාරත්න
        </Typography>
        <Typography variant="h4" sx={{ fontSize: "170%" }}>
          நுவன் இ. சேனாரத்ன
        </Typography>
        <Typography variant="h4">Nuwan I. Senaratna</Typography>
        <Typography variant="body1" color="text.secondary">
          Computer scientist, founder, consultant, and investor specializing in
          Artificial Intelligence, Machine Learning and Data Science
        </Typography>
      </Stack>
    </Stack>
  );
}

function PageFooter() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      color="text.secondary"
      justifyContent="center"
      gap={2}
      sx={{ paddingTop: 2.5, marginTop: 2.5, borderTop: "1px solid #f8f8f8" }}
    >
      <Typography variant="caption">"This too shall pass"</Typography>
    </Stack>
  );
}

export default function HomePage() {
  return (
    <Box sx={{ p: 3, maxWidth: 720, margin: "auto" }}>
      <PageTitle />

      <TimelineSection />

      <LinksSection />

      <ProfileSection />
      <PageFooter />
    </Box>
  );
}
