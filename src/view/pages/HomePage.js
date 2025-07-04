import { Avatar, Box, Stack, Typography } from "@mui/material";

import {
  LinksSection,
  ProfileSection,
  VisionSection,
} from "../../view/molecules";

import QRCode from "react-qr-code";

const PROFILE_IMAGE_PATH =
  process.env.PUBLIC_URL + "/images/nuwans.profile.jpeg";

const STYLE_INNER = {
  AVATAR: {
    height: 128,
    width: 128,
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
        <Typography variant="h5">නුවන් ඉ. සේනාරත්න</Typography>
        <Typography variant="h6">நுவன் இ. சேனாரத்ன</Typography>
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
      direction="column"
      alignItems="center"
      color="text.secondary"
      justifyContent="center"
      gap={2}
      sx={{ paddingTop: 2.5, marginTop: 2.5, borderTop: "1px solid #f8f8f8" }}
    >
      <QRCode size={256} value={"https://www.nuwan.org"} />
      <Typography variant="caption">"This too shall pass"</Typography>
    </Stack>
  );
}

export default function HomePage() {
  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: "auto" }}>
      <PageTitle />

      <LinksSection />
      <ProfileSection />
      <VisionSection />

      <PageFooter />
    </Box>
  );
}
