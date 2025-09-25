import { React, useState, useEffect } from 'react';
import styles from './HeroDetails.module.scss';
import { useLocation } from 'react-router-dom';
import { specialties } from '../../assets/specialties';
import classNames from 'classnames';

const HeroDetails = () => {
    const [heroData, setHeroData] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        setHeroData(specialties.find(item => item.loc == pathname))
    }, [])

    const lastPath = heroData?.loc.split('/')[heroData?.loc.split('/').length - 1]

    return (
        <div className={classNames(styles['hero-detail'], styles[`hero-detail--${lastPath}`])}>
            <div className={styles['hero-detail__container']}>
                <div className={styles['hero-detail__info']}>
                    <h1 className={classNames(styles['hero-detail__title'], styles[`hero-detail__title--${lastPath}`])}>{heroData?.title}</h1>
                    <p className={styles['hero-detail__description']}>{heroData?.description}</p>
                    <div className={styles['hero-detail__results']}>
                        <div className={styles['hero-detail__results-item']}>
                            Hard skills + soft skills
                        </div>
                        <div className={styles['hero-detail__results-item']}>
                            1 проект в портфолио
                        </div>
                        <div className={styles['hero-detail__results-item']}>
                            онлайн/
                            оффлайн
                        </div>
                    </div>
                    <div className={styles['hero-detail__inner']}>
                        <button className={styles['hero-detail__button']}>Записаться на курс</button>
                        <div className={styles['hero-detail__conditions']}>
                            <p>3 месяца</p>
                            <p>Гибкие занятия</p>
                        </div>
                    </div>
                </div>
                {["first", "second", "third", "fourth"].map((type, index) => (
                    <img
                        src={heroData?.imageItems[index]}
                        alt={lastPath}
                        className={classNames(
                            styles['hero-detail__image'],
                            styles[`hero-detail__image--${lastPath}`],
                            styles[`hero-detail__image--${lastPath}-${type}`]
                        )}
                        key={index}
                    />
                ))}
            </div>
            <div className={classNames(
                styles["hero-detail__circle"],
                styles[`hero-detail__circle--${lastPath}`])}
            ></div>
        </div>
    );
};

export default HeroDetails;