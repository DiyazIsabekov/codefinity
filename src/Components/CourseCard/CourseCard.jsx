import React from "react";
import s from "./Course.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CourseCard = ({ title, color, imageLink, url }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(url);
  };

  return (
    <motion.div
      className={s.course_card}
      style={{ backgroundColor: color, color: color }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      <div className={s.logo_wrap}>
        <img src={imageLink} alt="" />
      </div>
      <h3>{title}</h3>
      <button onClick={handleNavigate}>Подробнее</button>
    </motion.div>
  );
};

export default CourseCard;
