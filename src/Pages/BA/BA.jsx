import React from "react";
import styles from "./BA.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";

const BA = () => {
  return (
    <div className={styles["business-analyst"]}>
      <HeroDetails />
      <Container className={styles['business-analyst__container']}>
        sections
      </Container>
    </div>
  );
};
export default BA;
