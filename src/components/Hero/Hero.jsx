import React from 'react';
import styles from './Hero.module.css';
import Button from '../common/Button/Button';
import restauranFood from '../../assets/images/restauranfood.jpg';

const Hero = (props) => {
  return (
    <>
        <section className={styles.hero}>
            <div className={styles.background} />
            <img src={restauranFood} alt="Restaurant Food" />

            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2>
            <p className="lead-text">
                Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
            </p>

            <Button text='Reserve a Table' style={{ marginTop: '72px'}} />
        </section>
    </>
  )
}

export default Hero