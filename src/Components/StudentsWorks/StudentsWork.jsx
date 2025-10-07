import React from 'react';
import s from './StudentsWork.module.scss'
import sw_card_1 from '../../assets/images/sw_card_1.png'
import sw_card_2 from '../../assets/images/sw_card_2.png'
import sw_card_3 from '../../assets/images/sw_card_3.png'
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};


const StudentsWork = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.25,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}

      className={s.students_work}>
      <a name="projects"></a>
      <motion.h2
        variants={{
          hidden: { opacity: 0, x: -40 },
          show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
        }}

        className={s.students_work_title}>Работы наших учеников</motion.h2>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 0.5,
              staggerChildren: 0.4,
            },
          },
        }}

        className={s.wrapper_students_work_cards}>
        <motion.div variants={cardVariants} className={s.card_sw}>
          <img src={sw_card_1} alt="sw_card_1" className={s.sw_picture} />
          <p className={s.card_text}>Interior Website</p>
        </motion.div>
        <motion.div variants={cardVariants} className={s.card_sw}>
          <img src={sw_card_2} alt="sw_card_2" className={s.sw_picture} />
          <p className={s.card_text}>Sharethrough</p>
        </motion.div>
        <motion.div variants={cardVariants} className={s.card_sw}>
          <img src={sw_card_3} alt="sw_card_3" className={s.sw_picture} />
          <p className={s.card_text}>Quadrillijn partners</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StudentsWork;