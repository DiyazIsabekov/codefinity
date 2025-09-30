import React, { useState } from "react";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo codefinity.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header>
      <div className={s.navigation_block}>
        <div className={s.container}>
          <a href="/">
            <img src={logo} className={s.logo} alt="logo" />
          </a>

          <nav className={s.menu_nav}>
            <ul className={s.menu}>
              <li><a href="#courses" className={s.menu_items}>КУРСЫ</a></li>
              <li><a href="#projects" className={s.menu_items}>ПРОЕКТЫ СТУДЕНТОВ</a></li>
              <li><a href="#partners" className={s.menu_items}>ПАРТНЕРЫ</a></li>
              <li><a href="" className={s.menu_items}>ОТЗЫВЫ</a></li>
              <li><a href="#teachers" className={s.menu_items}>ПРЕПОДАВАТЕЛИ</a></li>
            </ul>
          </nav>

          <div className={s.burger_nav}>
            <input
              type="checkbox"
              id="toggle"
              checked={menuOpen}
              onChange={toggleMenu}
            />
            <label
              htmlFor="toggle"
              className={`${s.btn} ${menuOpen ? s.open : ""}`}>
              <span></span>
            </label>

            <ul className={`${s.burger_menu} ${menuOpen ? s.active : ""}`}>
              <li><a href="">КУРСЫ</a></li>
              <li><a href="">ПРОЕКТЫ СТУДЕНТОВ</a></li>
              <li><a href="">ПАРТНЕРЫ</a></li>
              <li><a href="">ОТЗЫВЫ</a></li>
              <li><a href="">RU</a></li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
