import { Box, Container, Drawer, Hidden } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  { name: "ABOUT", path: "#about" },
  { name: "FEATURES", path: "#features" },
  { name: "TRADING", path: "#trading" },
  { name: "CONTROL", path: "#control" },
  { name: "TOKENOMICS", path: "#tokenomics" },
  { name: "TECHNICAL OVERVIEW", path: "#overview" },
  { name: "ROADMAP", path: "#roadmap" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "end", md: "center" },
              gap: 5,
              py: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Hidden mdDown>
              {menuItems.map(({ name, path }, i) => (
                <Box
                  component={"a"}
                  href={path}
                  key={i}
                  sx={{
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "14px",
                      lg: "19px",
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
            </Hidden>
            <Hidden mdUp>
              <Box sx={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
                <MenuIcon />
              </Box>
              <Drawer
                open={open}
                onClose={() => setOpen(false)}
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
                      onClick={() => setOpen(false)}
                    >
                      {name}
                    </Box>
                  ))}
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
