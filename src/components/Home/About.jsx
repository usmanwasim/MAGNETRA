import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import img from "../../assets/aboutImg.png";
import imgBorder from "../../assets/aboutBorder.png";

const About = () => {
  return (
    <>
      <Box
        id="about"
        sx={{
          width: "100%",
          py: { xs: 4, sm: 6, md: 8 },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          {/* Introduction Text */}
          <Box
            sx={{
              my: { xs: 4, sm: 6, md: 10 },
              px: { xs: 0, sm: 2, md: 7, lg: 10 },
              maxWidth: "lg",
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "18px", md: "24px" },
                fontFamily: "plus jakarta sans",
                lineHeight: 1.7,
                textAlign: "center",
                "& .highlight": {
                  background:
                    "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600,
                },
              }}
            >
              As the first decentralized exchange and liquidity hub on Magnetra
              – a scalable, interoperable ecosystem powered by advanced smart
              contract capabilities –{" "}
              <span className="highlight">The Magnetra Dex</span> serves as the
              gateway for tokenized real-world assets, innovative DeFi solution,
              and cross-chain interactions. By leveraging the Inter-blockchain
              communication protocol (IBC),
              <span className="highlight">The Magnetra Dex</span> connects
              chains to the broader blockchain universe, fostering growth,
              accessibility, and collaboration across ecosystems.
            </Typography>
          </Box>

          {/* Why Our DEX Matters Section */}
          <Box
            sx={{
              my: { xs: 4, sm: 6, md: 10 },
              p: 4,
              borderRadius: "12px",
              border: "1px solid transparent",
              background:
                "linear-gradient(black, black) padding-box, linear-gradient(90deg, #e561c3, #a261e5) border-box",
              position: "relative",
              // overflowX: "hidden",
            }}
          >
            <Box
              component={"img"}
              src={img}
              sx={{
                position: "absolute",
                bottom: { xs: -70, sm: -100 },
                right: { xs: -40, sm: -60 },
                width: { xs: "250px", md: "300px", lg: "350px" },
                animation: "float 6s ease-in-out infinite",
                "@keyframes float": {
                  "0%": { transform: "translateY(0px)" },
                  "25%": { transform: "translateY(-10px)" },
                  "50%": { transform: "translateY(0px)" },
                  "75%": { transform: "translateY(10px)" },
                  "100%": { transform: "translateY(0px)" },
                },
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "24px", md: "30px" },
                fontFamily: "plus jakarta sans",
                mb: 2,
                background: "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
                width: "max-content",
              }}
            >
              Why Our DEX Matters
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "16px", md: "22px" },
                fontFamily: "plus jakarta sans",
                lineHeight: 1.7,
                color: "#rgba(255, 255, 255, 0.9)",
              }}
            >
              There is no DEX or DeFi platform on the Magnetra chain, making it
              difficult for projects to launch tokens and build within the
              ecosystem. This limits the growth of the Magnetra ecosystem. Our
              DEX will unlock the first DeFi infrastructure layer for Magnetra,
              enabling projects to launch tokens and providing a gateway for
              tokenized real-world assets, making them more accessible on-chain.
            </Typography>
            {/* Vision and Mission Grid */}
            <Grid
              container
              spacing={5}
              alignItems="center"
              sx={{ my: { xs: 3, sm: 4, md: 5 } }}
            >
              {/* Vision Section */}
              <Grid item xs={12} md={5}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "18px", sm: "24px", md: "30px" },
                      fontFamily: "plus jakarta sans",
                      background:
                        "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 400,
                      width: "max-content",
                    }}
                  >
                    Vision
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "16px", md: "22px" },
                      lineHeight: 1.7,
                      fontFamily: "plus jakarta sans",
                    }}
                  >
                    Empower the Magnetra ecosystem by fostering growth, enabling
                    innovation & unlocking the potential of tokenized assets.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={0}
                md={1}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Box
                  component="img"
                  src={imgBorder}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Grid>

              {/* Mission Section */}
              <Grid item xs={12} md={5}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "18px", sm: "24px", md: "30px" },
                      background:
                        "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 400,
                      width: "max-content",
                      fontFamily: "plus jakarta sans",
                    }}
                  >
                    Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "13px", sm: "16px", md: "22px" },
                      lineHeight: 1.7,
                      fontFamily: "plus jakarta sans",
                    }}
                  >
                    Provide a decentralized platform that drives liquidity,
                    attracts projects, & accelerate ecosystem expansion.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
