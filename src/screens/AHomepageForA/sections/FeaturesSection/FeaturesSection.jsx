import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export const FeaturesSection = () => {
  // Navigation menu items
  const navItems = ["Home", "Features", "Pricing", "Contact"];

  return (
    <AppBar
      position="relative"
      sx={{ py: 1, px: 0, bgcolor: "#0d0402", zIndex: 2 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo and Navigation */}
        <Stack direction="row" spacing={3} alignItems="center">
          {/* Logo */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            height="32px"
          >
            <Box
              component="img"
              src="https://c.animaapp.com/GE76jvoD/img/logomark-2.svg"
              alt="Logomark"
              width="28px"
              height="28px"
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Sen', Helvetica",
                fontWeight: 700,
                color: "primary.main",
                lineHeight: "28px",
              }}
            >
              Remunera
            </Typography>
          </Stack>

          {/* Navigation Items */}
          <Stack direction="row" spacing={2}>
            {navItems.map((item) => (
              <Stack
                key={item}
                direction="row"
                alignItems="center"
                spacing={0.5}
                sx={{ cursor: "pointer" }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Public_Sans', Helvetica",
                    fontWeight: 500,
                    color: "secondary.main",
                    fontSize: "15px",
                    lineHeight: "20px",
                  }}
                >
                  {item}
                </Typography>
                <KeyboardArrowDownIcon
                  sx={{ color: "secondary.main", width: 16, height: 16 }}
                />
              </Stack>
            ))}
          </Stack>
        </Stack>

        {/* Right Side Actions */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography
            sx={{
              fontFamily: "'Public_Sans', Helvetica",
              fontWeight: 500,
              color: "secondary.main",
              fontSize: "15px",
              lineHeight: "20px",
            }}
          >
            Download app
          </Typography>

          <Divider orientation="vertical" flexItem sx={{ height: 32 }} />

          <Typography
            sx={{
              fontFamily: "'Public_Sans', Helvetica",
              fontWeight: 500,
              color: "secondary.main",
              fontSize: "15px",
              lineHeight: "20px",
            }}
          >
            Log in
          </Typography>

          <Button
            variant="contained"
            sx={{
              px: 2,
              py: 1,
              bgcolor: "primary.main",
              borderRadius: 2,
              fontFamily: "'Public_Sans', Helvetica",
              fontWeight: 500,
              color: "#050000",
              fontSize: "15px",
              lineHeight: "20px",
            }}
          >
            Try it free
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
