import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/App";

const rootElement = document.getElementById("container");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
