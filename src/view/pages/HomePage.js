import { Avatar, Box, Link, Stack, Typography } from "@mui/material";
import { VERSION } from "../../nonview/constants";
import { LinksSection, ProfileSection } from "../../view/molecules";

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

const REMOTE_URL = "https://www.nuwan.org";

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
        <Typography variant="h5">நுவன் இ. சேனாரத்ன</Typography>
        <Typography variant="h5">Nuwan I. Senaratna</Typography>
        <Typography variant="body1">
          I help organisations use AI in ways that actually solve problems, not
          just follow trends.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Most of my work is about making messy data useful, improving how
          decisions get made, and building systems that scale in the real world.
          I split my time between Sri Lanka and the Bay Area, and I invest in
          founders who are building practical, grounded AI products. Before this
          I spent several years at Facebook building large scale AI systems.
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
      <QRCode size={256} value={REMOTE_URL} />
      <Link
        href={REMOTE_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#000", textDecoration: "none" }}
      >
        <Typography variant="h6">{REMOTE_URL}</Typography>{" "}
      </Link>
      <Typography variant="caption">v{VERSION.DATETIME_STR}</Typography>{" "}
      <Typography variant="caption" sx={{ color: "#eee" }}>
        "This too shall pass."
      </Typography>
    </Stack>
  );
}

export default function HomePage() {
  return (
    <Box sx={{ p: 3, maxWidth: 640, margin: "auto" }}>
      <PageTitle />

      <LinksSection />
      <ProfileSection />

      <PageFooter />
    </Box>
  );
}
