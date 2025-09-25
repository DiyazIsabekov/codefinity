import React from "react";
import styles from "./DevOps.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";

const DevOps = () => {
  return (
    <div className={styles['dev-ops']}>
      <HeroDetails />
    </div>
  )
};

export default DevOps;
