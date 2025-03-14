import { Box } from "@mui/material";
import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { MainSection } from "./sections/MainSection";

export const AHomepageForA = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "900px",
        width: "100%",
        paddingX: 6,
        paddingY: 0,
        bgcolor: "background.default",
      }}
    >
      <FeaturesSection />
      <MainSection />
      <BenefitsSection />
    </Box>
  );
};
