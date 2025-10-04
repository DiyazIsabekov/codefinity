import React from "react";
import styles from './Flutter.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accent from "../../Components/AccentSection/Accent";

const Flutter = () => {
  return <div className={styles['flutter']}>
    <HeroDetails />
    <Accent />
    <Container className={styles['flutter__container']}>
      sections
    </Container>
  </div>;
};

export default Flutter;
