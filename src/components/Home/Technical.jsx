import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import img from "../../assets/featureBorder.png";
import img1 from "../../assets/toImg.png";
import banner from "../../assets/toBannerImg.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Technical = () => {
  return (
    <Box id="overview" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
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
                background: "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 400,
                width: "max-content",
              }}
            >
              Technical Overview
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

        <Grid
          container
          sx={{ my: { xs: 0, sm: 7, md: 10 } }}
          spacing={{ xs: 5, md: 0 }}
        >
          <Grid item xs={12} md={3.5}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: { xs: 5, md: 0 },
              }}
            >
              {[
                {
                  title: "Built on Magnetra Chain",
                  description:
                    "Leveraging scalable, secure infrastructure for fast and cost-efficient transactions.",
                },
                {
                  title: "AI Integration",
                  description:
                    "Delivering personalized trading insights and automated strategies.",
                },
                {
                  title: "Security",
                  description:
                    "Industry-standard audits and on-chain monitoring to ensure user fund safety.",
                },
              ].map((item, i) => (
                <Box key={i} sx={{ textAlign: { xs: "left", md: "right" } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: "14px", sm: "18px", md: "24px" },
                      background:
                        "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 500,
                      width: "max-content",
                      fontFamily: "plus jakarta sans",
                      ml: { xs: 0, md: "auto" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "16px", md: "22px" },
                      lineHeight: 1.7,
                      fontWeight: 400,
                      fontFamily: "plus jakarta sans",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
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
                gap: { xs: 5, md: 0 },
              }}
            >
              {[
                {
                  title: "CosmWasm Smart Contracts",
                  description:
                    "Powering trading, staking, and governance with high customizability and interoperability.",
                },
                {
                  title: "Cross-Chain Interoperability",
                  description:
                    "Enabled by IBC for seamless trading across ecosystems.",
                },
                {
                  title: "Developer-Friendly",
                  description:
                    "Open APIs and SDKs to foster third-party integrations and ecosystem growth.",
                },
              ].map((item, i) => (
                <Box key={i}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: "14px", sm: "18px", md: "24px" },
                      background:
                        "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 500,
                      width: "max-content",
                      maxWidth: "100%",
                      fontFamily: "plus jakarta sans",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "16px", md: "22px" },
                      fontWeight: 400,
                      fontFamily: "plus jakarta sans",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Future Add-ons Banner */}
        <Box
          sx={{
            background: `url("${banner}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 100%",
            backgroundSize: { xs: "200% 100%", md: "100% 100%" },
            borderRadius: "10px",
            p: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 3, md: 6 },
            my: { xs: 5, sm: 7, md: 10 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              whiteSpace: "nowrap",
              fontSize: { xs: "26px", sm: "30px", md: "47px" },
              fontWeight: 700,
              fontFamily: "plus jakarta sans",
            }}
          >
            Future <span style={{ fontWeight: 400 }}>Add-ons</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1, sm: 2, md: 3 },
              justifyContent: "center",
            }}
          >
            {["Lending and borrowing", "Derivatives Trading", "Launchpad"].map(
              (item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: { xs: "13px", sm: "16px", md: "22px" },
                    fontWeight: 400,
                    fontFamily: "plus jakarta sans",
                  }}
                >
                  <ChevronRightIcon size={20} />
                  <Typography variant="body1">{item}</Typography>
                </Box>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Technical;
