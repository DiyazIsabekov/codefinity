import React from "react";
import styles from './Java.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";

const Java = () => {
  return <div style={styles['java']}>
    <HeroDetails />
    <Container className={styles['java__container']}>
      sections
    </Container>
  </div>;
};

export default Java;
