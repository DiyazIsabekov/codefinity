import React from 'react';
import s from './Hero.module.scss'
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/comp.png'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.main_info}>
                <div className={s.title}>
                    <h1>Вступайте в будущее
                        вместе с Нами</h1>
                    <div>
                        <div className={s.infoWrapper}>
                            <div>
                                <h3>2000+</h3>
                                <p>трудоустроенных
                                    выпускников</p>
                            </div>
                            <div>
                                <h3>20+</h3>
                                <p>компаний-партнеров</p>
                            </div>
                            <div>
                                <img src={pic2} alt="comp" />
                                <p>онлайн/оффлайн</p>
                            </div>

                        </div>
                        <button className={s.request}>ЗАПИСАТЬСЯ НА КУРСЫ</button>

                    </div>
                </div>
                <div className={s.imageWrapper}>
                    <img src={pic1} className={s.infinity} alt="infinity" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
