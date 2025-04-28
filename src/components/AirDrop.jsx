import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import flogo from "../assets/flogo.png";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";

const getTimeLeft = (endTime) => {
  const difference = new Date(endTime) - Date.now();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Presale ended
};

const presaleEndTime = 1745348400000;

const AirDrop = () => {
  const navigate = useNavigate();
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const [allocation, setAllocation] = useState(10);
  const [preSaleTime, setPreSaleTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setPreSaleTime(getTimeLeft(presaleEndTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <Container>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              width: "100%",
              py: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box
              component="img"
              src={flogo}
              width="150px"
              alt=""
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                borderRadius: "8px",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                },
              }}
              onClick={() => {
                open();
              }}
            >
              {isConnected
                ? `${address.slice(0, 4)}...${address.slice(-4)}`
                : "Connect Wallet"}
            </Button>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                borderRadius: "24px",
                color: "#fff",
                border: "1px solid transparent",
                background:
                  "linear-gradient(black, black) padding-box, linear-gradient(90deg, #e561c3, #a261e5) border-box",
              }}
            >
              <CardContent sx={{ p: 3, textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "18px", sm: "24px", md: "36px" },
                    fontFamily: "plus jakarta sans",

                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 900,
                      background:
                        "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      width: "max-content",
                    }}
                  >
                    Claim
                  </span>{" "}
                  Airdrop
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    my: 2,
                    fontSize: { xs: "12px", sm: "22px" },
                  }}
                >
                  <span
                    style={{
                      background:
                        "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      width: "max-content",
                      fontWeight: "bold",
                    }}
                  >
                    {preSaleTime.days} Days - {preSaleTime.hours} Hrs -{" "}
                    {preSaleTime.minutes} Min - {preSaleTime.seconds} Sec
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  A total of 5,000,000 tokens will be distributed among
                  validators.
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 15,
                    borderRadius: 4,
                    bgcolor: "#ffffff20",
                    my: 2,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -20,
                      right: 0,
                      height: "100%",
                      fontSize: "10px",
                    }}
                  >
                    5M $MGN
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: `${45}%`,
                      borderRadius: 4,
                      background:
                        "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                      fontSize: "10px",
                      fontWeight: 900,
                      pr: 1,
                      textAlign: "right",
                      verticalAlign: "middle",
                    }}
                  >
                    {45}%
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid ",
                    borderRadius: "10px",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    my: 3,
                    p: "8px 12px",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      my: 0.5,
                      fontSize: { xs: "12px", sm: "18px" },
                    }}
                  >
                    Network
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      my: 0.5,
                      fontSize: { xs: "12px", sm: "18px" },
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/om.png"
                      sx={{ width: "20px" }}
                    />{" "}
                    Mantra
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid ",
                    borderRadius: "10px",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    my: 3,
                    p: "8px 12px",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      my: 0.5,
                      fontSize: { xs: "12px", sm: "18px" },
                    }}
                  >
                    Token
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      my: 0.5,
                      fontSize: { xs: "12px", sm: "18px" },
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box component={"img"} src={logo} sx={{ width: "40px" }} />{" "}
                    MGN
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                    borderRadius: "8px",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                    },
                  }}
                  onClick={() => {}}
                >
                  Claim Tokens
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AirDrop;
