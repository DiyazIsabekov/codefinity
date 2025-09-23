import React from 'react';
import s from './StudentsWork.module.scss'
import sw_card_1 from '../../assets/images/sw_card_1.png'
import sw_card_2 from '../../assets/images/sw_card_2.png'
import sw_card_3 from '../../assets/images/sw_card_3.png'

const StudentsWork = () => {
    return (
        <div className={s.students_work}>
            <h2 className={s.students_work_title}>Работы Наших Учеников</h2>
            <div className={s.wrapper_students_work_cards}>
                <div className={s.card_sw}>
                  <img src={sw_card_1} alt="sw_card_1" className={s.sw_picture}/>
                  <p className={s.card_text}>Interior Website</p>
                </div>
                <div className={s.card_sw}>
                   <img src={sw_card_2} alt="sw_card_2" className={s.sw_picture}/>
                   <p className={s.card_text}>Sharethrough</p>
                </div>
                <div className={s.card_sw}>
                  <img src={sw_card_3} alt="sw_card_3" className={s.sw_picture}/>
                  <p className={s.card_text}>Quadrillijn partners</p>
                </div>
            </div>
        </div>
    );
};

export default StudentsWork;