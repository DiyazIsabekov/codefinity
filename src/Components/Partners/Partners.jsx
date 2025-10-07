import React from 'react';
import s from './Partners.module.scss'
import { motion } from "framer-motion";
import rsk from '../../assets/images/RSK_Bank_Logo.png'
import mbank from '../../assets/images/mbank_logo.png'
import kicb from '../../assets/images/kicb_logo.png'
import bakai from '../../assets/images/Bakai_bank_logo.png'
import bankazii from '../../assets/images/bankazii_logo.png'
import finca from '../../assets/images/finca_logo.png'
import umai from '../../assets/images/umai_logo.png'
import ipc from '../../assets/images/ipc_logo.png'

const Partners = () => {
  return (
    <div className={s.partnersMain}>
      <a name="partners"></a>
      <motion.h2 className={s.partners_title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
      >Партнеры</motion.h2>
      <motion.div className={s.partners_wrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      >
        {[rsk, bakai, umai, mbank, bankazii, ipc, kicb, finca].map((logo, i) => (
          <motion.img 
          key={i} src={logo} alt="logo"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          />
        ))}

      </motion.div>
    </div>
  );
};

export default Partners;