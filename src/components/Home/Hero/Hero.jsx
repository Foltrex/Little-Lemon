import React from 'react';
import styles from './Hero.module.css';
import Button from '../../common/Button/Button';
import restauranFood from '../../../assets/images/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.background} />
        <img src={restauranFood} alt="Restaurant Food" />

        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p className="lead-text">
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>

        <Button
          text='Reserve a Table'
          onClick={() => navigate('/booking')}
          ariaLabel='Navigate to reservation page'
        />
      </section>
    </>
  )
}

export default Hero