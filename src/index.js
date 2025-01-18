import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Tokenomics } from "./pages/Tokenomics";
import { Presale } from "./pages/Presale";
import { RoadMap } from "./pages/RoadMap";
import { FWB } from "./pages/FWB";
import { WhitePaper } from "./pages/WhitePaper";
import { Faq } from "./pages/Faq";
import { Disclaimer } from "./pages/Disclaimer";
import { Privacy } from "./pages/Privacy";
import { TOS } from "./pages/TOS";
import * as web3 from "@solana/web3.js";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ToastContainer } from "react-toastify";
import HowToBuy from "./pages/HowToBuy";
import { ToastProvider } from "./utils/Toast/ToastProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const endpoint = web3.clusterApiUrl("devnet");
root.render(
  <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={[]} autoConnect>
      <React.StrictMode>
        <ToastProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tokenomics" element={<Tokenomics />} />
              <Route path="/presale" element={<Presale />} />
              <Route path="/road-map" element={<RoadMap />} />
              <Route path="/fwb" element={<FWB />} />
              <Route path="/white-paper" element={<WhitePaper />} />
              <Route path="/howtobuy" element={<HowToBuy />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/tos" element={<TOS />} />
            </Routes>
          </BrowserRouter>
          
        </ToastProvider>
        <ToastContainer autoClose={3000} draggableDirection="x" />
      </React.StrictMode>
    </WalletProvider>
  </ConnectionProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
