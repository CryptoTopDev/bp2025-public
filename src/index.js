import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Donate } from "./pages/Donate";
import { Roadmap } from "./pages/Roadmap";
import { Contact } from "./pages/Contact";
import { Community } from "./pages/Community";
import { Partnership } from "./pages/Partnership";
import { Funding } from "./pages/Funding";
import { Careers } from "./pages/Careers";
import { Privacy } from "./pages/Privacy";
import { TermsOfService } from "./pages/TermsOfService";
import { FAQ } from "./pages/FAQ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/funding-roadmap" element={<Funding />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
