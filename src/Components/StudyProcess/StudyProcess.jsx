import React from 'react';
import s from './StudyProcess.module.scss'
import logo from '../../assets/images/red8.png'
import { motion } from "framer-motion";



const infoData = [
    {
        title: 'Гибкий формат',
        text: 'рабочая среда студентов и твой пожизненный доступ ко всем лекциям и материалам курса'
    },
    {
        title: 'Ментор всегда на связи',
        text: '2-3 вебинара в неделю, которые удобно просматривать в гибком формате'
    },
    {
        title: 'Общение в чате',
        text: 'здесь ты получаешь фидбэк по заданиям и общаешься со своей группой'
    },
    {
        title: 'Крутые менторы',
        text: 'каждый день с тобой на связи, помогают с домашками и вдохновляют'
    },
    {
        title: 'Работа в IT',
        text: 'карьерный сервис GoIT помогает сделать резюме, искать вакансии, готовит к собеседованиям'
    },
    {
        title: 'Доступ к видео урокам ',
        text: 'вечный доступ к видео урокам '
    }
]

const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
};

const StudyProcess = () => {


    return (

        <motion.section
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.25 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}

            className={s.study}>
            <div className={s.full_info}>
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
                    }}

                    className={s.heading}>Как мы учим</motion.h2>
                <motion.h4
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
                    }}>Фишки обучения на курсе</motion.h4>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.25 } },
                    }}

                    className={s.cards}
                >
                    {infoData.map((el) => (
                        <motion.div
                            key={el.title}
                            variants={itemVariants}
                            className={s.card}
                        >
                            <h3 className={s.cardTitle}>{el.title}</h3>
                            <p className={s.cardText}>{el.text}</p>
                        </motion.div>
                    ))}
                </motion.div>


                <motion.div
                    variants={{
                        hidden: { opacity: 0, },
                        show: { opacity: 1, transition: { duration: 1 } }
                    }}

                    className={s.imageWrapper}>

                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src={logo}
                        className={s.infinity}
                        alt="infinity" />
                </motion.div>
            </div>

        </motion.section>

    );
};

export default StudyProcess;