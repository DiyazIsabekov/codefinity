import React, { useEffect } from "react";
import styles from './BA.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";

const BA = () => {
  return (
    <div className={styles['business-analyst']}>
      <HeroDetails />
    </div>
  );
};

export default BA;
