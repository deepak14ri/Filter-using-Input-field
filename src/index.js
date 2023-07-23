import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import App from "./App.js";

const elementRoot = document.getElementById("root");
const root = createRoot(elementRoot);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
