import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import angle from "../../assets/angleIcon.png";
import img1 from "../../assets/rImg1.png";
import img2 from "../../assets/rImg2.png";
import roadmapImg from "../../assets/roadmapImg.png";
import rBanner from "../../assets/rBanner.png";
const RoadmapPhase = ({ quarter, title, subtitle, items }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}>
      {quarter}
    </Typography>
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          mb: 1,
          fontWeight: 400,
          fontSize: { xs: "18px", sm: "24px", md: "30px" },
          fontFamily: "plus jakarta sans",
        }}
      >
        {title} <br />
        <span
          style={{
            background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          {subtitle}
        </span>
      </Typography>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <img src={angle} alt="" style={{ width: "15px" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "11px", sm: "13px", md: "15px" },
              fontFamily: "plus jakarta sans",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);
const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2024",
      title: "Foundation &",
      subtitle: "Development",
      items: [
        "Project research, analysis, and planning",
        "Initial DEX infrastructure development",
        "Smart contract design and security audit begin",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Liquidity & User",
      subtitle: "Growth",
      items: [
        "Staking and yield farming integration",
        "Social trading feature rollout",
        "Liquidity incentives and reward programs",
        "Beta Testing for AI trading tools & Web trading",
      ],
    },
    {
      quarter: "Q5 2025",
      title: "Cross-Chain &",
      subtitle: "Governance",
      items: [
        "Governance features and DAO implementation",
        "Institutional-grade security measures",
        "Continued ecosystem growth and optimizations",
      ],
    },
  ];
  const phases1 = [
    {
      quarter: "Q1 2025",
      title: "Core DEX Launch &",
      subtitle: "Token Release",
      items: [
        "Launch of core DEX functionalities (swaps, liquidity pools)",
        "First strategic partnerships and integrations",
        "UI/UX development and beta testing",
        "Token Launch & Distribution",
        "Brand Awareness",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Advanced Trading &",
      subtitle: "Cross-Chain Expansion",
      items: [
        "Cross-Chain Development & Security Audits",
        "Tokenized real-world asset (RWA) trading goes live",
        "AI-powered trading tools and analytics",
        "Expansion of partnerships",
        "RWA Trading community growth",
      ],
    },
  ];
  return (
    <Box
      id="roadmap"
      sx={{
        width: "100%",
        position: "relative",
        // overflow: "hidden",
      }}
    >
      {/* Header with Gradient Background */}
      <Box
        sx={{
          width: "100%",
          background: `url("${rBanner}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          py: { xs: 5, sm: 8, md: 10, lg: 15 },
          position: "relative",
          mb: { xs: 6, md: 8 },
          zIndex: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            The Roadmap
          </Typography>
        </Container>
      </Box>

      {/* 3D Object */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          mb: { xs: 4, md: 6 },
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={img1}
          alt="Roadmap Decoration"
          sx={{
            width: { xs: "200px", sm: "300px", md: "400px" },
            mt: { xs: -10, sm: -15, md: -18 },
            height: "auto",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
              "100%": { transform: "translateY(0px)" },
            },
          }}
        />
      </Box>
      <Box sx={{ py: { xs: 7, sm: 12, md: 17 }, position: "relative" }}>
        <Box
          component="img"
          src={img2}
          alt="Roadmap Decoration"
          sx={{
            zIndex: -1,
            position: "absolute",
            left: 0,
            bottom: -30,
            width: { xs: "200px", sm: "300px", md: "400px" },
            height: "auto",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
              "100%": { transform: "translateY(0px)" },
            },
          }}
        />
        {/* Phases Content */}
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {phases.map((phase, index) => (
              <Grid item xs={12} md={4} key={index}>
                <RoadmapPhase {...phase} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          component={"img"}
          src={roadmapImg}
          sx={{
            width: "100%",
            display: { xs: "none", md: "flex" },
            mt: { xs: -10, md: -15, lg: -17 },
            mb: { xs: -8, md: -12, lg: -15 },
          }}
        />
        <Container>
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {phases1.map((phase, index) => (
              <Grid item xs={12} md={4} key={index}>
                <RoadmapPhase {...phase} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Roadmap;
