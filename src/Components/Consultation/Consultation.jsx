import React from 'react';
import s from './Consultation.module.scss'



const Consultation = () => {
    return (
        <section className={s.section}>
            <div className={s.consultWrapper}>
                <div className={s.mainText}>
                    <h4>Получи Бесплатную Консультацию</h4>
                    <h5>Обсудите детали со специалистом.</h5>
                    <p>Твой шаг в будущее начинается с этой простой формы</p>
                </div>
                <form className={s.form}>
                    <input type="text" placeholder="Имя" />
                    <input type="tel" placeholder="Номер" />
                    <button type="submit">Записаться</button>
                </form>

            </div>
        </section>
    );
};

export default Consultation;