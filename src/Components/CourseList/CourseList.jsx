import React from "react";
import devopsLogo from "../../assets/images/devops.png";
import CourseCard from "../CourseCard/CourseCard";

const cardData = [
  {
    title: "DevOps разработчик",
    imageLink: devopsLogo,
    color: "6294FF",
  },
];

const CourseList = () => {
  return (
    <div>
      {cardData.map((el, i) => (
        <CourseCard key={i} />
      ))}
    </div>
  );
};

export default CourseList;
