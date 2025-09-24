import React from "react";
import CourseList from "../../Components/CourseList/CourseList";
import Hero from "../../Components/Hero/Hero";
import Teachers from './../../Components/Teachers/Teachers';
import Consultation from "../../Components/Consultation/Consultation";






const Home = () => {
  return (
    <div>
      <Hero />
      <CourseList />
      <Teachers />
      <Consultation />
    </div>
  );
};

export default Home;
