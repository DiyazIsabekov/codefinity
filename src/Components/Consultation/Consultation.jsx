import React from 'react';
import s from './Consultation.module.scss'
import { motion } from "framer-motion";


const Consultation = () => {
    const formVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };



    return (
        <motion.section
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 2, staggerChildren: 0.25 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}

            className={s.section}
        >
            <div className={s.consultWrapper}>
                <motion.div
                    variants={formVariants}
                    initial="hidden"
                    animate="show"

                    className={s.mainText}>
                    <motion.h4 variants={itemVariants}>Получи Бесплатную Консультацию</motion.h4>
                    <motion.h5 variants={itemVariants}>Обсудите детали со специалистом.</motion.h5>
                    <motion.p variants={itemVariants}>Твой шаг в будущее начинается с этой простой формы</motion.p>
                </motion.div>

                <motion.form
                    variants={formVariants}
                    initial="hidden"
                    animate="show"
                    className={s.form}
                >
                    <motion.input type="text" placeholder="Имя" variants={itemVariants} />
                    <motion.input type="tel" placeholder="Номер" variants={itemVariants} />
                    <motion.button type="submit" variants={itemVariants}>
                        Записаться
                    </motion.button>
                </motion.form>
            </div>
        </motion.section>
    );
};

export default Consultation;
