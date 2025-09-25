import React from 'react';
import s from './Review.module.scss'

const Review = ({ image, title, text }) => {
    return (
        <div className={s.review_card}>
            <div className={s.logo_wrap}>
                <img src={image} alt="" />
            </div>
            <h3 className={s.name}>{title}</h3>
            <p className={s.review_text}>{text}</p>
        </div>
    );
};

export default Review;