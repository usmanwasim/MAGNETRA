import { Box, Container, Typography } from "@mui/material";
import React from "react";
import img from "../assets/footerImg.png";

const Footer = () => {
  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Features", path: "#features" },
    { name: "Trading", path: "#trading" },
    { name: "Control", path: "#control" },
    { name: "Tokenomics", path: "#tokenomics" },
    { name: "Technical overview", path: "#overview" },
    { name: "Roadmap", path: "#roadmap" },
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
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.1em",
                mb: 3,
              }}
            >
              MAGNETRA
            </Typography>
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
                    fontSize: { xs: "13px", sm: "17px", md: "23px" },
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
