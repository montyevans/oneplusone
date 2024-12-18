import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Schedule from "./Schedule";
import FAQ from "./FAQ";
import Donate from "./Donate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
