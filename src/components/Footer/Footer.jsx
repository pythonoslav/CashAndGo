import { Box, Typography } from "@mui/material";
// import { Telegram, WhatsApp, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0E0E0E",
        color: "#fff",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
      sx={{
        maxWidth: '1440px',
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        {/* Left Section - Logo and License */}
        <Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            <Box component="span" sx={{ color: "#0073E6" }}>Cash</Box>
            <Box component="span" sx={{ color: "#FF8C00" }}>&Go</Box>
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>
            your Money Exchange License<br /> number is MC225670080
          </Typography>
        </Box>

        {/* Right Section - Contacts and Social Media */}
        <Box sx={{ textAlign: "right" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>КОНТАКТЫ</Typography>
          <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>тел.</Typography>
          <Typography sx={{ fontSize: "14px", color: "#C0C0C0", textDecoration: "underline" }}>e-mail</Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", mt: 2 }}>СОЦИАЛЬНЫЕ СЕТИ</Typography>
          <Box sx={{ display: "flex", justifyContent: "end", gap: "15px", mt: 1 }}>
            {/* <Telegram sx={{ fontSize: 32, color: "#fff" }} />
                    <WhatsApp sx={{ fontSize: 32, color: "#fff" }} />
                    <Instagram sx={{ fontSize: 32, color: "#fff" }} /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
