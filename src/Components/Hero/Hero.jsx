import React from 'react';
import s from './Hero.module.scss'
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/comp.png'
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <motion.section
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

        >
            <section className={s.hero}>
                <div className={s.main_info}>
                    <div className={s.title}>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
                            }}
                        >Вступайте в будущее
                            вместе с Нами</motion.h1>
                        <div>
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
                                className={s.infoWrapper}
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                                    }}
                                >
                                    <h3>2000+</h3>
                                    <p>трудоустроенных выпускников</p>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                                    }}
                                >
                                    <h3>20+</h3>
                                    <p>компаний-партнеров</p>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                                    }}
                                    className={s.infoItem}
                                >
                                    <img src={pic2} alt="comp" />
                                    <p>онлайн/оффлайн</p>
                                </motion.div>
                            </motion.div>

                            <motion.button
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    show: { opacity: 1, x: 0, transition: { duration: 1 } }
                                }}
                                whileTap={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}

                                className={s.request}>ЗАПИСАТЬСЯ НА КУРСЫ</motion.button>

                        </div>
                    </div>


                    <motion.div

                        variants={{
                            hidden: { opacity: 0, },
                            show: { opacity: 1, transition: { duration: 1 } }
                        }}

                        className={s.imageWrapper}>
                        <motion.img
                            src={pic1}
                            alt="infinity"
                            className={s.infinity}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </motion.div>
                </div>

            </section>
        </motion.section>
    );
};

export default Hero;
