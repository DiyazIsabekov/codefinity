import React from 'react';
import s from './Reviews.module.scss'
import alesya from '../../assets/images/Mask group.png'
import arsenyi from '../../assets/images/arsenyi.png'
import nicolai from '../../assets/images/nikolai.png'
import Review from '../ReviewCard/Review';

const cardsReview = [
    {
        image: alesya,
        title: 'Алеся',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, aliquam egestas consequat',
    },
    {
        image: arsenyi,
        title: 'Арсений',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, aliquam egestas consequat',
    },
    {
        image: nicolai,
        title: 'Николай',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, aliquam egestas consequat',
    }
]

const Reviews = () => {
    return (
        <section>
            <h2>Отзывы наших студентов</h2>
            <div className={s.cards_wrapper}>
                {cardsReview.map((el, i) => (
                    <Review key={i} {...el} />
                ))}
            </div>
        </section>
    );
};

export default Reviews;