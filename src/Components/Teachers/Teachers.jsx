import React, { useRef } from 'react';
import s from './Teachers.module.scss';
import pic1 from '../../assets/images/teacher1.png';
import pic2 from '../../assets/images/teacher2.png';
import pic3 from '../../assets/images/teacher3.png';
import { motion } from "framer-motion";
import Slider from 'react-slick'; // ✅ исправлено!
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import firstTeacher from '../../assets/images/artem.JPG';
import secondTeacher from '../../assets/images/zairbek.png';
import thirdTeacher from '../../assets/images/sultan.JPG';
import fourthTeacher from '../../assets/images/erlan.JPG';
import fifthTeacher from '../../assets/images/nursultan.jpg';

const teachers = [
    {
        name: "Артём",
        about: "DevOps-инженер с 7-летним опытом, работает в Дос-Кредо Банке.",
        img: firstTeacher
    },
    {
        name: "Заирбек",
        about: "Бизнес- и системный аналитик, работает в IT-компаниях Payda KG, Финанс Софт, Скайнанс; сотрудничал с USAID и GN в КР.",
        img: secondTeacher
    },
    {
        name: "Султан",
        about: "DevOps-инженер с 3-летним опытом в финансовом секторе (Финка Банк, Сбербанк), специализируется на автоматизации, CI/CD и безопасности.",
        img: thirdTeacher
    },
    {
        name: "Эрлан",
        about: "Разработчик в MSCI (Morgan Stanley International Capital), член Google Developers Group, специализируется на анализе данных и визуализации.",
        img: fourthTeacher
    },
    {
        name: "Нурсултан",
        about: "IT-специалист и преподаватель с 10-летним опытом, работал в КГТУ, Салымбеков Университете и Национальной аттестационной комиссии при Президенте КР.",
        img: fifthTeacher
    }
];

const Teachers = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnHover: false,
        swipeToSlide: true,
        draggable: true,
        touchMove: true,
    };

    return (
        <motion.section
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { duration: 1, staggerChildren: 0.25 },
                },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={s.teachersSection}
        >
            <a name="teachers"></a>
            <motion.h2
                variants={{
                    hidden: { opacity: 0, x: -40 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
                }}
            >
                Наши Преподаватели
            </motion.h2>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.4 } },
                }}
                style={{ pointerEvents: 'auto' }}
            >
                <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className={s.cardWrapper}>
                    {teachers.map((el) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                            }}
                            key={el.id}
                            className={s.card}
                        >
                            <div className={s.imgWrapper}>
                                <img src={el.img} alt={el.name} />
                            </div>
                            <h3>{el.name}</h3>
                            <p>{el.about}</p>
                        </motion.div>
                    ))}
                </Slider>
            </motion.div>
        </motion.section>
    );
};

export default Teachers;
