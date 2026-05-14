// ==========================================
//  main.jsx — React Entry Point
// ==========================================
//
//  This is the very first file React runs.
//  It finds the <div id="root"> in index.html
//  and renders our App component inside it.
//

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
