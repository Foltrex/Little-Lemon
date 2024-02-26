import React from 'react';
import Stars from './Stars/Stars';
import styles from './Review.module.css';
import { Image } from '@chakra-ui/react';

const Review = ({ name, nickname, avatar, stars, text }) => {
    return (
        <div className={styles.review}>
            <Stars amount={5} />
            <img src={avatar} alt={nickname} />
            <h2>{name}</h2>
            <p className={styles.nickname}>{nickname}</p>
            <br />
            <p className={styles.text}>{`“${text}”`}</p>
        </div>
    );
}

export default Review;
