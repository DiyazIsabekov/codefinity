import React from 'react';
import s from './Teachers.module.scss';
import pic1 from '../../assets/images/teacher1.png';
import pic2 from '../../assets/images/teacher2.png';
import pic3 from '../../assets/images/teacher3.png';

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
        <section className={s.teachersSection}>
            <a name="teachers"></a>
            <h2>Наши Преподаватели</h2>
            <div className={s.cardWrapper}>
                {teachers.map((el) => (
                    <div key={el.id} className={s.card}>
                        <div className={s.imgWrapper}>
                            <img src={el.img} alt={el.name} />
                        </div>
                        <h3>{el.name}</h3>
                        <p>{el.text}</p>
                    </div>
                ))}
            </div>

        </section>


    );
};

export default Teachers;