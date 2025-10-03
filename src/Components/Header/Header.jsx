import React, { useState } from "react";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo codefinity.png";
import { motion } from "framer-motion";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.header
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1, staggerChildren: 0.25 } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}

    >
      <div className={s.navigation_block}>
        <div className={s.container}>
          <a href="/">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={logo}
              className={s.logo}
              alt="logo" />
          </a>

          <nav className={s.menu_nav}>
            <motion.ul
              variants={listVariants}
              className={s.menu}
            >
              <motion.li variants={itemVariants}><a href="#courses" className={s.menu_items}>КУРСЫ</a></motion.li>
              <motion.li variants={itemVariants}><a href="#projects" className={s.menu_items}>ПРОЕКТЫ СТУДЕНТОВ</a></motion.li>
              <motion.li variants={itemVariants}><a href="#partners" className={s.menu_items}>ПАРТНЕРЫ</a></motion.li>
              <motion.li variants={itemVariants}><a href="" className={s.menu_items}>ОТЗЫВЫ</a></motion.li>
              <motion.li variants={itemVariants}><a href="#teachers" className={s.menu_items}>ПРЕПОДАВАТЕЛИ</a></motion.li>
            </motion.ul>
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
    </motion.header>
  );
};

export default Header;
