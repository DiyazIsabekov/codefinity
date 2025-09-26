import React, { useEffect } from "react";
import styles from "./BA.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import StudyProcess from "../../Components/StudyProcess/StudyProcess";
import Teachers from "../../Components/Teachers/Teachers";
import Consultation from "../../Components/Consultation/Consultation";

const BA = () => {
  return (
    <div className={styles["business-analyst"]}>
      <HeroDetails />
    </div>
  );
};
export default BA;
