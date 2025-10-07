import React from "react";
import styles from './Home.module.scss';
import CourseList from "../../Components/CourseList/CourseList";
import Hero from "../../Components/Hero/Hero";
import StudentsWork from '../../Components/StudentsWorks/StudentsWork'
import Partners from '../../Components/Partners/Partners'
import Teachers from '../../Components/Teachers/Teachers';
import Consultation from "../../Components/Consultation/Consultation";
import Reviews from "../../Components/Reviews/Reviews";
import Container from "../../Components/Container/Container";
import Accordion from '../../Components/Accordion/Accordion'

const Home = () => {
  return (
    <div className={styles['home']}>
      <Container className={styles['home__container']}>
        <Hero />
        <CourseList />
        <StudentsWork />
        <Partners />
        <Teachers />
        <Consultation />
        <Reviews />
      </Container>
    </div>
  );
};

export default Home;
