import React from 'react';
import s from '../AccentSection/Accent.module.scss'
import practice from '../../assets/images/g8 1.png'
import theory from '../../assets/images/g8 2.png'

const Accent = () => {
    return (
        <section>
            <div className={s.accent_section}>
                <h3 className={s.accent_title}>На что делаем акцент</h3>
                <p className={s.accent_text}>Занятия проходят онлайн по вечерам, их удобно сочетать с работой</p>
                <div className={s.scale}></div>
                <div className={s.items_wrap}>
                    <div className={s.accent_items}>
                        <div className={s.accent_item}>
                            <img src={practice} alt="practice" />
                            <div className={s.text_wrap}>
                                <h4 className={s.accent_percent}>70%</h4>
                                <p className={s.text}>практика</p>
                            </div>
                        </div>
                        <div className={s.accent_item}>
                            <img src={theory} alt="theory" />
                            <div className={s.text_wrap}>
                                <h4 className={s.accent_percent}>10%</h4>
                                <p className={s.text}>теория</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.accent_wrap}>
                    <div className={s.left_block}>
                        <p id='my_text' className={s.text_base}>Работы в портфолио</p>
                        <p className={s.text_base}>Командные проекты</p>
                        <p className={s.text_base}>Личные проекты</p>
                    </div>
                    <div className={s.right_block}>
                        <p className={s.text_base}>Презентации по всем темам</p>
                        <p className={s.text_base}>Вебинары</p>
                        <p className={s.text_base}>Шаблоны, подборки, чеклисты</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accent;