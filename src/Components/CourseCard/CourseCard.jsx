import React from "react";
import s from './Course.module.scss'

const CourseCard = ({ title, color, imageLink }) => {
  return (
    <div className={s.course_card} style={{ backgroundColor: color, color: color }}>
      <div className={s.logo_wrap}>
        <img src={imageLink} alt="" />
      </div>
      <h3>{title}</h3>
      <button>Подробнее</button>
    </div>
  )
};

export default CourseCard;
