import { Box, Button, Container, Drawer, Hidden } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import flogo from "../assets/flogo.png";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useTronContext } from "../App";

const menuItems = [
  { name: "ABOUT", path: "#about" },
  { name: "FEATURES", path: "#features" },
  { name: "TRADING", path: "#trading" },
  { name: "CONTROL", path: "#control" },
  { name: "TOKENOMICS", path: "#tokenomics" },
  { name: "TECHNICAL OVERVIEW", path: "#overview" },
  { name: "ROADMAP", path: "#roadmap" },
  {
    name: "AIRDROP",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSeDORak8804SV6q8hAmCT9pH7y3Km20n2ac9o5QMcEwKZNbxg/viewform?embedded=true",
  },
];

const Header = () => {
  const [open1, setOpen1] = useState(false);
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();
  const { disconnect, connected } = useTronContext();
  const { isTrx, setIsTrx } = useTronContext();
  console.log({ isTrx });

  return (
    <>
      <Box>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              py: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box component="img" src={flogo} width="150px" alt="" />

            <Hidden mdDown>
              {menuItems.map(({ name, path }, i) => (
                <Box
                  component={"a"}
                  href={path}
                  key={i}
                  sx={{
                    gap: 1,
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: {
                      xs: "12px",
                      sm: "10px",
                      md: "11px",
                      lg: "13px",
                    },
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                    p: 1,
                    cursor: "pointer",
                  }}
                >
                  {name}
                </Box>
              ))}
              {isTrx && connected ? (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    disconnect();
                    setIsTrx(false);
                  }}
                  sx={{
                    width: "120px",
                    background:
                      "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                    borderRadius: "8px",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                    },
                  }}
                >
                  Disconnect
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    open();
                    setOpen1(false);
                  }}
                  sx={{
                    width: "120px",
                    background:
                      "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                    borderRadius: "8px",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                    },
                  }}
                >
                  {!isConnected ? "Connect" : "Disconnect"}
                </Button>
              )}
            </Hidden>
            <Hidden mdUp>
              <Box sx={{ cursor: "pointer" }} onClick={() => setOpen1(true)}>
                <MenuIcon />
              </Box>
              <Drawer
                open={open1}
                onClose={() => setOpen1(false)}
                anchor="right"
                sx={{
                  "& .MuiDrawer-paper": {
                    minWidth: "250px",
                    overflow: "hidden",
                  },
                }}
              >
                <Box
                  sx={{
                    px: 2,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#000",
                    color: "#fff",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {menuItems.map(({ name, path }, i) => (
                    <Box
                      component={"a"}
                      href={path}
                      key={i}
                      sx={{
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: {
                          xs: "14px",
                        },
                        color: "inherit",
                        textDecoration: "none",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                        p: 1,
                        my: 2,
                        cursor: "pointer",
                      }}
                      onClick={() => setOpen1(false)}
                    >
                      {name}
                    </Box>
                  ))}
                  {isTrx && connected ? (
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => {
                        disconnect();
                        setIsTrx(false);
                      }}
                      sx={{
                        mt: 2,
                        background:
                          "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                        borderRadius: "8px",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                        },
                      }}
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => {
                        open();
                        setOpen1(false);
                      }}
                      sx={{
                        mt: 2,
                        background:
                          "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                        borderRadius: "8px",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                        },
                      }}
                    >
                      {!isConnected ? "Connect" : "Disconnect"}
                    </Button>
                  )}
                </Box>
              </Drawer>
            </Hidden>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
