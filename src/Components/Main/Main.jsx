import React from "react";
import { Route, Routes } from "react-router-dom";
import DevOps from "../../Pages/DevOps/DevOps";
import Home from "../../Pages/Home/Home";
import BA from "../../Pages/BA/BA";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/dev-ops" element={<DevOps />} />
        <Route path="/courses/business-analytics" element={<BA />} />
      </Routes>
    </main>
  );
};

export default Main;
