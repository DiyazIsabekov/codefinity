import React from "react";
import styles from "./DevOps.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accent from "../../Components/AccentSection/Accent";

const DevOps = () => {
  return (
    <div className={styles['dev-ops']}>
      <HeroDetails />
      <Accent />
      <Container className={styles['dev-ops__container']}>
        sections
      </Container>
    </div>
  )
};

export default DevOps;
