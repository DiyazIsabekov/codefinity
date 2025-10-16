import React from 'react';
import styles from './Title.module.scss';

const Title = ({ title, text }) => {
    return (
        <div className={styles.section__info}>
            <p className={styles.section__title}>{title}</p>
            <p className={styles.section__text}>{text}</p>
        </div>
    );
};

export default Title;