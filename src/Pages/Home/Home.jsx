import React from "react";
import CourseList from "../../Components/CourseList/CourseList";
import Hero from "../../Components/Hero/Hero";
import StudentsWork from '../../Components/StudentsWorks/StudentsWork'
import Partners from '../../Components/Partners/Partners'
import Accordion from "../../Components/Accordion/Accordion";




const Home = () => {
  return (
    <div>
      <Hero />
      <CourseList />
      <StudentsWork/>
      <Partners/>
      <Accordion/>
    </div>
  );
};

export default Home;
