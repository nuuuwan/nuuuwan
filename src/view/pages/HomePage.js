import { Avatar, Box, Divider, Link, Stack, Typography } from "@mui/material";
import { VERSION } from "../../nonview/cons";
import { LinksSection, ProfileSection } from "../../view/molecules";

import QRCode from "react-qr-code";

const PROFILE_IMAGE_PATH =
  process.env.PUBLIC_URL + "/images/nuwans.profile.jpg";

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
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          backgroundColor: "black",
          width: "fit-content",
          padding: 0.1,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Nuwan I. Senaratna
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "fit-content",
          padding: 0.1,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Computer Scientist, Investor, Consultant
      </Typography>
      <Divider sx={{ marginY: 2 }} />
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
        <Avatar
          alt="Profile"
          src={PROFILE_IMAGE_PATH}
          sx={STYLE_INNER.AVATAR}
        />
        <Stack direction="column" gap={0}>
          <Typography
            variant="body2"
            sx={{
              p: 1,
              backgroundColor: "#f8f8f8",
              borderRadius: 1,
            }}
          >
            I help organisations use AI that actually works. I take messy data,
            make it useful, and build systems that improve real decisions. I
            split my time between Sri Lanka and the Bay Area, and I invest in
            founders building practical AI. Before this I built large scale AI
            systems at Facebook.
          </Typography>
        </Stack>
      </Stack>
    </Box>
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
