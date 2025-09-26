import React from "react";
import logo from '../../assets/images/logo codefinity.png'
import s from './Footer.module.scss'
import inst from '../../assets/images/inst.png'
import whats from '../../assets/images/whats.png'
import { Link } from "react-router-dom";


const Footer = () => {
  return <footer>
    <div className={s.footer_block}>
      <div className={s.logo_wrapper}>
        <a href="/">
          <img src={logo} alt="logo" className={s.logo} />
        </a>
      </div>


      <div className={s.container}>

        <div className={s.footer_navigation}>

          <div>
            <h3>Учебные курсы</h3>
            <nav>
              <ul className={s.courses}>
                <li>
                  <Link
                    to={'/courses/dev-ops'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.courses_items}>DevOps</Link></li>

                <li>
                  <Link
                    to={'/courses/flutter'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.courses_items}>Flutter</Link></li>

                <li><Link
                  to={'/courses/business-analytics'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.courses_items}>Business Analytics</Link></li>

                <li><Link
                  to={'/courses/data-analytics'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.courses_items}>Data Analytics</Link></li>

              </ul>
            </nav>
          </div>

          <div className={s.contacts}>
            <a href="tel:+996999775877 ">+996 999 775 877 </a>
            <div className={s.logos}>
              <img src={whats} alt="whats" />
              <img src={inst} alt="inst" />
            </div>
          </div>

        </div>
      </div>
    </div>


  </footer>;
};

export default Footer;
