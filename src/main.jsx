import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@tronweb3/tronwallet-adapter-react-ui/style.css";
import App from "./App.jsx";
import { AppKitProvider } from "./Wagmi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </StrictMode>
);
