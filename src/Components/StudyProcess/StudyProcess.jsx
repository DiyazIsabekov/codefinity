import React from 'react';
import s from './StudyProcess.module.scss'
import logo from '../../assets/images/red8.png'



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


const StudyProcess = () => {
    return (

        <section className={s.study}>
            <div className={s.full_info}>
                <h2 className={s.heading}>Как мы учим</h2>
                <h4>Фишки обучения на курсе</h4>
                <div className={s.cards}>
                    {infoData.map((el) => (
                        <div key={el.title} className={s.card}>
                            <h3 className={s.cardTitle}>{el.title}</h3>
                            <p className={s.cardText}>{el.text}</p>
                        </div>
                    ))}
                </div>

                <div className={s.imageWrapper}>
                    <img src={logo} className={s.infinity} alt="infinity" />
                </div>
            </div>
        </section>

    );
};

export default StudyProcess;