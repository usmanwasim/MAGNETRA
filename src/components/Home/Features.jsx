import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import img from "../../assets/featureBorder.png";
import img1 from "../../assets/feature.png";
import icon1 from "../../assets/ficon1.png";
import icon2 from "../../assets/ficon2.png";
import icon3 from "../../assets/ficon3.png";

const FeatureCard = ({ title, description, icon }) => (
  <Card
    sx={{
      background: "linear-gradient(-135deg, #e561c3 0%, #a261e5 100%)",
      borderRadius: "16px",
      height: "100%",
      textAlign: "left",
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={icon} style={{ width: "40px", marginLeft: "auto" }} />
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: "white",
          mb: 2,
          mt: -2,
          fontWeight: 700,
          fontSize: { xs: "16px", sm: "20px", md: "26px" },
          fontFamily: "plus jakarta sans",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: { xs: "14px", sm: "18px", md: "22px" },
          fontFamily: "plus jakarta sans",
          fontWeight: 400,
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const Features = () => {
  return (
    <Box id="features" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            width: "100%",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={img}
            sx={{
              flex: 1,
              height: "max-content",
              boxSizing: "border-box",
              "& img": { width: "100%" },
            }}
          />
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "24px", md: "30px" },
                fontWeight: 700,
                fontFamily: "plus jakarta sans",
                background: "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: "max-content",
              }}
            >
              Features of the DEX on Magnetra
            </Typography>{" "}
          </Box>
          <Box
            component="img"
            src={img}
            sx={{
              rotate: "180deg",
              flex: 1,
              height: "max-content",
              boxSizing: "border-box",
              "& img": { width: "100%" },
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "18px", md: "24px" },
            lineHeight: 1.7,
            textAlign: "center",
            fontWeight: 600,
            fontFamily: "plus jakarta sans",
          }}
        >
          CORE DEX FEATURES
        </Typography>

        <Grid
          container
          sx={{ mt: { xs: 0, md: -5 } }}
          spacing={{ xs: 5, md: 0 }}
        >
          <Grid item xs={12} md={3.5}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                py: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "15px", sm: "20px", md: "26px" },
                    background:
                      "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 400,
                    width: "max-content",
                    ml: { xs: 0, md: "auto" },
                    fontFamily: "plus jakarta sans",
                  }}
                >
                  Cross-Chain Swaps
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.7,
                    fontSize: { xs: "13px", sm: "16px", md: "22px" },
                    fontFamily: "plus jakarta sans",
                    fontWeight: 400,
                  }}
                >
                  Leveraging the Inter-Blockchain Communication (IBC) protocol
                  to enable seamless token swaps between Cosmos-based and other
                  compatible blockchains.
                </Typography>
              </Box>
              <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "15px", sm: "20px", md: "26px" },
                    background:
                      "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 400,
                    width: "max-content",
                    ml: { xs: 0, md: "auto" },
                    fontFamily: "plus jakarta sans",
                  }}
                >
                  Yield Farming
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.7,
                    fontSize: { xs: "13px", sm: "16px", md: "22px" },
                    fontFamily: "plus jakarta sans",
                    fontWeight: 400,
                  }}
                >
                  Incentives for liquidity providers through staking and farming
                  mechanisms.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component={"img"}
              src={img1}
              sx={{ width: "100%", maxWidth: { xs: "500px" }, height: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                py: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "15px", sm: "20px", md: "26px" },
                    background:
                      "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 400,
                    width: "max-content",
                    maxWidth: "100%",
                    fontFamily: "plus jakarta sans",
                  }}
                >
                  Automated Market Maker (AMM)
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.7,
                    fontSize: { xs: "13px", sm: "16px", md: "22px" },
                    fontFamily: "plus jakarta sans",
                    fontWeight: 400,
                  }}
                >
                  A decentralized system for trading token pairs using liquidity
                  pools.
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "15px", sm: "20px", md: "26px" },
                    background:
                      "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 400,
                    width: "max-content",
                    fontFamily: "plus jakarta sans",
                  }}
                >
                  Liquidity Provisioning
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.7,
                    fontSize: { xs: "13px", sm: "16px", md: "22px" },
                    fontFamily: "plus jakarta sans",
                    fontWeight: 400,
                  }}
                >
                  Users can add liquidity to pools and earn fees and token
                  rewards.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ my: 6, textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              mb: { xs: 5, sm: 7, md: 10 },
              background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "18px", sm: "24px", md: "30px" },
              fontWeight: 700,
              fontFamily: "plus jakarta sans",
            }}
          >
            Tokenized Real World Assets (RWAS)
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FeatureCard
                title="The RWA Trading"
                description="Facilitate the trading of tokenized versions of real-world assets, such as real estate, commodities, and equities."
                icon={icon1}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard
                title="Regulatory Support"
                description="Built-in compliance mechanisms to ensure the trading of RWAs aligns with global regulations."
                icon={icon2}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard
                title="Security Custody Solutions"
                description="Partner with trusted custody providers for on-chain representation of physical assets."
                icon={icon3}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
