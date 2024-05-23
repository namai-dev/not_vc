import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://not-vc1.vercel.app/manifest.json">
      <Header />
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
