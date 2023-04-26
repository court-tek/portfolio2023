import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import AboutMain from "../components/about/AboutMain";
import Portfolio from "../components/PortfolioCreative";
import Contact from "../components/Contact";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home-light" element={<HomeLight />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rtl-home-light" element={<RtlHomeLight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
