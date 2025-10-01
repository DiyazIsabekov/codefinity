import { React, useState, useEffect } from "react";
import styles from "./HeroDetails.module.scss";
import { useLocation } from "react-router-dom";
import { specialties } from "../../assets/specialties";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import HeroDetailFooter from '../../assets/images/hero-detail__footer.png';
import { motion } from 'framer-motion';

const HeroDetails = () => {
    const [heroData, setHeroData] = useState(null);
    const { pathname } = useLocation();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [pathname])

    useEffect(() => {
        setHeroData(specialties.find((item) => item.loc === pathname));
    }, [pathname]);

    const lastPath = heroData?.loc.split("/")[heroData?.loc.split("/").length - 1];

    return (
        <div
            className={classNames(
                styles["hero-detail"],
                styles[`hero-detail--${lastPath}`]
            )}
        >
            <div className={styles["hero-detail__container"]}>
                <motion.div
                    className={styles["hero-detail__info"]}
                    initial={{
                        opacity: 0,
                        x: isTabletOrMobile ? -90 : -180
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: !isTabletOrMobile && 1.5,
                        duration: 1.4
                    }}
                >
                    <h1
                        className={classNames(
                            styles["hero-detail__title"],
                            styles[`hero-detail__title--${lastPath}`]
                        )}
                    >
                        {heroData?.title}
                    </h1>
                    <p className={styles["hero-detail__description"]}>
                        {heroData?.description}
                    </p>
                    <div className={styles["hero-detail__results"]}>
                        <div className={styles["hero-detail__results-item"]}>
                            Hard skills + soft skills
                        </div>
                        <div className={styles["hero-detail__results-item"]}>
                            1 проект в портфолио
                        </div>
                        <div className={styles["hero-detail__results-item"]}>
                            онлайн/ оффлайн
                        </div>
                    </div>
                    <div className={styles["hero-detail__inner"]}>
                        <button className={styles["hero-detail__button"]}>
                            Записаться на курс
                        </button>
                        <div className={styles["hero-detail__conditions"]}>
                            <p>3 месяца</p>
                            <p>Гибкие занятия</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={classNames(
                        styles["hero-detail__circle"],
                        styles[`hero-detail__circle--${lastPath}`]
                    )}
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: !isTabletOrMobile && 1.5,
                        duration: 1.4
                    }}
                ></motion.div>
            </div>
            {
                isTabletOrMobile ? (
                    <motion.img
                        src={heroData?.imageMobil}
                        alt="img"
                        className={classNames(
                            styles['hero-detail__image-mobil'],
                            styles[`hero-detail__image-mobil--${lastPath}`]
                        )}
                        initial={{
                            opacity: 0,
                            x: 90
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 1.4
                        }}
                    />
                ) : (
                    ["first", "second", "third", "fourth"].map((type, index) => (
                        <motion.img
                            src={heroData?.imageItems[index]}
                            alt={lastPath}
                            className={classNames(
                                styles["hero-detail__image"],
                                styles[`hero-detail__image--${lastPath}`],
                                styles[`hero-detail__image--${lastPath}-${type}`]
                            )}
                            key={index}
                            initial={{
                                opacity: 0,
                                x: 180
                            }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                delay: 1.5,
                                duration: 1.4
                            }}
                        />
                    ))
                )
            }
            {
                isTabletOrMobile && (
                    <img src={HeroDetailFooter} alt='hero-detail__footer' className={styles['hero-detail__footer']}></img>
                )
            }
        </div>
    );
};

export default HeroDetails;
