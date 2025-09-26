import React from "react";
import styles from './JS.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";

const JS = () => {
  return <div className={styles['javascript']}>
    <HeroDetails />
    <Container className={styles['javascript__container']}>
      sections
    </Container>
  </div>;
};

export default JS;
