import React from "react";
import styles from "./BA.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accordion_BA from "./Accordrion_BA/Accordion_BA";

const BA = () => {
  return (
    <div className={styles["business-analyst"]}>
      <HeroDetails />
      <Container className={styles['business-analyst__container']}>
        sections
        {/* <Accordion_BA/> */}
      </Container>
    </div>
  );
};
export default BA;
