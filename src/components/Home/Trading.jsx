import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import angleIcon from "../../assets/angleIcon.png";
import bannerImg from "../../assets/bannerImg.png";
import img from "../../assets/tradingImg.png";
import icon1 from "../../assets/tIcon1.png";
import icon2 from "../../assets/tIcon2.png";
import icon3 from "../../assets/tIcon3.png";
import icon4 from "../../assets/tIcon4.png";

const Trading = () => {
  return (
    <Box
      id="trading"
      sx={{
        width: "100%",
        py: { xs: 6, sm: 10, md: 15 },
        position: "relative",
        overflowX: "hidden",
        overflowY: "visible",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            {/* Advanced Trading Tools */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  background:
                    "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  width: "max-content",
                  fontWeight: 400,
                  fontSize: { xs: "17px", sm: "22px", md: "30px" },
                  fontFamily: "plus jakarta sans",
                }}
              >
                Advanced Trading Tools
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <img
                    src={icon1}
                    alt=""
                    style={{ width: "24px", height: "24px", marginTop: "10px" }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        background:
                          "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        width: "max-content",
                        fontWeight: 500,
                        fontSize: { xs: "14px", sm: "18px", md: "24px" },
                        fontFamily: "plus jakarta sans",
                        mb: 1,
                      }}
                    >
                      AI-Powered Trade Suggestions
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontWeight: 400,
                        fontSize: { xs: "13px", sm: "17px", md: "22px" },
                        fontFamily: "plus jakarta sans",
                      }}
                    >
                      Real-time AI-driven analysis for optimal trade execution
                      and portfolio management.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <img
                    src={icon2}
                    alt=""
                    style={{ width: "24px", height: "24px", marginTop: "10px" }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        background:
                          "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        width: "max-content",
                        fontWeight: 500,
                        fontSize: { xs: "14px", sm: "18px", md: "24px" },
                        fontFamily: "plus jakarta sans",
                        mb: 1,
                      }}
                    >
                      Risk Management Analytics
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontWeight: 400,
                        fontSize: { xs: "13px", sm: "17px", md: "22px" },
                        fontFamily: "plus jakarta sans",
                      }}
                    >
                      AI tools to evaluate impermanent loss, portfolio
                      diversification, and liquidity risks.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* User Experience Enhancements */}
            <Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  background:
                    "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  width: "max-content",
                  fontWeight: 400,
                  fontSize: { xs: "17px", sm: "22px", md: "30px" },
                  fontFamily: "plus jakarta sans",
                  maxWidth: "100%",
                }}
              >
                The User Experience Enhancements
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <img
                    src={icon3}
                    alt=""
                    style={{ width: "24px", height: "24px", marginTop: "10px" }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        background:
                          "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        width: "max-content",
                        fontWeight: 500,
                        fontSize: { xs: "14px", sm: "18px", md: "24px" },
                        fontFamily: "plus jakarta sans",
                        mb: 1,
                      }}
                    >
                      Intuitive UX/UI
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontWeight: 400,
                        fontSize: { xs: "13px", sm: "17px", md: "22px" },
                        fontFamily: "plus jakarta sans",
                      }}
                    >
                      The platform prioritizes a clean, accessible interface for
                      a seamless DeFi experience.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <img
                    src={icon4}
                    alt=""
                    style={{ width: "24px", height: "24px", marginTop: "10px" }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        background:
                          "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        width: "max-content",
                        fontWeight: 500,
                        fontSize: { xs: "14px", sm: "18px", md: "24px" },
                        fontFamily: "plus jakarta sans",
                        mb: 1,
                      }}
                    >
                      Notification Features
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontWeight: 400,
                        fontSize: { xs: "13px", sm: "17px", md: "22px" },
                        fontFamily: "plus jakarta sans",
                      }}
                    >
                      Users can opt-in for updates via Email, Telegram, or SMS,
                      ensuring they stay informed about their trades, staking,
                      and liquidity actions.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Social Trading */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(black, black) padding-box, linear-gradient(-90deg, #e561c3, #a261e5) border-box",
                borderRadius: "16px",
                p: 4,
                position: "relative",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  background:
                    "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "plus jakarta sans",
                  fontWeight: 800,
                  fontSize: { xs: "24px", sm: "36px", md: "58px" },
                  width: "max-content",
                }}
              >
                <span style={{ fontWeight: 500 }}>Social</span>
                <br />
                Trading
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {[
                  {
                    title: "Copy Trading",
                    description:
                      "Users can follow and replicate the strategies of successful traders directly on the DEX.",
                  },
                  {
                    title: "Trader Leaderboards",
                    description:
                      "Highlight top-performing traders based on metrics like ROI, trade volume, and win rate.",
                  },
                  {
                    title: "Sentiment Analysis",
                    description:
                      "AI tracks market sentiment from news & social media, providing traders with additional insights.",
                  },
                  {
                    title: "Interactive Community Portfolio",
                    description:
                      "Traders can create and share token baskets, enabling collaborative trading strategies.",
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}
                  >
                    <Box
                      component={"img"}
                      src={angleIcon}
                      sx={{ width: "15px", mt: 1.5 }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 0.5,
                          background:
                            "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontFamily: "plus jakarta sans",
                          fontWeight: 500,
                          fontSize: { xs: "14px", sm: "18px", md: "24px" },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: 400,
                          fontSize: { xs: "13px", sm: "16px", md: "22px" },
                          fontFamily: "plus jakarta sans",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Decorative 3D Objects */}
              <Box
                component="img"
                src={img}
                alt="Decorative 3D Objects"
                sx={{
                  position: "absolute",
                  top: { xs: "-50px", md: "-120px" },
                  right: { xs: "-50px", md: "-100px" },
                  width: { xs: "200px", md: "400px" },
                  height: "auto",
                  transform: "rotate(15deg)",

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
            </Box>
          </Grid>
        </Grid>

        {/* Bottom MEV Card */}
        <Box sx={{ mt: 6 }}>
          <Box
            sx={{
              background: `url("${bannerImg}") `,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: 4 }}>
              <Grid
                container
                spacing={4}
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      mb: 2,
                      fontWeight: 500,
                      fontSize: { xs: "24px", sm: "36px", md: "58px" },
                      fontFamily: "Plus Jakarta Sans",
                    }}
                  >
                    In-Protocol MEV Capture
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={5}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        mb: 2,
                        fontWeight: 700,
                        fontSize: { xs: "16px", sm: "20px", md: "26px" },
                        fontFamily: "plus jakarta sans",
                      }}
                    >
                      Community-Centric MEV Distribution
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", sm: "18px", md: "22px" },
                        fontFamily: "plus jakarta sans",
                      }}
                    >
                      The DEX captures Miner Extractable Value (MEV) and
                      redistributes it to the community, reducing front-running
                      risks & creating a fairer trading environment.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Trading;
