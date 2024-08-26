import { Box, Link } from "@mui/material";
import ProfileParagraph from "./ProfileParagraph";
import Title from "./Title";

const QR_CODE_PATH = process.env.PUBLIC_URL + "/images/qr-code.jpg";

export default function ConnectSection() {
  return (
    <Box>
      <Title>How to Connect with Nuwan</Title>
      <ProfileParagraph>
        Please message Nuwan on{" "}
        <Link href="https://www.linkedin.com/in/nuwansenaratna" target="_blank">
          LinkedIn
        </Link>{" "}
        or Scan this QR Code
      </ProfileParagraph>
      <img alt="qr-code" src={QR_CODE_PATH} width={240} />
    </Box>
  );
}
