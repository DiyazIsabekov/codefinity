import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../App.scss";
import DevOps from "../../Pages/DevOps/DevOps";
import Home from "../../Pages/Home/Home";
import BA from "../../Pages/BA/BA";
import DA from './../../Pages/DA/DA';
import Flutter from './../../Pages/Flutter/Flutter';

const Main = () => {
  return (
    <main className="container" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/dev-ops" element={<DevOps />} />
        <Route path="/courses/business-analytics" element={<BA />} />
        <Route path="/courses/data-analytics" element={<DA />} />
        <Route path="/courses/flutter" element={<Flutter />} />
      </Routes>
    </main>
  );
};

export default Main;
