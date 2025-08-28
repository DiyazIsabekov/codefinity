import React from "react";
import CourseList from "../../Components/CourseList/CourseList";
import s from './Home.module.scss'
import pic1 from '../../assets/images/pic1.png'

const Home = () => {
  return (
    <div className={s.main_screen}>
      <div className={s.main_info}>
        <div className={s.title}>
          <h1>Вступайте в будущее
            вместе с Нами</h1>
          <button className={s.request}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
        <img src={pic1} className={s.infinity} alt="infinity" />
      </div>
      <CourseList />
    </div>
  );
};

export default Home;
