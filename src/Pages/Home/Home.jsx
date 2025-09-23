import React from "react";
import CourseList from "../../Components/CourseList/CourseList";
import Hero from "../../Components/Hero/Hero";
import StudentsWork from '../../Components/StudentsWorks/StudentsWork'
import Partners from '../../Components/Partners/Partners'




const Home = () => {
  return (
    <div>
      <Hero />
      <CourseList />
      <StudentsWork/>
      <Partners/>
    </div>
  );
};

export default Home;
