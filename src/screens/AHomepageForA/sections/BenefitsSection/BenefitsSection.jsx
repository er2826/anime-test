import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";

export const BenefitsSection = () => {
  // Footer navigation data
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Support", "API Documentation"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
    {
      title: "Follow Us",
      links: ["LinkedIn", "Twitter", "Facebook"],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        pt: 12,
        pb: 6,
        bgcolor: "background.default",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="https://c.animaapp.com/GE76jvoD/img/frame.svg"
        alt="Divider"
        sx={{
          width: "100%",
          height: "1.5px",
          mt: "-0.75px",
          objectFit: "cover",
        }}
      />

      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Stack
            direction="column"
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box
                component="img"
                src="https://c.animaapp.com/GE76jvoD/img/logomark-2.svg"
                alt="Logomark"
                sx={{ width: 28, height: 28 }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Sen', Helvetica",
                  color: "primary.main",
                  lineHeight: "28px",
                }}
              >
                Remunera
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ mt: { xs: 2, md: 0 } }}>
              <FacebookIcon
                sx={{ width: 24, height: 24, color: "text.secondary" }}
              />
              <InstagramIcon
                sx={{ width: 24, height: 24, color: "text.secondary" }}
              />
              <TwitterIcon
                sx={{ width: 24, height: 24, color: "text.secondary" }}
              />
            </Stack>
          </Stack>
        </Grid>

        {footerLinks.map((column, index) => (
          <Grid item xs={6} sm={3} md={2} key={index}>
            <Stack spacing={1}>
              <Typography
                variant="button"
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                }}
              >
                {column.title}
              </Typography>

              {column.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href="#"
                  underline="hover"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "20px",
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
