import React from "react";
import styles from './Flutter.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";

const Flutter = () => {
  return <div className={styles['flutter']}>
    <HeroDetails />
    <Container className={styles['flutter__container']}>
      sections
    </Container>
  </div>;
};

export default Flutter;
