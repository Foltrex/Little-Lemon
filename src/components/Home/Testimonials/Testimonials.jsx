import React from 'react';
import styles from './Testimonials.module.css';
import Review from './Review/Review';

const Testimonials = () => {
    const reviews = [
        {  name: 'Sara Lopez', nickname: 'Sara72', avatar: 'https://i.pravatar.cc?img=1',  stars: 5, text: 'Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!'  },
        {  name: 'Jon Do', nickname: 'Johnny_Utah', avatar: 'https://i.pravatar.cc?img=2',  stars: 5, text: 'Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!'  },
        {  name: 'Kon Lopez', nickname: 'kut', avatar: 'https://i.pravatar.cc?img=3',  stars: 5, text: 'Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!'  },
        {  name: 'Pin Lopez', nickname: 'salsd', avatar: 'https://i.pravatar.cc?img=4',  stars: 5, text: 'Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!'  },
    ]

    return (
        <section className={styles.testimonials}>
            <div className={styles.background} />
            <h1 className={styles.title}>
                Testimonials
            </h1>
            <div className={styles.testimonialsGrid}>
                {reviews.map(review => (
                    <Review key={review.nickname} name={review.name} nickname={review.nickname} avatar={review.avatar} stars={review.stars} text={review.text} />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
