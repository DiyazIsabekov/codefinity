import React from "react";
import devopsLogo from "../../assets/images/devops-2.svg";
import BALogo from "../../assets/images/BA.png";
import DALogo from "../../assets/images/DA.png";
import flutterLogo from "../../assets/images/flutter.png";
import javaLogo from "../../assets/images/java.png";
import javaScriptLogo from "../../assets/images/javascript 1.png";
import CourseCard from "../CourseCard/CourseCard";
import s from "./CourseList.module.scss";

const cardData = [
  {
    title: "DevOps разработчик",
    imageLink: devopsLogo,
    color: "#6294FF",
    url: '/courses/dev-ops'
  },
  {
    title: "Business Analytics Разработчик",
    imageLink: BALogo,
    color: "#E44A59",
    url: '/courses/business-analyst'
  },
  {
    title: "Data Analytics Разработчик",
    imageLink: DALogo,
    color: "#273DA4",
    url: '/courses/data-analytics'
  },
  {
    title: "Flutter Разработчик",
    imageLink: flutterLogo,
    color: "#58C87C",
    url: '/courses/flutter'
  },
  {
    title: "Java Разработчик",
    imageLink: javaLogo,
    color: "#41B3E5",
    url: '/courses/java'
  },
  {
    title: "JavaScript Разработчик",
    imageLink: javaScriptLogo,
    color: "#F5B762",
    url: '/courses/javascript'
  },
];

const CourseList = () => {
  return (
    <section>
      <a name="courses"></a>
      <h2>Выберите Свой Курс</h2>
      <div className={s.card_wrap}>
        {cardData.map((el, i) => (
          <CourseCard key={i} {...el} />
        ))}
      </div>
      <div className={s.btn}>
        <button className={s.btn_request}>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </section>
  );
};

export default CourseList;
