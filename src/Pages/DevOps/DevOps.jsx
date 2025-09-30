import React from "react";
import styles from "./DevOps.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import StudyProcess from './../../Components/StudyProcess/StudyProcess';

const DevOps = () => {
  return (
    <div className={styles['dev-ops']}>
      <HeroDetails />
      <StudyProcess />
    </div>
  )
};

export default DevOps;
