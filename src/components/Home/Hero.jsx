import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/heroImg.png";
import vector from "../../assets/vector.png";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ minHeight: { xs: "auto", md: "60vh" } }}
        >
          {/* Left Content */}
          <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>
            <Box
              sx={{
                py: { xs: 4, md: 8 },
                px: { xs: 2, md: 4 },
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: "1rem", sm: "1.7rem" },
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                MAGNETRA
              </Typography>

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                  lineHeight: 1.1,
                  mb: 1,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Cross-chain
              </Typography>

              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                  lineHeight: 1.1,
                  mb: 4,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Defi hub
              </Typography>
            </Box>
          </Grid>

          {/* Right Content - 3D Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={img}
              alt="3D Cube Visualization"
              sx={{
                maxWidth: { xs: "80%", sm: "70%", md: "100%" },
                height: "auto",
                objectFit: "contain",
                transform: { xs: "scale(0.8)", md: "scale(1)" },
                animation: "float 6s ease-in-out infinite",
                "@keyframes float": {
                  "0%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-20px)" },
                  "100%": { transform: "translateY(0px)" },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          background: "linear-gradient(0deg, #843CCB -21.43%, #FF8CD0 113.08%)",
          fontFamily: "plus jakarta sans",
          fontSize: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
          textTransform: "uppercase",
          py: { xs: 3, sm: 4, md: 5 },
          display: "flex",
          gap: { xs: 2, sm: 3.5, md: 5 },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          color: "transparent",
          WebkitTextStroke: "1px #ffffff",
        }}
      >
        <span>BASED ON</span>
        <Box
          component={"img"}
          src={vector}
          alt=""
          sx={{
            width: { xs: "200px", sm: "350px", md: "400px" },
            height: { xs: "40px", sm: "60px", md: "75px", lg: "90px" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
