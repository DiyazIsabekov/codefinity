import React from 'react';
import s from './Hero.module.scss'
import pic1 from '../../assets/images/pic1.png'

const Hero = () => {
    return (
        <div className={s.hero}>
            <div className={s.main_info}>
                <div className={s.title}>
                    <h1>Вступайте в будущее
                        вместе с Нами</h1>
                    <button className={s.request}>ОСТАВИТЬ ЗАЯВКУ</button>
                </div>
                <div className={s.imageWrapper}>
                    <img src={pic1} className={s.infinity} alt="infinity" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
