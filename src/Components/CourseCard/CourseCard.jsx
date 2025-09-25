import React from "react";
import s from './Course.module.scss'
import { useNavigate } from "react-router-dom";

const CourseCard = ({ title, color, imageLink, url }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(url)
  }

  return (
    <div className={s.course_card} style={{ backgroundColor: color, color: color }} onClick={handleNavigate}>
      <div className={s.logo_wrap}>
        <img src={imageLink} alt="" />
      </div>
      <h3>{title}</h3>
      <button>Подробнее</button>
    </div>
  )
};

export default CourseCard;
