import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AHomepageForA } from "./screens/AHomepageForA";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ThemeProvider>
      <AHomepageForA />
    </ThemeProvider>
  </StrictMode>,
);
