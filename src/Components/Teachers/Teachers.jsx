import React from 'react';
import s from './Teachers.module.scss';
import pic1 from '../../assets/images/teacher1.png';
import pic2 from '../../assets/images/teacher2.png';
import pic3 from '../../assets/images/teacher3.png';
import { motion } from "framer-motion";


const teachers = [
    {
        id: 1,
        name: 'Алеся',
        img: pic1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, aliquam egestas consequat',
    },
    {
        id: 2,
        name: 'Алеся',
        img: pic2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, aliquam egestas consequat',
    },
    {
        id: 3,
        name: 'Алеся',
        img: pic3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, aliquam egestas consequat',
    },
];

const Teachers = () => {
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

            className={s.teachersSection}>
            <a name="teachers"></a>
            <motion.h2
                variants={{
                    hidden: { opacity: 0, x: -40 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
                }}
            >Наши Преподаватели</motion.h2>
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

                className={s.cardWrapper}>
                {teachers.map((el) => (
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}

                        key={el.id} className={s.card}>
                        <div className={s.imgWrapper}>
                            <img src={el.img} alt={el.name} />
                        </div>
                        <h3>{el.name}</h3>
                        <p>{el.text}</p>
                    </motion.div>
                ))}
            </motion.div>

        </motion.section>


    );
};

export default Teachers;