import React from "react";
import { Route, Routes } from "react-router-dom";
import DevOps from "../../Pages/DevOps/DevOps";
import Home from "../../Pages/Home/Home";
import BA from "../../Pages/BA/BA";
import DA from "../../Pages/DA/DA";
import Flutter from "../../Pages/Flutter/Flutter";
import Java from "../../Pages/Java/Java";
import JS from "../../Pages/JS/JS";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/dev-ops" element={<DevOps />} />
        <Route path="/courses/business-analyst" element={<BA />} />
        <Route path="/courses/data-analytics" element={<DA />} />
        <Route path="/courses/flutter" element={<Flutter />} />
        <Route path="/courses/java" element={<Java />} />
        <Route path="/courses/javascript" element={<JS />} />
      </Routes>
    </main>
  );
};

export default Main;
