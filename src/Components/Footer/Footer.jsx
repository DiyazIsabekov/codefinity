import React from "react";
import logo from '../../assets/images/logo codefinity.png'
import s from './Footer.module.scss'
import inst from '../../assets/images/inst.png'
import whats from '../../assets/images/whats.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Footer = () => {

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };


  return <motion.footer
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 1, staggerChildren: 0.25 } },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}

  >
    <div className={s.footer_block}>
      <div className={s.logo_wrapper}>
        <a href="/">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}

            src={logo} alt="logo" className={s.logo} />
        </a>
      </div>


      <div className={s.container}>

        <div className={s.footer_navigation}>

          <div>
            <motion.h3
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
              }}
            >Учебные курсы</motion.h3>
            <nav>
              <motion.ul
                variants={listVariants}
                className={s.courses}>
                <motion.li
                  variants={itemVariants}>
                  <Link
                    to={'/courses/dev-ops'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.courses_items}>DevOps</Link></motion.li>

                <motion.li
                  variants={itemVariants}>
                  <Link
                    to={'/courses/flutter'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.courses_items}>Flutter</Link></motion.li>

                <motion.li
                  variants={itemVariants}>
                  <Link
                    to={'/courses/business-analytics'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.courses_items}>Business Analytics</Link></motion.li>

                <motion.li
                  variants={itemVariants}>
                  <Link
                    to={'/courses/data-analytics'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.courses_items}>Data Analytics</Link></motion.li>

              </motion.ul>
            </nav>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
            }}
            className={s.contacts}>
            <a href="tel:+996999775877 ">+996 999 775 877 </a>
            <div className={s.logos}>
              <img src={whats} alt="whats" />
              <img src={inst} alt="inst" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>


  </motion.footer>;
};

export default Footer;
