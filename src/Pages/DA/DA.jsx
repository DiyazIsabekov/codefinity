import React from "react";
import styles from './DA.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accent from "../../Components/AccentSection/Accent";

const DA = () => {
  return (
    <div className={styles['data-analytics']}>
      <HeroDetails />
      <Accent />
      <Container className={styles['data-analytics__container']}>
        sections
      </Container>
    </div>
  );
};

export default DA;
