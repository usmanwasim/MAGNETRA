import { Box, Container, Typography } from "@mui/material";
import React from "react";
import img from "../assets/footerImg.png";
import flogo from "../assets/flogo.png";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import discord from "../assets/discordi.png";

const Footer = () => {
  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Features", path: "#features" },
    { name: "Trading", path: "#trading" },
    { name: "Control", path: "#control" },
    { name: "Tokenomics", path: "#tokenomics" },
    { name: "Technical overview", path: "#overview" },
    { name: "Roadmap", path: "#roadmap" },
    { name: "Whitepaper", path: "/whitepaper.pdf" },
  ];
  return (
    //         {/* Right Gradient Line */}
    //         <Box
    //           sx={{
    //             flex: 1,
    //             height: "2px",
    //             background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
    //             maxWidth: { xs: "60px", sm: "120px", md: "200px" },
    //           }}
    //         />
    //
    <Box
      sx={{
        width: "100%",
        bgcolor: "#090909",
        position: "relative",
        overflowX: "hidden",
        pt: { xs: 4, md: 6 },
        pb: { xs: 1, md: 2 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left Side - Logo and Navigation */}
          <Box sx={{ mb: { xs: 4, md: 0 } }}>
            <Box component="img" src={flogo} width="150px" mb={3} alt="" />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 2, md: 3 },
                mb: { xs: 2, sm: 4 },
              }}
            >
              {navLinks.map(({ name, path }, i) => (
                <Box
                  component={"a"}
                  key={i}
                  href={path}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontWeight: 400,
                    fontSize: { xs: "13px", sm: "17px", md: "20px" },
                    fontFamily: "plus jakarta sans",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {name}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <a
              href="https://x.com/MagnetraDEX/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <XIcon
                sx={{ fontSize: "20px", color: "#Fff", marginRight: "20px" }}
              />
            </a>
            <Box
              component="img"
              src={discord}
              sx={{
                width: "24px",
                height: "24px",
                marginRight: "20px",
                cursor: "pointer",
              }}
            />
            <a
              href="https://t.me/Magnetradex"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <TelegramIcon sx={{ fontSize: "27px", color: "#Fff" }} />
            </a>
          </Box>
          {/* Right Side - Copyright */}
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.05em",
                fontWeight: 400,
                fontSize: { xs: "13px", sm: "17px", md: "23px" },
                fontFamily: "plus jakarta sans",
              }}
            >
              ALL RIGHTS RESERVED
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.05em",
                fontWeight: 400,
                fontSize: { xs: "13px", sm: "17px", md: "23px" },
                fontFamily: "plus jakarta sans",
              }}
            >
              2025
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Decorative 3D Object */}
      <Box
        component={"img"}
        src={img}
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: { xs: "45%", sm: "25%" },
          height: { xs: "300px", md: "450px" },
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Footer;
