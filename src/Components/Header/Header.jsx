import React from "react";
import s from './Header.module.scss'
import logo from '../../assets/images/logo codefinity.png'

const Header = () => {
  return <header>
    <div className={s.navigation_block}>
      <div className={s.container}>

        <a href="/">
          <img src={logo} className={s.logo} alt="logo" />
        </a>

        <nav>
          <ul className={s.menu}>
            <li><a href="" className={s.menu_items}>КУРСЫ</a></li>
            <li><a href="" className={s.menu_items}>ПРОЕКТЫ СТУДЕНТОВ</a></li>
            <li><a href="" className={s.menu_items}>ПАРТНЕРЫ</a></li>
            <li><a href="" className={s.menu_items}>ОТЗЫВЫ</a></li>
            <li><a href="" className={s.menu_items}>RU</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

export default Header;
