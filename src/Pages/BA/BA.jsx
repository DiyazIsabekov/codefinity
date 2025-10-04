import React from "react";
import styles from "./BA.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accordion_BA from "./Accordrion_BA/Accordion_BA";
import Accent from "../../Components/AccentSection/Accent";

const BA = () => {
  return (
    <div className={styles["business-analyst"]}>
      <HeroDetails />
      <Accent />
      <Container className={styles['business-analyst__container']}>
        sections
        {/* <Accordion_BA/> */}
      </Container>
    </div>
  );
};
export default BA;
