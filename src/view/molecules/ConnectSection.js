import { Box, Link } from "@mui/material";
import Title from "./Title";

const QR_CODE_PATH = process.env.PUBLIC_URL + "/images/qr-code.jpg";

export default function ConnectSection() {
  return (
    <Box>
      <Title>Scan this QR Code to Connect with me</Title>
      <Box sx={{textAlign: "center"}}>
      <img alt="qr-code" src={QR_CODE_PATH} width={240} />
    </Box>
    </Box>  
  );
}
