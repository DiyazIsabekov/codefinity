import React from "react";
import styles from './DA.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";

const DA = () => {
  return (
    <div className={styles['data-analytics']}>
      <HeroDetails />
      <Container className={styles['data-analytics__container']}>
        sections
      </Container>
    </div>
  );
};

export default DA;
