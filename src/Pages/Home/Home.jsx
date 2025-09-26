import React from "react";
import CourseList from "../../Components/CourseList/CourseList";
import Hero from "../../Components/Hero/Hero";
import StudentsWork from '../../Components/StudentsWorks/StudentsWork'
import Partners from '../../Components/Partners/Partners'
import Teachers from './../../Components/Teachers/Teachers';
import Consultation from "../../Components/Consultation/Consultation";

const Home = () => {
  return (
    <div>
      <Hero />
      <CourseList />
      <StudentsWork />
      <Partners />
      <Teachers />
      <Consultation />

    </div>
  );
};

export default Home;
