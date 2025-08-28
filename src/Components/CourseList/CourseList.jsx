import React from "react";
import devopsLogo from "../../assets/images/devops-2.svg";
import BALogo from '../../assets/images/BA.png'
import DALogo from '../../assets/images/DA.png'
import flutterLogo from '../../assets/images/flutter.png'
import javaLogo from '../../assets/images/java.png'
import javaScriptLogo from '../../assets/images/javascript 1.png'
import CourseCard from "../CourseCard/CourseCard";
import s from './CourseList.module.scss'

const cardData = [
  {
    title: "DevOps разработчик",
    imageLink: devopsLogo,
    color: "#6294FF",
  },
  {
    title: "Business Analytics Разработчик",
    imageLink: BALogo,
    color: "#E44A59",
  },
  {
    title: "Data Analytics Разработчик",
    imageLink: DALogo,
    color: "#273DA4",
  },
  {
    title: "Flutter Разработчик",
    imageLink: flutterLogo,
    color: "#58C87C",
  },
  {
    title: "Java Разработчик",
    imageLink: javaLogo,
    color: "#41B3E5",
  },
  {
    title: "JavaScript Разработчик",
    imageLink: javaScriptLogo,
    color: "#F5B762",
  },
];

const CourseList = () => {
  return (
    <section>
      <h2>Выберите Свой Курс</h2>
      <div className={s.card_wrap}>
        {cardData.map((el, i) => (
          <CourseCard key={i} {...el} />
        ))}
      </div>
    </section>

  );
};

export default CourseList;
