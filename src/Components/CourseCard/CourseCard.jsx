import React from "react";
import s from "./Course.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CourseCard = ({ title, color, imageLink, url }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(url);
  };


  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -25 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }


  return (
    <motion.div
      variants={itemVariants}

      className={s.course_card}
      style={{ backgroundColor: color, color: color }}
    >

      <motion.div
        variants={infoVariants}
        className={s.logo_wrap}>
        <img src={imageLink} alt="" />
      </motion.div>
      <motion.h3 variants={infoVariants}>{title}</motion.h3>
      <motion.button variants={infoVariants} onClick={handleNavigate}>Подробнее</motion.button>
    </motion.div >
  );
};

export default CourseCard;
