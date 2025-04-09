import {
  Box,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import bannerImg from "../../assets/pBannerImg.png";
import img from "../../assets/featureBorder.png";
import pImg from "../../assets/pImg.png";
import icon1 from "../../assets/pIcon1.png";
import icon2 from "../../assets/pIcon2.png";
import icon3 from "../../assets/pIcon3.png";

const IntegrationCard = ({ icon, title, description }) => (
  <Box
    sx={{
      height: { xs: "auto", md: "100%" },
      border: "2px solid transparent",
      borderBottom: "2px solid #000",
      background:
        "linear-gradient(black, black) padding-box, linear-gradient(-90deg, #e561c3, #a261e5) border-box",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      px: 3,
      pt: 3,
      pb: { xs: 3, md: 0 },
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Box sx={{ textAlign: "right" }}>
      <Box component={"img"} src={icon} sx={{ width: "25px" }} />
    </Box>
    <Typography
      variant="h6"
      sx={{
        background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        width: "max-content",
        maxWidth: "100%",
        mb: 2,
        fontWeight: 500,
        fontSize: { xs: "14px", sm: "18px", md: "24px" },
        fontFamily: "plus jakarta sans",
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        color: "rgba(255,255,255,0.8)",
        fontWeight: 500,
        fontSize: { xs: "13px", sm: "17px", md: "22px" },
        fontFamily: "plus jakarta sans",
      }}
    >
      {description}
    </Typography>
  </Box>
);

const TokenAllocationItem = ({ percentage, description }) => (
  <Box sx={{ display: "flex", gap: 1, mb: 3, alignItems: "center" }}>
    <Box
      sx={{
        width: { xs: 40, sm: 60, md: 80 },
        height: { xs: 40, sm: 60, md: 80 },
        borderRadius: "50%",
        border: "2px solid transparent",
        background:
          "linear-gradient(black, black) padding-box, linear-gradient(-90deg, #e561c3, #a261e5) border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "plus jakarta sans",
        fontWeight: 500,
        fontSize: { xs: "14px", sm: "17px", md: "20px" },
      }}
    >
      {percentage}%
    </Box>
    <Typography
      variant="body2"
      sx={{
        color: "rgba(255,255,255,0.8)",
        flex: 1,
        fontWeight: 500,
        fontSize: { xs: "14px", sm: "18px", md: "22px" },
        fontFamily: "plus jakarta sans",
      }}
    >
      {description}
    </Typography>
  </Box>
);

const Partnership = () => {
  return (
    <Box
      id="tokenomics"
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            width: "max-content",
            fontWeight: 500,
            fontSize: { xs: "20px", sm: "26px", md: "34px" },
            fontFamily: "plus jakarta sans",
          }}
        >
          Integrations & partnerships
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <IntegrationCard
              icon={icon1}
              title="Mantra Ecosystem"
              description="Built on the Mantra ecosystem, our DEX will seamlessly integrate with other projects in the ecosystem, enhancing overall platform utility."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <IntegrationCard
              icon={icon2}
              title="Cross-Chain Interoperability"
              description="By utilizing technologies like IBC (Inter-Blockchain Communication), our DEX will enable cross-chain trading, opening doors to a wider range of assets and users."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <IntegrationCard
              icon={icon3}
              title="Strategic Partnerships"
              description="Collaborations with leading projects and liquidity providers will ensure robust token offerings and increase platform credibility."
            />
          </Grid>
        </Grid>

        {/* banner saction  */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {/* Token Utility Banner */}
            <Box
              sx={{
                background: "linear-gradient(-135deg, #e561c3 0%, #a261e5 70%)",
                borderRadius: "16px",
                p: 4,
                mb: 6,
                position: "relative",
                // overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={bannerImg}
                alt="Token Utility Decoration"
                sx={{
                  position: "absolute",
                  right: { xs: 0, md: -60 },
                  top: { xs: "55%", sm: "35%", md: "45%" },
                  transform: "translateY(-50%)",
                  width: { xs: "65%", sm: "55%", md: "50%" },
                  height: "auto",
                  //   display: { xs: "none", md: "block" },
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  mb: 3,
                  fontWeight: 500,
                  fontSize: { xs: "24px", sm: "36px", md: "58px" },
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Token Utility
              </Typography>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <List>
                    {[
                      "Governance Rights",
                      "Staking Rewards",
                      "Liquidity Incentives",
                    ].map((item) => (
                      <ListItem
                        key={item}
                        sx={{
                          color: "#fff",
                          py: 1,
                          fontWeight: 500,
                          fontSize: { xs: "14px", sm: "18px", md: "24px" },
                          fontFamily: "plus jakarta sans",
                        }}
                      >
                        <ChevronRightIcon
                          size={16}
                          style={{ marginRight: 8 }}
                        />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <List>
                    {[
                      "Access to New Features",
                      "Yield Farming",
                      "Ecosystem Utility (Fee benefits)",
                    ].map((item) => (
                      <ListItem
                        key={item}
                        sx={{
                          color: "#fff",
                          py: 1,
                          fontWeight: 500,
                          fontSize: { xs: "14px", sm: "18px", md: "24px" },
                          fontFamily: "plus jakarta sans",
                        }}
                      >
                        <ChevronRightIcon
                          size={16}
                          style={{ marginRight: 8 }}
                        />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Box>

            {/*  */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box>
                <TokenAllocationItem
                  percentage={20}
                  description="Team, advisors, and development (vested over 1-3 years)"
                />
                <TokenAllocationItem
                  percentage={25}
                  description="Staking rewards and liquidity mining (distributed gradually over time)"
                />
                <TokenAllocationItem
                  percentage={15}
                  description="Community incentives (airdrops, promotions, and bounty programs)"
                />
              </Box>
              <Box>
                <TokenAllocationItem
                  percentage={20}
                  description="Ecosystem development and strategic partnerships"
                />
                <TokenAllocationItem
                  percentage={10}
                  description="The DAO treasury (to fund future governance and project proposals)"
                />
                <TokenAllocationItem
                  percentage={10}
                  description="Token sale (public or private sale, depending on the strategy, if not added to pool)"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                border: "2px solid transparent",
                borderBottom: "3px solid #000",
                background:
                  "linear-gradient(black, black) padding-box, linear-gradient(-90deg, #e561c3, #a261e5) border-box",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                borderRadius: "16px",
                p: 3,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  background:
                    "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "plus jakarta sans",
                  fontWeight: 500,
                  fontSize: { xs: "24px", sm: "36px", md: "56px" },
                  width: "max-content",
                  mx: "auto",
                  mb: 2,
                }}
              >
                Tokenomics
              </Typography>
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
                      background:
                        "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      width: "max-content",
                      fontSize: { xs: "14px", sm: "18px", md: "22px" },
                      fontFamily: "plus jakarta sans",
                    }}
                  >
                    TOTAL SUPPLY
                  </Typography>{" "}
                </Box>
                <Box
                  component="img"
                  src={img}
                  sx={{
                    rotate: "180deg",
                    flex: 1,
                    // width: "100%",
                    height: "max-content",
                    boxSizing: "border-box",
                    "& img": { width: "100%" },
                  }}
                />
              </Box>
              <Box
                component={"img"}
                src={pImg}
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                  animation: "scale 3s ease infinite",
                  "@keyframes scale": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                    "100%": { transform: "scale(1)" },
                  },
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  background:
                    "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  width: "max-content",
                  fontWeight: 500,
                  maxWidth: "100%",
                  fontSize: { xs: "17px", sm: "24px", md: "30px" },
                  fontFamily: "plus jakarta sans",
                }}
              >
                Token Supply Strategy
              </Typography>
            </Card>
            {[
              "Inflationary Reward",
              "Deflationary Burn Mechanism",
              "Liquidity Mining",
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  p: 2,
                  my: 2,
                  border: "2px solid transparent",
                  background:
                    "linear-gradient(black, black) padding-box, linear-gradient(-90deg, #e561c3, #a261e5) border-box",
                  borderRadius: "8px",
                  "&:last-child": { mb: 0 },
                }}
              >
                {item}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partnership;
