import React from "react";
import { Box, Typography, Container, Grid, Card } from "@mui/material";
import icon1 from "../../assets/gIcon1.png";
import icon2 from "../../assets/gIcon2.png";
import icon3 from "../../assets/gIcon3.png";
import utilityImg1 from "../../assets/utilityImg1.png";
import utilityImg2 from "../../assets/utilityImg2.png";

const FeatureCard = ({ icon, title, description }) => (
  <Card
    sx={{
      border: "1px solid transparent",
      background:
        "linear-gradient(black, black) padding-box, linear-gradient(-90deg, #e561c3, #a261e5) border-box",
      borderRadius: "16px",
      p: 3,
      height: "100%",
      display: "flex",
      //   flexDirection: "column",
      gap: 2,
      transition: "all 0.3s ease",
      "&:hover": {
        background:
          "linear-gradient(black, black) padding-box, linear-gradient(90deg, #e561c3, #a261e5) border-box",
        transform: "translateY(-2px)",
      },
    }}
  >
    <Box>
      <Box component={"img"} src={icon} alt="" sx={{ width: "25px", mt: 1 }} />
    </Box>
    <Box>
      <Typography
        variant="h6"
        sx={{
          background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          width: "max-content",
          maxWidth: "100%",
          fontWeight: 500,
          fontSize: { xs: "14px", sm: "18px", md: "24px" },
          fontFamily: "plus jakarta sans",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "rgba(255,255,255,0.8)",
          fontWeight: 500,
          fontSize: { xs: "13px", sm: "16px", md: "24px" },
          fontFamily: "plus jakarta sans",
        }}
      >
        {description}
      </Typography>
    </Box>
  </Card>
);

const SecurityCard = ({ image, title, description }) => (
  <Card
    sx={{
      border: "1px solid transparent",
      background:
        "linear-gradient(black, black) padding-box, linear-gradient(-90deg, #e561c3, #a261e5) border-box",
      borderRadius: "16px",
      p: 3,
      height: { xs: "auto", md: "100%" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: { xs: 0, sm: 3 },
      textAlign: "center",
      transition: "all 0.3s ease",
      "&:hover": {
        background:
          "linear-gradient(black, black) padding-box, linear-gradient(90deg, #e561c3, #a261e5) border-box",
        transform: "translateY(-2px)",
      },
    }}
  >
    <Box
      component="img"
      src={image}
      alt="Security Feature"
      sx={{
        width: "100%",
        height: { xs: "200px", sm: "300px" },
        maxWidth: "400px",
        objectFit: "contain",
        animation: "float 6s ease-in-out infinite",
        "@keyframes float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      }}
    />
    <Typography
      variant="h6"
      sx={{
        background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        width: "max-content",
        maxWidth: "100%",
        fontWeight: 500,
        fontSize: { xs: "14px", sm: "18px", md: "24px" },
        fontFamily: "plus jakarta sans",
        mb: 1,
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: "rgba(255,255,255,0.8)",
        fontWeight: 500,
        fontSize: { xs: "13px", sm: "16px", md: "24px" },
        fontFamily: "plus jakarta sans",
      }}
    >
      {description}
    </Typography>
  </Card>
);

const Governance = () => {
  return (
    <Box
      id="control"
      sx={{
        width: "100%",
        bgcolor: "#000000",
        color: "#fff",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Governance & Token Utility Section */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: "max-content",
                fontWeight: 400,
                fontSize: { xs: "17px", sm: "23px", md: "30px" },
                fontFamily: "plus jakarta sans",
              }}
            >
              Governance & Token Utility
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <FeatureCard
                icon={icon1}
                title="Governance Rights"
                description="Token holders can vote on DEX policies, fee structures, and reward distribution."
              />
              <FeatureCard
                icon={icon2}
                title="Fee Reductions"
                description="Reduced transaction fees for users holding or staking the platform's native token."
              />
              <FeatureCard
                icon={icon3}
                title="Active Governance System"
                description="A highly dynamic on-chain governance system ensures token holders can propose & vote on protocol updates frequently."
              />
            </Box>
          </Grid>

          {/* Security & Compliance Section */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: "max-content",
                fontWeight: 400,
                fontSize: { xs: "17px", sm: "23px", md: "30px" },
                fontFamily: "plus jakarta sans",
                mx: { xs: "none", md: "auto" },
              }}
            >
              Security & Compliance
            </Typography>
            <Grid container spacing={{ xs: 3, md: 5 }}>
              <Grid item xs={12} md={6}>
                <SecurityCard
                  image={utilityImg1}
                  title="AI-Powered Fraud Detection"
                  description="Real-time monitoring of suspicious activities, ensuring a secure trading environment."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <SecurityCard
                  image={utilityImg2}
                  title="AI-Powered Fraud Detection"
                  description="Real-time monitoring of suspicious activities, ensuring a secure trading environment."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Governance;
